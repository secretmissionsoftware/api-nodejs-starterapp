import { Router } from 'express'
import { SessionUser } from '@freshbooks/app/dist/PassportStrategy'
import { Client } from '@freshbooks/api'

const router = Router()

// ensure only authenticated users for this router
router.use((req, res, next) => {
	if (req.isAuthenticated()) {
		next()
	} else {
		res.redirect('/')
	}
})

router.get('/dashboard', async (req, res) => {
	const user = req.user as SessionUser
	if (user.token) {
		const client = new Client(user.token || '')
		const { data } = await client.users.me()
		let propData = data as any
		let accountId = ''
		if (data && data.businessMemberships && data.businessMemberships.length) {
			;({ accountId } = data.businessMemberships[0].business)
		}

		if (accountId) {
			const { data: paymentData } = await client.payments.list(accountId)
			const paymentCount = paymentData ? paymentData.payments.length : 0

			const { data: expenseData } = await client.expenses.list(accountId)
			const expenseCount = expenseData ? expenseData.expenses.length : 0

			propData = { ...propData, paymentCount, expenseCount }
		}
		res.render('dashboard', propData)
	} else res.redirect('/')
})

router.get('/settings', async (req, res) => {
	const user = req.user as SessionUser
	res.render('settings')
})

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})

export default router

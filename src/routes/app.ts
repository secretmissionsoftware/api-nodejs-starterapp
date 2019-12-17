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
		// const { accountId } = data.businessMemberships
		// 	? data.businessMemberships[0].business
		// 	: { accountId: '' }
		// const {
		// 	data: { payments },
		// } = await client.payments.list(data)
		res.render('dashboard', data)
	} else res.redirect('/')
})

router.get('/logout', (req, res) => {
	req.logout()
	res.redirect('/')
})

export default router

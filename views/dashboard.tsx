import React from 'react'
import User from '@freshbooks/api/dist/models/User'
import Page from './_page'
import { Container, Row, Col, Card } from 'react-bootstrap'

const Dashboard = ({
	firstName,
	lastName,
	paymentCount,
	expenseCount,
}: any) => {
	return (
		<Page>
			<div>
				<nav className="navbar navbar-expand-lg navbar-light bg-light">
					<Container>
						<a className="navbar-brand" href="#">
							FreshBooks + Squarespace
						</a>
						<div className="d-flex justify-content-end">
							<a className="btn btn-secondary btn-large" href="settings">
								Settings
							</a>
						</div>
					</Container>
				</nav>
				<Container className="pt-4">
					{`${firstName} ${lastName}`}
					<Row>
						<Col md={8}>
							<h3>Recent activity</h3>
							<table className="table">
								<thead>
									<tr>
										<th scope="col">Type</th>
										<th scope="col">Event</th>
										<th scope="col">Date</th>
										<th scope="col">Status</th>
									</tr>
								</thead>
								<tbody></tbody>
							</table>
						</Col>

						<Col md={4}>
							<Card className="mb-4">
								<Card.Header>Inventory</Card.Header>
								<Card.Body>
									<Card.Title>
										<h1>{paymentCount}</h1>
									</Card.Title>
									<Card.Subtitle>
										<h6 className="mb-2 text-muted">items synced</h6>
									</Card.Subtitle>
									<Card.Text className="small">
										Last synced: January 01, 2019 12:00:01 am
									</Card.Text>
								</Card.Body>
							</Card>
							<Card className="mb-4">
								<Card.Header>Inventory</Card.Header>
								<Card.Body>
									<Card.Title>
										<h1>{expenseCount}</h1>
									</Card.Title>
									<Card.Subtitle>
										<h6 className="mb-2 text-muted">items synced</h6>
									</Card.Subtitle>
									<Card.Text className="small">
										Last synced: January 01, 2019 12:00:01 am
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
				<nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
					<Container>
						<a className="navbar-brand" href="#">
							FreshBooks + Squarespace
						</a>
						<ul className="navbar-nav mr-auto">
							<li className="nav-item">
								<a className="nav-link" href="#">
									FAQ
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link" href="#">
									Support
								</a>
							</li>
						</ul>
						<span className="navbar-text">Made with ❤️ in Toronto, Canada</span>
					</Container>
				</nav>
			</div>
		</Page>
	)
}

export default Dashboard

import React from 'react'
import { Button, Jumbotron, Container, Row, Col, Card } from 'react-bootstrap'

import Page from './_page'

type IndexProps = {
	callbackUrl: string
}

const Index = ({ callbackUrl }: IndexProps) => (
	<Page>
		<Jumbotron>
			<Container>
				<h1 className="display-4">FreshBooks 🤝 SquareSpace</h1>
				<p className="lead">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
				</p>
				<hr className="my-4" />
				<Button href={callbackUrl}>Get started</Button>
			</Container>
		</Jumbotron>

		<Container>
			<Row>
				<Col md={4}>
					<Card>
						<Card.Body>
							<Card.Title>Inventory</Card.Title>
							<Card.Text>
								Nullam rutrum tellus ut metus congue rhoncus. Curabitur ultrices
								risus sit amet magna ullamcorper suscipit.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card>
						<Card.Body>
							<Card.Title>Inventory</Card.Title>
							<Card.Text>
								Nullam rutrum tellus ut metus congue rhoncus. Curabitur ultrices
								risus sit amet magna ullamcorper suscipit.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
				<Col md={4}>
					<Card>
						<Card.Body>
							<Card.Title>Inventory</Card.Title>
							<Card.Text>
								Nullam rutrum tellus ut metus congue rhoncus. Curabitur ultrices
								risus sit amet magna ullamcorper suscipit.
							</Card.Text>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</Container>
		<nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
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
			</div>
		</nav>
	</Page>
)

export default Index

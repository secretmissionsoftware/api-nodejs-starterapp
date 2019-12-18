import React from 'react'
import { Button, Jumbotron, Container, Row, Col } from 'react-bootstrap'

import Page from './_page'

const Index: React.FC = () => (
	<Page>
		<Jumbotron>
			<Container>
				<h1 className="display-4">Hello, world!</h1>
				<p className="lead">
					Congratulations on setting up your FreshBooks NodeJS app!
				</p>
				<hr className="my-4" />
				<p>
					<Button
						variant="primary"
						href="https://github.com/freshbooks/api-nodejs-starterapp"
					>
						View on Github
					</Button>
				</p>
				<p>
					<Button href={process.env.CALLBACK_URL}>Get started</Button>
				</p>
			</Container>
		</Jumbotron>

		<Container>
			<h2>Configuration</h2>
			<Row>
				<Col>
					<strong>Client ID:</strong>
				</Col>
				<Col xs={10}>{process.env.CLIENT_ID}</Col>
			</Row>
			<Row>
				<Col>
					<strong>Redirect URL:</strong>
				</Col>
				<Col xs={10}>{process.env.CALLBACK_URL}</Col>
			</Row>
			<Row>
				<Col>
					<strong>Authorization URL:</strong>
				</Col>
				<Col xs={10}>{process.env.AUTHORIZATION_URL}</Col>
			</Row>
		</Container>
		<nav className="navbar fixed-bottom navbar-expand-lg navbar-dark bg-primary">
			<div className="container">
				<a className="navbar-brand" href="#">
					FreshBooks Starterapp
				</a>
				<span className="navbar-text">Made with ❤️ in Toronto, Canada</span>
			</div>
		</nav>
	</Page>
)

export default Index

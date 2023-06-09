import { Container, Row, Col, Stack, Button } from 'react-bootstrap';

function App() {
	return (
		<Container>
			<Row>
				<Col><h1>Welcome to QuickBills</h1></Col>
			</Row>
			<Row>
				<Col>Here you can manager 'clients', 'devis' and 'factures'</Col>
			</Row>

			<Row>
				<Col className='text-center'>
					<Stack direction="horizontal" gap={3}>
						<Button variant="primary">Clients</Button>
						<Button variant="primary">Devis</Button>
						<Button variant="primary">Factures</Button>
					</Stack>
				</Col>
			</Row>

			<Row>
				<Col className='text-center'>
					<Stack direction="horizontal" gap={3}>
						<Button variant="primary">Settings</Button>
					</Stack>
				</Col>
			</Row>

			<Row>
				<Col className='text-center'>
					<Button variant="primary">Clients</Button>
				</Col>
				<Col className='text-center'>
					<Button variant="primary">Devis</Button>
				</Col>
				<Col className='text-center'>
					<Button variant="primary">Factures</Button>
				</Col>
			</Row>
		</Container>
	);
}

export default App

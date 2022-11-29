import Card from 'react-bootstrap/Card';
import pago from '../Files/Support/pago.png'
const SupportContainer = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pago} />
          <Card.Body>
            <Card.Title>Pagos</Card.Title>
          </Card.Body>
        </Card>
      );
    }

export default SupportContainer;
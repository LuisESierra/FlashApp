import Card from 'react-bootstrap/Card';
import burger from '../Files/Foods/burger.jpg'

const FoodContainer = () => {
    return (
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={burger} />
          <Card.Body>
            <Card.Title>Burger</Card.Title>
          </Card.Body>
        </Card>
      );
    }

export default FoodContainer;
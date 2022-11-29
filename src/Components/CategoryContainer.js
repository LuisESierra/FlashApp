import Card from 'react-bootstrap/Card';
import rest from '../Files/Categories/rest.png';

const CategoryContainer = () => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={rest} />
      <Card.Body>
        <Card.Title>Restaurante</Card.Title>
      </Card.Body>
    </Card>
  );
}

export default CategoryContainer;
import Card from 'react-bootstrap/Card';
import pc from '../Files/storehome/ord1.png'


const StoreHomeContainer = () => {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={pc} />
            <Card.Body>
                <Card.Title>Computer</Card.Title>
            </Card.Body>
        </Card>
    );
}

export default StoreHomeContainer;
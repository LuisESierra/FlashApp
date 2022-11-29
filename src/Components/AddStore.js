import '../CSSFiles/Components/AddStore.css'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import moda from '../Files/Categories/moda.png'
import Button from 'react-bootstrap/Button';

const AddStore = () => {
    return (
        <div>
            <Row xs={1} md={2} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={moda}/>
                            <Card.Body>
                                <Button variant="secondary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default AddStore;
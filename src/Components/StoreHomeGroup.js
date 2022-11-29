import '../CSSFiles/Components/Categories.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import shops from '../Files/logos/shops.png'
import StoreHomeContainer from './StoreHomeContainer';

const StoreHomeGroup = () => {
    return (
        <div>
            <h4> <img src={shops} /> Computadoras</h4>
            <div className='container'>
                <Row xs={1} md={5} className="g-4">
                    {Array.from({ length: 5 }).map((_, idx) => (
                        <Col className='rows'>
                            <StoreHomeContainer></StoreHomeContainer>
                        </Col>
                    ))}
                </Row>
            </div>
        </div>

    );
}

export default StoreHomeGroup;
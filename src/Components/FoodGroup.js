import '../CSSFiles/Components/Categories.css'
import FoodContainer from './FoodContainer';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import shops from '../Files/logos/shops.png';

const FoodGroup = () => {
    return (
  <div>
    <h4> <img src={shops}/> Tiendas</h4>
        <div className='container'>
            <Row xs={2} md={5} className="g-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                    <Col className='rows'>
                    <FoodContainer></FoodContainer>
                    </Col>
                ))}
            </Row>
        </div>
  </div>


    );
}

export default FoodGroup;
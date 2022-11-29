import '../CSSFiles/Components/Categories.css'
import SupportContainer from '../Components/SupportContainer.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FoodContainer from './FoodContainer';

const SupportCatalog = () => {
    return (
  <div>
        <div className='container'>
            <Row xs={2} md={5} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col className='rows'>
                    <SupportContainer></SupportContainer>
                    </Col>
                ))}
            </Row>
        </div>
  </div>


    );
}

export default SupportCatalog;
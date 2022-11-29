import '../CSSFiles/Components/Categories.css'
import CategoryContainer from '../Components/CategoryContainer.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Categories = () => {
    return (
  <div>
        <div className='container'>
            <Row xs={2} md={5} className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col className='rows'>
                    <CategoryContainer></CategoryContainer>
                    </Col>
                ))}
            </Row>
        </div>
  </div>


    );
}

export default Categories;
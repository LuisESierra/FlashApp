import Col from 'react-bootstrap/Col';
import '../CSSFiles/ScreenStoreHome.css';
import Button from 'react-bootstrap/Button';
import StoreHomeGroup from '../Components/StoreHomeGroup';
import edit from '../Files/logos/edit.png'

export const ScreenStoreHome = () => {
    return (
        <div>
            <div className='textbox'>
                <h2 className='title1'>Bienvenido a tu negocio <img></img></h2>
                <h2 className='title2'>Tienda de Kevin <img src={edit}></img></h2>
                <h2 className='title3'>E-comerce <img src={edit}></img></h2>
                <Button variant="danger">Añadir Producto</Button>
            </div>

            <div>
                <Col className='rows'>
                    <StoreHomeGroup></StoreHomeGroup>
                </Col>
            </div>

            <div>
                <Col className='rows'>
                    <StoreHomeGroup></StoreHomeGroup>
                </Col>
            </div>

        </div>
    );
}

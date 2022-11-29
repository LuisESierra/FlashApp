
import '../CSSFiles/Components/AddProduct.css';
import Button from 'react-bootstrap/Button';

const AddProducts = () => {
    return (
        <body className='center'>
            <div >
                <h2>
                    Añade productos a tu tienda
                </h2>
                <h6>
                    Ingresa los siguientes datos de tu producto
                </h6>
            </div>

            <div>
                <h6>Nombre del producto</h6>
                <input className='inputt'></input>
                <h6>Costo en pesos colombianos</h6>
                <input className='inputt'></input>
            </div>
            
            <div className='button1'>
                <Button variant="secondary">Cargar Imagen</Button>
            </div>

            <div className='button2'>
                <Button variant="danger">Añadir producto</Button>
            </div >
        </body>
    )

}
export default AddProducts

import Button from 'react-bootstrap/Button';
import AddStore from '../Components/AddStore';
import NavBar from '../Components/Navbar';
import '../CSSFiles/ScreenAddStore.css'

export const ScreenAddStore = () => {
    return (
        <div className='back'>
            <div className='bg'>
                <div className='titletext'>
                    <h1>Crea tu tienda</h1>
                    <h4> 1. Que tipo de tienda sera?</h4>
                </div>
                <div className='checkboxes'>
                    <input type="checkbox" id='option1' />
                    <label for="option1"> Alimentos</label><br></br>
                    <input type="checkbox" id='option2' />
                    <label for="option2"> E-comerse</label><br></br>
                    <input type="checkbox" id='option3' />
                    <label for="option3"> Restaurante</label><br></br>
                    <input type="checkbox" id='option4' />
                    <label for="option4"> Farmacia</label><br></br>
                </div>

                <div className='options'>
                    <h4>2. ¿Cuál de estos productos se adapta más a tu tienda?</h4>
                    <AddStore></AddStore>
                </div>

                <div className='fill'>
                    <h4>3. Datos de tu tienda</h4>
                    <h5>Nombre de tu marca</h5>
                    <input></input>
                    <h5>Direccion del local</h5>
                    <input className='input'></input>
                    <Button variant="danger">Continuar</Button>
                </div>
            </div>
        </div>
    )

}

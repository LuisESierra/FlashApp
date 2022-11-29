import Button from 'react-bootstrap/Button';
import '../CSSFiles/ScreenStoreFeedback.css'

export const ScreenStoreFeedback = () => {
    return (
        <body>


            <div className='center'>
                <h1>¡Felicidades!</h1>
                <h4>Tu tienda se ha creado</h4>

                <Button variant="danger" className='but1'>Ir a tu tienda</Button>

                <Button variant="warning" className='but2'>Ir al inicio</Button>
            </div>

        </body>
    )

}
 
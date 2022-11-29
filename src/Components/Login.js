import Button from 'react-bootstrap/Button';
import '../CSSFiles/Components/Login.css'

const Login = () => {
    return (
        <div>
            <div className="title">
                <h1>Antojo?</h1>
                <h1>Pidelo por </h1>
                <h1>Flash</h1>
            </div>

            <div>
                <Button variant="danger" className="gbutton"> Continuar con correo electronico </Button>
                <Button variant="warning" className="cbutton"> Continuar con numero de celular </Button>
            </div>

        </div>
    );
}

export default Login;
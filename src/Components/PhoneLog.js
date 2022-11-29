
import { useState, useEffect } from 'react';
import { Button } from 'react-bootstrap'
import '../CSSFiles/Components/PhoneLog.css'
import { signInWithGoogle } from "../backend/firebase/firebase-config";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword  } from "firebase/auth";
import { auth } from '../backend/firebase/firebase-config';
import { db } from '../backend/firebase/firebase-config';

const PhoneLog = () => {

    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setregisterPassword] = useState("");

    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
    
    }, [])  

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                registerEmail,
                registerPassword
            );
        } catch (e) {
            console.log(e.message);
        }

    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                loginEmail,
                loginPassword
            );
            console.log(user);
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            <div className='p'>
                <h4>Iniciar Sesion</h4>

                <h5>Ir a Flash</h5>

                <h6>Correo Electronico</h6>

                <input className='inpLog' onChange={(event) => { setLoginEmail(event.target.value); }} />

                <h6>Contrasena</h6>

                <input className='passwLo' onChange={(event) => { setLoginPassword(event.target.value); }} />

                <Button onClick={login} variant="danger" className='bun'> Continuar Sesion</Button>

                <Button onClick={signInWithGoogle} variant="danger" className='bun'> Iniciar con Google</Button>

                <h4>
                    Usuario loggeado:
                </h4>
                {user.email}


            </div>

            <div className='p'>
                <h4>Crea tu cuenta</h4>

                <h6>Correo Electronico</h6>

                <input className='inpSign' onChange={(event) => { setRegisterEmail(event.target.value); }} />

                <h6>Contrasena</h6>

                <input className='passwSign' onChange={(event) => { setLoginPassword(event.target.value); }} />

                <Button onClick={register} variant="danger" className='bun'> Crear Cuenta</Button>
            </div>
        </div>



    );
}

export default PhoneLog;
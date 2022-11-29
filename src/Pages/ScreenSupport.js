import SupportCatalog from '../Components/SupportCatalog';
import '../CSSFiles/ScreenSupport.css'


export const ScreenSupport = () => {
    return (
        <div>


            <div className='textblock'>
                <h1>Bienvenido a Soporte Técnico</h1>
                <d>¿En qué podemos ayudarte?</d>
            </div>

            <div className='catalog'>
                <SupportCatalog></SupportCatalog>
            </div>
        </div>


    )

}
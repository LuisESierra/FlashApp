import GiantLogo from '../Files/Giant Logo/GiantLogo.png'
import '../CSSFiles/ScreenDesktop.css'
import Categories from '../Components/Categories';

export const ScreenDesktop = () => {
    return (
        <body>
            <div>
                <img src={GiantLogo} alt='flashlogo' className='deskimg' />
            </div>

            <div>
                <p>Hola, Kevin!</p>
                <h3>Categorias</h3>
            </div>

            <div className="categories">
                <Categories></Categories>
            </div>
        </body>
    );
}
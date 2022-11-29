import '../CSSFiles/Components/Categories.css'

import Carousel from 'react-bootstrap/Carousel';
import burrito from '../Files/Promos/burrito.png';
import pollo from '../Files/Promos/pollo.png';
import pancakes from '../Files/Promos/pancakes.png';
import burgertwo from '../Files/Promos/burgertwo.png';
import '../CSSFiles/Components/Offers.css';
import sales from '../Files/logos/sales.png';

const Offers = () => {
    return (
        <div>
            <h4> <img src={sales}/> Ofertas</h4>
            <Carousel>
                <Carousel.Item interval={4000}>
                    <img
                        className="foodimg"
                        src={burrito}
                        alt="First slide"
                    />

                    <Carousel.Caption>
                        <h3>Burrito Mexicano</h3>
                    </Carousel.Caption>

                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="foodimg"
                        src={pollo}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Pollo Asado</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="foodimg"
                        src={pancakes}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Pancakes</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item interval={4000}>
                    <img
                        className="foodimg"
                        src={burgertwo}
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3>Burger</h3>
                    </Carousel.Caption>

                </Carousel.Item>
            </Carousel>
        </div>

    );
}

export default Offers;
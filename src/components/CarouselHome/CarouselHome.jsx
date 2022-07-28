import './CarouselHome.css'
import { Carousel } from 'react-bootstrap'

function CarouselHome() {
    return (
        <div className="carouselHome">
            <Carousel className="carousel-cars" >

                <Carousel.Item interval={1500} >
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1659007661/car_small_xmiqlj.png"
                        alt="First slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1659008386/car_medium_od4hd2.png"
                        alt="Second slide"
                    />
                </Carousel.Item>

                <Carousel.Item interval={1500}>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1659013080/van_eirjia.png"
                        alt="Third slide"
                    />
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default CarouselHome;
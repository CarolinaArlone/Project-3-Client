import './CarouselHome.css'
import { Carousel } from 'react-bootstrap'

function CarouselHome() {
    return (
        <div className="carouselHome">
            <Carousel className="carousel-cars" >

                <Carousel.Item >
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658917175/1_vljcns.png"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658917175/2_ba6dn4.png"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658917175/3_qhdfqy.png"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
}

export default CarouselHome;
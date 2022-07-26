import './CarouselHome.css'
import { Carousel } from 'react-bootstrap'

function CarouselHome() {
    return (
        <Carousel >
            <Carousel.Item >
                <img
                    className="d-block w-100"
                    src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658670846/vvjcj2edhbfytiecmuh6.png"
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
                    src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658670846/vvjcj2edhbfytiecmuh6.png"
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
                    src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658670846/vvjcj2edhbfytiecmuh6.png"
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
    );
}

export default CarouselHome;
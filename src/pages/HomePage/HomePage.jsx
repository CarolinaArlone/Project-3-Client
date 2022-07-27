import { Carousel } from "bootstrap"
import CarouselHome from './../../components/CarouselHome/CarouselHome'
import Home from './../../components/Home/Home'
import Maps from './../../components/Maps/Maps'
import './HomePage.css'

const HomePage = () => {

    return (

        <section className="HomePage">
            <Home />
            <CarouselHome />
            <div className="margin-map-home"> <Maps /></div>
           
        </section>

    )
}

export default HomePage
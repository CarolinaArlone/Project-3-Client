import { Carousel } from "bootstrap"
import CarouselHome from './../../components/CarouselHome/CarouselHome'
import Home from './../../components/Home/Home'
const HomePage = () => {

    return (

        <section>
            <div className='home-img'>
                {/* <img src='https://res.cloudinary.com/djs7qv2pt/image/upload/v1658734774/fondogoto_fme6si.webp' alt="home" /> */}
                <Home />
            </div>
            <CarouselHome />
        </section>

    )
}

export default HomePage
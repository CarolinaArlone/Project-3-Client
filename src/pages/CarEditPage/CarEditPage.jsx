import { Container } from "react-bootstrap"
import CarEditForm from "../../components/CarEditForm/CarEditForm"


const CarEditPage = () => {
    return (
        <Container>
            <h1> Editar coche</h1>
            <CarEditForm />
        </Container>

    )
}

export default CarEditPage
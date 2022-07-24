


const CarDetails = ({ brand, model, plate, description, imageUrl, dayPrice, size, seats, transmission, fuelType }) => {

    return (
        <>
            {{ imageUrl } ? <img src={imageUrl} alt="Foto coche" /> : <img src="https://res.cloudinary.com/djs7qv2pt/image/upload/v1658487043/elorqhew4azlkd7nvpwj.png" alt="Foto coche" />}
            <h1>Detalles del coche {brand}</h1>
            <h3>Modelo: {model}</h3>
            <h3>Matricula: {plate}</h3>
            <p>Número de asientos: {seats}</p>
            <p>Descripción: {description} </p>
            <p>Tipo de combustible: {fuelType}</p>
            <p>Precio por día: {dayPrice} </p>
            <p>Tamaño del coche:{size}</p>
            <p>Transmisión: {transmission}</p>

        </>
    )
}

export default CarDetails
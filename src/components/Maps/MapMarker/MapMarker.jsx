import { Marker, InfoWindow } from '@react-google-maps/api'
import { useState, useContext } from "react"
import { useNavigate } from 'react-router-dom'
import { CarContext } from '../../../context/cars.context'
import { useParams } from 'react-router-dom'

const MapMarker = () => {

    const [selected, setSelected] = useState({})

    const onSelect = item => {
        setSelected(item)
    }

    const navigate = useNavigate()
    const { cars } = useContext(CarContext)

    return (
        <>
            {
                cars.map(car => {
                    return (

                        <Marker key={car._id}
                            position={{
                                lat: car.location.coordinates[0],
                                lng: car.location.coordinates[1]
                            }}
                            icon={{ url: 'https://res.cloudinary.com/djs7qv2pt/image/upload/v1658570113/marker_g0g3ti.png' }}
                            onMouseOver={() => onSelect(car)}
                        />

                    )
                })
            }
            {
                selected.location &&
                (
                    <InfoWindow
                        position={{
                            lat: selected.location.coordinates[0],
                            lng: selected.location.coordinates[1]
                        }}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                    >

                        <>
                            <h6>{selected.brand}</h6>

                            <p>{selected.dayPrice}€</p>

                            <p onClick={() => navigate(`/mireserva/${selected._id}`)}>Reservar</p>
                        </>

                    </InfoWindow>
                )
            }
        </>
    )
}

export default MapMarker
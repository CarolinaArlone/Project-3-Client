import { Marker, InfoWindow } from '@react-google-maps/api'
import { useState, useContext } from "react"
import { CarContext } from '../../../context/cars.context'




const MapMarker = () => {

    const [selected, setSelected] = useState({})

    const { cars } = useContext(CarContext)

    console.log('cars array ', cars)

    const onSelect = item => {
        setSelected(item)
    }

    return (
        <>
            {
                cars.map(car => {
                    return (
                        <Marker key={car._id}
                            position={{ lat: car.location.coordinates[0], lng: car.location.coordinates[1] }}
                            onClick={() => onSelect(car)}
                        />
                    )
                })
            }
            {
                selected.location &&
                (
                    <InfoWindow
                        position={selected.location}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                    >
                        <p>{selected.car.brand}</p>
                    </InfoWindow>
                )
            }
        </>
    )
}

export default MapMarker
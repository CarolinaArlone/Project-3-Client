import { Marker, InfoWindow } from '@react-google-maps/api'
import { useState, useContext } from "react"
import { CarContext } from '../../../context/cars.context'


const MapMarker = () => {

    const [selected, setSelected] = useState({})

    const onSelect = item => {
        setSelected(item)
    }

    const { cars } = useContext(CarContext)

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
                        position={{ lat: selected.location.coordinates[0], lng: selected.location.coordinates[1] }}
                        clickable={true}
                        onCloseClick={() => setSelected({})}
                    >
                        <>
                            <h6>{selected.brand}</h6>
                            <p>{selected.dayPrice}€</p>
                        </>

                    </InfoWindow>
                )
            }
        </>
    )
}

export default MapMarker
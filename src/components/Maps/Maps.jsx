import React from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useContext } from "react"
import { CarContext } from '../../context/cars.context'
import MapMarker from './MapMarker/MapMarker'

const MapContainer = () => {

    const [selected, setSelected] = useState({})

    const { cars } = useContext(CarContext)

    console.log('cars array ', cars)

    /* const onSelect = item => {
        setSelected(item);
    }
 */
    /*    const locations = [
           {
               title: "coche 1",
               location: {
                   lat: 40.393414136642654,
                   lng: -3.697484403235343
               },
           },
           {
               title: "coche 2",
               location: {
                   lat: 40.39277297605926,
                   lng: -3.696996186968523
               },
           },
       ] */

    const mapStyles = {
        height: "100vh",
        width: "100%"
    };

    const defaultCenter = {
        lat: 40.450045243559806, lng: - 3.6757696628786736
    }

    return (

        <LoadScript
            googleMapsApiKey='AIzaSyDLf7y6k5PGx_cjdDPGxNq8wy7UDjKTajo'>

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={defaultCenter}>

                <MapMarker />

                {/*  {
                    cars.map(car => {
                        return (
                            <Marker key={car._id}
                                position={{ lat: car.location.coordinates[0], lng: car.location.coordinates[0] }}
                                onClick={() => onSelect(car)}
                            />
                        )
                    })
                } */}
                {/* {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.title}</p>
                        </InfoWindow>
                    )
                } */}
            </GoogleMap>

        </LoadScript>
    )
}

export default MapContainer


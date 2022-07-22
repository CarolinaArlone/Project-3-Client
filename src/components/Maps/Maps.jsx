import React, { useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { useState, useContext } from "react"
import { CarContext } from '../../context/cars.context'
import MapMarker from './MapMarker/MapMarker'
import { Navigate } from 'react-router-dom';

const MapContainer = () => {

    const [update, setUpdate] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            console.log('update')
            setUpdate(value => !value)
        }, 4000)
    }, [])

    const [selected, setSelected] = useState({})

    const { cars } = useContext(CarContext)

    console.log('cars array yey', cars)

    const onSelect = item => {
        setSelected(item);

    }

    
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
                
            </GoogleMap>

        </LoadScript>
    )
}

export default MapContainer


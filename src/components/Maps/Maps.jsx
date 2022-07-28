import React, { useEffect } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { useState } from "react"
import MapMarker from './MapMarker/MapMarker'
import './StylesMap'

const MapContainer = () => {

    const [update, setUpdate] = useState(false)

    const mapStyles = {
        height: "100vh",
        width: "100%",
        
    }

    const defaultCenter = {
        lat: 40.450045243559806,
        lng: - 3.6757696628786736
    }

    return (

        <LoadScript googleMapsApiKey='AIzaSyDLf7y6k5PGx_cjdDPGxNq8wy7UDjKTajo'>

            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={12}
                center={defaultCenter}>
                    

                <MapMarker />
                
            </GoogleMap>

        </LoadScript>
    )
}

export default MapContainer


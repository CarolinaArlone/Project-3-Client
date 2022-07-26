import { useContext, useEffect, useState } from "react"
import { CarContext } from "../../context/cars.context"

const TotalPay = ({ car_id, ranges }) => {

    const { getOneCar } = useContext(CarContext)
    const [carData, setCarData] = useState({})

    const firstDay = ranges[0].startDate
    const secondDay = ranges[0].endDate

    const numberofDays = Math.round((secondDay - firstDay) / (1000 * 60 * 60 * 24) + 1)

    useEffect(() => {
        getOneCar(car_id)
            .then(({data}) => setCarData(data))
            .catch(err => console.log(err))
        
    }, [])

    return (
        <>
            <h5>Precio total {Number(carData.dayPrice) * numberofDays}€</h5>
        </>
    )
}

export default TotalPay
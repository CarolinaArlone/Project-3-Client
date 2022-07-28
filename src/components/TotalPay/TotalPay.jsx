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
            .then(({ data }) => {
                setCarData(data)
            })
            .catch(err => console.log(err))

    }, [])

    return (
        <>
            <div>
                <div className="row m-0 mb-5 receipt">
                    <div className="col-12 px-4">
                        <div className="d-flex justify-content-between mb-2">
                            <p className="textmuted">Matrícula</p>
                            <p className="h4 m-0"><span className="fs-14 fw-bold">{carData.plate}</span></p>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="textmuted">Día(s)</p>
                            <p className="fs-14 fw-bold">{numberofDays}</p>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <p className="textmuted">Precio por día</p>
                            <p className="fs-14 fw-bold">{carData.dayPrice}€</p>
                        </div> 
                    </div>
                    <div className="col-12 px-0">
                        <div className="row bg-light m-0">
                            <div className="col-12 px-4 my-4 d-flex justify-content-between mb-3">
                                <p className="fw-bold">Total</p>
                                <span className="fas fa-dollar-sign mt-1 pe-1 fs-14 "></span><span className="h4">{Number(carData.dayPrice) * numberofDays}€</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TotalPay
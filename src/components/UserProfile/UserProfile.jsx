import { useEffect, useState } from 'react'
import { Card, Button, Modal } from 'react-bootstrap'
import userService from '../../services/user.services'
import { useParams } from 'react-router-dom'
import EditUserProfile from '../EditUserProfile/EditUserProfile'
import bookingService from '../../services/booking.services'
import ReviewForm from '../ReviewForm/ReviewForm'


const UserProfile = () => {

    const [userData, setUserData] = useState({})
    const [bookingData, setBookingData] = useState([])
    const [formOpen, setFormOpen] = useState(false)
    const [showModal, setShowModal] = useState({
        show: false,
        carId: undefined
    })

    const { user_id } = useParams()

    const formOpenHandler = () => {
        setFormOpen(state => !state)
    }


    useEffect(() => {
        loadUserInfo()
    }, [])

    const loadUserInfo = () => {
        userService
            .findUser(user_id)
            .then(({ data }) => {
                setUserData(data)
            })
            .then(
                bookingService
                    .findBookingUser(user_id)
                    .then(({ data }) => {
                        setBookingData(data)
                    }))
            .catch(err => console.log(err))
    }

    const fireFinalActions = () => {
        closeModal()
        loadUserInfo()
    }

    const openModal = (carId) => setShowModal({ show: true, carId })
    const closeModal = () => setShowModal(false)
    return (

        <>
            {!formOpen ?
                <Card className="UserCard mb-4">
                    <Card.Img variant="top" src={userData.profileImg} />
                    <Card.Body>
                        <Card.Title>{userData.username}</Card.Title>
                        <Card.Title>{userData.email}</Card.Title>
                        <Button onClick={formOpenHandler} variant="primary">Editar</Button>
                        <h3>Mis reservas</h3>
                        {
                            bookingData.map(booking => {
                                const firstDate = new Date(booking.booking.startDate)
                                const finalDate = new Date(booking.booking.endDate)
                                return (
                                    <Card.Title key={booking.booking._id} >
                                        - Coche {booking.car.brand} con matrícula {booking.car.plate} del {firstDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} al {finalDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
                                        <Button onClick={() => openModal(booking.car._id)} variant="success">Añadir reseña</Button>
                                    </Card.Title>
                                )

                            })
                        }

                        <Modal show={showModal.show} onHide={closeModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>Nueva reseña</Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <ReviewForm car_id={showModal.carId} fireFinalActions={fireFinalActions} />
                            </Modal.Body>
                        </Modal>

                    </Card.Body>
                </Card >
                :
                <EditUserProfile formOpenHandler={formOpenHandler} refreshUser={loadUserInfo} />
            }
        </>

    )
}

export default UserProfile
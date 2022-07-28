import { useEffect, useState } from 'react'
import { Card, Button, Modal, Row, Col } from 'react-bootstrap'
import userService from '../../services/user.services'
import { useParams } from 'react-router-dom'
import EditUserProfile from '../EditUserProfile/EditUserProfile'
import bookingService from '../../services/booking.services'
import ReviewForm from '../ReviewForm/ReviewForm'
import './UserProfile.css'

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

                < Card className="rounded mx-auto userProfile" >
                    <Card.Header className="p-0">
                        <Card.Img variant="top" src={userData.profileImg} />
                    </Card.Header>
                    <Card.Body>
                        <Card.Title className="text-dark title-userProfile-card">{userData.username}</Card.Title>
                        <Card.Text className="text-dark title-userProfile-card">{userData.email}</Card.Text>
                        <Button className='buttonProfile' onClick={formOpenHandler} variant="primary">Editar</Button>
                    </Card.Body >
                </Card >
                :
                <EditUserProfile formOpenHandler={formOpenHandler} refreshUser={loadUserInfo} />
            }

            <Modal show={showModal.show} onHide={closeModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Nueva reseña</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ReviewForm car_id={showModal.carId} fireFinalActions={fireFinalActions} />
                </Modal.Body>
            </Modal>

            <h3>Mis reservas</h3>
            {
                bookingData.map(booking => {
                    const firstDate = new Date(booking.booking.startDate)
                    const finalDate = new Date(booking.booking.endDate)
                    return (
                        <div key={booking.booking._id} className="eachPastBooking">
                            <Row>
                                <Col md={8}>
                                    <h6>{firstDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })} - {finalDate.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}</h6>
                                    <h6> {booking.car?.brand} ({booking.car?.plate})</h6>
                                </Col>

                                <Col md={4} className="btn-column">
                                    <Button className="btn-reseña" onClick={() => openModal(booking.car._id)} variant="success">Añadir reseña</Button>
                                </Col>


                            </Row>
                        </div>
                    )

                })
            }
        </>

    )
}

export default UserProfile

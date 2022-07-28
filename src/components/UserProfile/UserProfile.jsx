import { useContext, useEffect, useState } from 'react'
import { Card, Button, Modal, Row, Col } from 'react-bootstrap'
import userService from '../../services/user.services'
import { useParams } from 'react-router-dom'
import EditUserProfile from '../EditUserProfile/EditUserProfile'
import bookingService from '../../services/booking.services'
import ReviewForm from '../ReviewForm/ReviewForm'
import './UserProfile.css'
import MyBookings from './MyBookings'
import { AuthContext } from '../../context/auth.context'

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

    const { user } = useContext(AuthContext)

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
                <>
                    <Row>

                        <Col>
                            <div className="profilePicture" style={{ backgroundImage: `url(${userData.profileImg})` }}></div>
                        </Col>

                        <Col>
                            <h2 className='textFont'>{userData.username}</h2>
                            <h4 className='userEmail'>{userData.email}</h4>
                            <Button className='buttonProfile' onClick={formOpenHandler} variant="primary">Editar</Button>
                        </Col>
                    </Row>
                </>
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

            {user?.role != 'ADMIN' && <MyBookings bookingData={bookingData} openModal={openModal} />}
        </>

    )
}

export default UserProfile

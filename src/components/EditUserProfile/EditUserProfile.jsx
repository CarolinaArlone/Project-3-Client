import { Form, Button, Container } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import uploadService from '../../services/upload.services'
import { useNavigate, useParams } from 'react-router-dom'
import Loader from '../Loader/Loader'
import userService from '../../services/user.services'


const EditUserProfile = ({formOpenHandler}) => {

    const { user_id } = useParams()
    const [loadingImage, setLoadingImage] = useState(false)
    const [loadingUser, setLoadingUser] = useState(true)

    const [userData, setUserData] = useState({
        username: '',
        email: '',
        profileImg: '',
    })

    const { username, email, profileImg } = userData

    useEffect(() => {

        userService
            .findUser(user_id)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))
        setLoadingUser(false)
    }, [])

    const handleInputChange = e => {
        const { name, value } = e.target
        setUserData({ ...userData, [name]: value })
    }

    const uploadUserImage = e => {

        setLoadingImage(true)
        const uploadData = new FormData()
        uploadData.append('imageData', e.target.files[0])

        uploadService
            .uploadImage(uploadData)
            .then(({ data }) => {
                setLoadingImage(false)
                setUserData({ ...userData, profileImg: data.cloudinary_url })
            })
            .catch(err => console.log(err))
    }

    const handleSubmit = e => {
        e.preventDefault()

        userService
            .editUser(user_id, userData)
            .then(({ data }) => {
                setUserData(data)
                formOpenHandler()
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            {
                loadingUser
                    ?
                    <Loader />
                    :
                    <Container className='formEdit'>
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" >
                                <Form.Label>Nombre de usuario</Form.Label>
                                <Form.Control type="text" name="username" value={username} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group className="mb-3" >
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="text" name="email" value={email} onChange={handleInputChange} />
                            </Form.Group>

                            <Form.Group controlId="profileImg" className="mb-3">
                                <Form.Label>Imagen de perfil</Form.Label>
                                <Form.Control type="file" onChange={uploadUserImage} />
                            </Form.Group>

                            <Button variant="primary" type="submit" disabled={loadingImage}>{loadingImage ? 'Un momento...' : 'guardar cambios'}

                            </Button>
                        </Form>
                    </Container>
            }
        </>
    )
}

export default EditUserProfile
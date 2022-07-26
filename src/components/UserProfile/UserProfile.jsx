import { useEffect, useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import userService from '../../services/user.services'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import EditUserProfile from '../EditUserProfile/EditUserProfile'


const UserProfile = () => {

    const [userData, setUserData] = useState({})
    const [formOpen, setFormOpen] = useState(false)

    const { user_id } = useParams()

    const formOpenHandler = () => {
        setFormOpen(state => !state)
    }

    useEffect(() => {
        userService
            .findUser(user_id)
            .then(({ data }) => {
                setUserData(data)
            })
            .catch(err => console.log(err))

    }, [])

    
    return (

        
        <>
            {!formOpen ?
                <Card className="UserCard mb-4">
                    <Card.Img variant="top" src={userData.profileImg} />
                    <Card.Body>
                        <Card.Title>{userData.username}</Card.Title>
                        <Card.Title>{userData.email}</Card.Title>
                    <Button onClick={formOpenHandler} variant="primary">Editar</Button>
                    </Card.Body>
                </Card >
                :
                <EditUserProfile formOpenHandler={formOpenHandler}/>
            }
        </>
        
    )
}

export default UserProfile
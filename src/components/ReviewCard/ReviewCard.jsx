import { Col, Toast } from "react-bootstrap"

const Reviewcard = ({ reviews }) => {
    console.log(reviews)

    return (
        <>
            {reviews?.map(review =>
                <Col key={review._id}>
                    <Toast>
                        <Toast.Header closeButton={false}>
                            <img src={review.user.profileImg} className="rounded me-2" alt="" style={{
                                width: '50px'
                            }} />
                            <strong className="me-auto">{review.user.username}</strong>
                            <small>{new Date(review.user.createdAt).toDateString('es-ES').split(' ').slice(1).join(' ')}</small>
                        </Toast.Header>
                        <Toast.Body>{review.content}</Toast.Body>
                    </Toast>
                </Col>
            )}
        </>
    )
}

export default Reviewcard
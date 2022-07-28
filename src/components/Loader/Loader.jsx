import { Spinner } from 'react-bootstrap'
import "./Loader.css"

const Loader = () => {

    return (

        <Spinner className='spinner' animation="border" variant="danger">
            <span className="visually-hidden">Loading...</span>
        </Spinner>

    )
}

export default Loader
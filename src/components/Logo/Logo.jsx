import "./Logo.css"
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Logo = () => {

    return (

        <div className="Logo">

            <Link to="/">
                <Nav.Link as="span" ></Nav.Link>
                <img src='\logo_white.png' alt="Te Llevo logo" />
            </Link>


        </div>

    )

}

export default Logo
import "./Footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {

    const handleClickYoutube = () => {
        window.open("https://www.linkedin.com/company/gotoglobal/")
    }

    const handleClickInstagram = () => {
        window.open("https://www.instagram.com/goto_es/")
    }

    const handleClickFacebook = () => {
        window.open("https://www.facebook.com/gotomobility")
    }

    return (
        <>
            <footer>
                <div className='line' />
                <div className="grupo-1">
                    <div className="box-footer">
                        <p className="title-footer"> <Link className="text-decoration-none" to="/registro">ÚNETE</Link></p>
                        <p>Crear cuenta</p>
                        <p>Trabaja en GoTo</p>
                    </div>
                    <div className="box-footer">
                        <p className="title-footer"> <Link className="text-decoration-none" to="/iniciar-sesion">INICIA SESIÓN</Link></p>
                        <p>Política de cookies</p>
                        <p>Política de privacidad</p>
                    </div>
                    <div className="box-footer">
                        <p className="title-footer">¡SIGUENOS!</p>
                        <div className='socialMedia'>

                            <button onClick={handleClickFacebook} className='icon facebook'>
                                <FontAwesomeIcon icon={faFacebook} />
                            </button>

                            <button onClick={handleClickInstagram} className='icon instagram'>
                                <FontAwesomeIcon icon={faInstagram} />
                            </button>

                            <button onClick={handleClickYoutube} className='icon youtube'>
                                <FontAwesomeIcon icon={faYoutube} />
                            </button>

                        </div>
                    </div>
                </div>
                <div className="grupo-2">
                    <small> © 2022 - Todos los derechos reservados</small>
                </div>

            </footer>

        </>
    )

}

export default Footer
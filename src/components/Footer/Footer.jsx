import './Footer.css'

const Footer = () => {

    return (

        <footer className="footer-distributed  fixed-bottom">

            <div className="footer-right">

                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-github"></i></a>

            </div>

            <div className="footer-left">

                <p className="footer-links">

                    <a className="link-1" href="/">Inicio</a>
                    <a href="/registro">Únete</a>
                    <a href="/iniciar-sesion">Inicia sesión</a>

                </p>

                <p>Te llevo &copy; 2022</p>

            </div>

        </footer>
    )
}

export default Footer
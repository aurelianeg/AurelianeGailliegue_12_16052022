import { Link } from 'react-router-dom'
import './Error.css'

/**
 * React component to create the error page when URL is incorrect
 * @returns { React.ReactElement } Error page
 */
function Error() {
   return (
      <div className="error_container">
         <h1 className="error_number">Erreur</h1>
         <h2 className="error_description">
            Une erreur est survenue, veuillez réessayer plus tard.
         </h2>
         <Link className="home_link" to="/">
            Retourner sur la page d'accueil
         </Link>
      </div>
   )
}

export default Error

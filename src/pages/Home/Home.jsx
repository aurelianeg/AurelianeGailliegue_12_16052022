import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
   if (!props.mock) {
      return (
         <div className="home_container">
            <Link className="home_link" to="/12">
               Utilisateur 12
            </Link>
            <Link className="home_link" to="/18">
               Utilisateur 18
            </Link>
         </div>
      )
   } else {
      return (
         <div className="home_container">
            <Link className="home_link" to="/10">
               Utilisateur 10
            </Link>
            <Link className="home_link" to="/25">
               Utilisateur 25
            </Link>
         </div>
      )
   }
}

export default Home

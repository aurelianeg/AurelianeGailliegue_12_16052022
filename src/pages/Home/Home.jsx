import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
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
}

export default Home

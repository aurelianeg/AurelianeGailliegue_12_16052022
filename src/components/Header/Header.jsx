import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import './Header.css'

function Header() {
   return (
      <div className="header_container">
         <img className="header_logo" src={logo} alt="SportSee logo" />
         <NavLink className="nav_link" to="/">
            Accueil
         </NavLink>
         <NavLink className="nav_link" to="/profile">
            Profil
         </NavLink>
         <NavLink className="nav_link" to="/settings">
            Réglages
         </NavLink>
         <NavLink className="nav_link" to="/community">
            Communauté
         </NavLink>
      </div>
   )
}

export default Header

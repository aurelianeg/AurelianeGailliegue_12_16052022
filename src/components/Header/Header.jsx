import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'
import './Header.css'

/**
 * React component to create the App header with logo and navigation
 * @returns { React.ReactElement } Header component
 */
function Header() {
   return (
      <div className="header_container">
         <a className="header_link" href="/">
            <img className="header_logo" src={logo} alt="SportSee logo" />
         </a>
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

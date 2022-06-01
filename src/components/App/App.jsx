import React from 'react'
import propTypes from 'prop-types'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../../utils/style/GlobalStyle'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Error from '../../pages/Error/Error'
import './App.css'

/**
 * React component for App with React Router
 * @param { {mock: Boolean} } props - mock: Mocked data (true) or API data (false)
 * @returns { React.ReactElement } App
 */
function App(props) {
   return (
      <div className="app_container">
         <Router>
            <GlobalStyle />
            <Header />
            <div className="main_container">
               <Aside />
               <Routes>
                  <Route
                     exact
                     path="/"
                     element={<Home mock={props.mock} />}
                  ></Route>
                  <Route
                     path="/:id"
                     element={<Dashboard mock={props.mock} />}
                  ></Route>
                  <Route path="*" element={<Error />}></Route>
               </Routes>
            </div>
         </Router>
      </div>
   )
}

App.propTypes = {
   mock: propTypes.bool.isRequired,
}

export default App

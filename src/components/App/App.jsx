import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../../utils/style/GlobalStyle'
import Header from '../Header/Header'
import Aside from '../Aside/Aside'
import Home from '../../pages/Home/Home'
import Dashboard from '../../pages/Dashboard/Dashboard'
import Error from '../../pages/Error/Error'
import './App.css'

function App() {
   return (
      <div className="app_container">
         <Router>
            <GlobalStyle />
            <Header />
            <div className="main_container">
               <Aside />
               <Routes>
                  <Route exact path="/" element={<Home />}></Route>
                  <Route path="/:id" element={<Dashboard />}></Route>
                  <Route path="*" element={<Error />}></Route>
               </Routes>
            </div>
         </Router>
      </div>
   )
}

export default App

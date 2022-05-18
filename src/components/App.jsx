import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import GlobalStyle from '../utils/style/GlobalStyle'
import Header from '../components/Header/Header'
import Aside from '../components/Aside/Aside'

function App() {
   return (
      <div className="app_container">
         <Router>
            <GlobalStyle />
            <Header />
            <Aside />
            <Routes>
               <Route exact path="/"></Route>
            </Routes>
         </Router>
      </div>
   )
}

export default App

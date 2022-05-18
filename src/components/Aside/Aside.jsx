import yoga from '../../assets/icons/yoga.svg'
import swimming from '../../assets/icons/swimming.svg'
import bicycle from '../../assets/icons/bicycle.svg'
import dumbbell from '../../assets/icons/dumbbell.svg'
import './Aside.css'

function Aside() {
   return (
      <div className="aside_container">
         <a className="aside_button" href="/">
            <img className="aside_icon" src={yoga} alt="Yoga icon" />
         </a>
         <a className="aside_button" href="/">
            <img className="aside_icon" src={swimming} alt="Swimming icon" />
         </a>
         <a className="aside_button" href="/">
            <img className="aside_icon" src={bicycle} alt="Bicycle icon" />
         </a>
         <a className="aside_button" href="/">
            <img className="aside_icon" src={dumbbell} alt="Dumbbell icon" />
         </a>
         <p className="aside_text">Copyright, SportSee 2020</p>
      </div>
   )
}

export default Aside

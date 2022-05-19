import './Energy.css'

function Energy(props) {
   return (
      <div className="energy">
         <img
            className={`energy_logo energy_logo--${props.type}`}
            src={props.img}
            alt={props.name}
         />
         <div className="energy_text">
            <p className="energy_text_quantity">{props.quantity}</p>
            <p className="energy_text_type">{props.name}</p>
         </div>
      </div>
   )
}

export default Energy

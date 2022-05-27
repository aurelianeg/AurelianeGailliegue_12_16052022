import propTypes from 'prop-types'
import './Energy.css'

/**
 * React component to create a energy element with icon, number and type of input
 * @param { SVGElement, string, string, string } props - img: SVG element, name: French name, quantity: number and unit for element, type: English name
 * @returns { React.ReactElement } Energy component
 */
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

Energy.propTypes = {
   img: propTypes.node.isRequired,
   name: propTypes.string.isRequired,
   quantity: propTypes.string.isRequired,
   type: propTypes.string.isRequired,
}

export default Energy

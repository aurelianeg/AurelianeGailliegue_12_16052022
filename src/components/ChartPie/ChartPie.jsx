import propTypes from 'prop-types'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'
import './ChartPie.css'

function ChartPie(props) {
   return (
      <ResponsiveContainer>
         <PieChart>
            <Pie
               data={propTypes.data}
               dataKey="value"
               nameKey="name"
               cx="50%"
               cy="50%"
               outerRadius={50}
               fill="#8884d8"
            />
         </PieChart>
      </ResponsiveContainer>
   )
}

export default ChartPie

import { ResponsiveContainer, RadialBarChart, RadialBar } from 'recharts'
import './ChartRadialBar.css'

function ChartRadialBar(props) {
   return (
      <ResponsiveContainer>
         <RadialBarChart
            data={props.data}
            cx="50%"
            cy="50%"
            innerRadius="10%"
            outerRadius="80%"
            barSize={10}
         >
            <RadialBar
               dataKey="todayScore"
               minAngle={15}
               label={{ position: 'insideStart', fill: '#E60000' }}
               background
               clockWise
            />
            {/* <Legend iconSize={10} layout="vertical" verticalAlign="middle" wrapperStyle={style} /> */}
         </RadialBarChart>
      </ResponsiveContainer>
   )
}

export default ChartRadialBar

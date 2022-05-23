import {
   ResponsiveContainer,
   Legend,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   Radar,
} from 'recharts'
import './ChartRadar.css'

function ChartRadar(props) {
   return (
      <ResponsiveContainer>
         <RadarChart data={props.data} outerRadius={90}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
               name="Mike"
               dataKey="A"
               stroke="#8884d8"
               fill="#8884d8"
               fillOpacity={0.6}
            />
            <Legend />
         </RadarChart>
      </ResponsiveContainer>
   )
}

export default ChartRadar

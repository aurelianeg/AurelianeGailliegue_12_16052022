import {
   ResponsiveContainer,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   Radar,
} from 'recharts'
import './ChartRadar.css'

function ChartRadar(props) {
   const data = JSON.parse(JSON.stringify(props.data))
   // Rotate data to fit titles in container
   data.unshift(data.pop())

   const axisTitles = JSON.parse(JSON.stringify(props.axisTitles))
   const frenchAxisTitles = {
      cardio: 'Cardio',
      energy: 'Energie',
      endurance: 'Endurance',
      strength: 'Force',
      speed: 'Vitesse',
      intensity: 'Intensité',
   }
   // Replace axis numbers by English names then by French names
   for (let i = 0; i < data.length; i++) {
      data[i].kind = frenchAxisTitles[axisTitles[data[i].kind]]
   }

   return (
      <ResponsiveContainer>
         <RadarChart data={data} outerRadius={90}>
            <PolarGrid stroke="#FFFFFF" radialLines={false} />
            <PolarAngleAxis
               dataKey="kind"
               tick={{
                  fontSize: 12,
                  fill: '#FFFFFF',
               }}
            />
            <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
         </RadarChart>
      </ResponsiveContainer>
   )
}

export default ChartRadar

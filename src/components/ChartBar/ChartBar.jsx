import {
   ResponsiveContainer,
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
} from 'recharts'
import './ChartBar.css'

const ChartBarTooltip = ({ active, payload }) => {
   if (active && payload) {
      return (
         <div className="chart_bar_tooltip">
            <p>{payload[0].value}kg</p>
            <p>{payload[1].value}kCal</p>
         </div>
      )
   } else {
      return null
   }
}

function ChartBar(props) {
   const data = JSON.parse(JSON.stringify(props.data))
   // Replace dates by numbers on X axis
   for (let i = 0; i < data.length; i++) {
      data[i].day = i + 1
   }

   return (
      <ResponsiveContainer height={260}>
         <BarChart
            data={data}
            margin={{
               top: 20,
               right: 20,
               bottom: 20,
               left: 20,
            }}
            barGap={8}
         >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
               dataKey="day"
               tick={{ fontSize: 14, fill: '#9B9EAC' }}
               tickLine={false}
               dy={20}
               stroke="#DEDEDE"
            />
            <YAxis
               yAxisId="kg"
               dataKey="kilogram"
               domain={['dataMin-2', 'dataMax+2']}
               orientation="right"
               tick={{ fontSize: 14, fill: '#9B9EAC' }}
               axisLine={false}
               tickLine={false}
               dx={30}
            />
            <YAxis
               yAxisId="kCal"
               datakey="calories"
               domain={['dataMin-50', 'dataMax+50']}
               hide={true}
            />
            <Tooltip content={ChartBarTooltip} />
            <Legend
               wrapperStyle={{
                  top: -20,
                  left: 40,
                  fontSize: 14,
               }}
               verticalAlign="top"
               align="right"
               iconType="circle"
               iconSize={8}
            />
            <Bar
               dataKey="kilogram"
               yAxisId="kg"
               name="Poids (kg)"
               fill="#282D30"
               barSize={7}
               radius={[10, 10, 0, 0]}
            />
            <Bar
               dataKey="calories"
               yAxisId="kCal"
               name="Calories brûlées (kCal)"
               fill="#E60000"
               barSize={7}
               radius={[10, 10, 0, 0]}
            />
         </BarChart>
      </ResponsiveContainer>
   )
}

export default ChartBar

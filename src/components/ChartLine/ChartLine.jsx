import {
   ResponsiveContainer,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   LineChart,
   Line,
} from 'recharts'
import './ChartLine.css'

const ChartLineTooltip = ({ active, payload }) => {
   if (active && payload) {
      return (
         <div className="chart_line_tooltip">
            <p>{payload[0].value} min</p>
         </div>
      )
   } else {
      return null
   }
}

function ChartLine(props) {
   const weekDays = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
   const data = JSON.parse(JSON.stringify(props.data))
   // Replace dates by days on X axis
   for (let i = 0; i < data.length; i++) {
      data[i].day = weekDays[i]
   }

   return (
      <ResponsiveContainer height={165}>
         <LineChart
            data={data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <defs>
               <linearGradient id="colorUv" x1="0%" y1="0" x2="100%" y2="0">
                  <stop offset="0%" stopColor="#EE7572" />
                  <stop offset="100%" stopColor="#FFFFFF" />
               </linearGradient>
            </defs>

            <CartesianGrid
               strokeDasharray="3 3"
               horizontal={false}
               vertical={false}
            />
            <XAxis
               dataKey="day"
               axisLine={false}
               tickLine={false}
               tick={{ fontSize: 12, fill: '#F5BFBD' }}
               dy={15}
            />
            <YAxis dataKey="sessionLength" hide={true} />
            <Tooltip
               content={ChartLineTooltip}
               cursor={{
                  strokeLinecap: 'square',
                  stroke: '#000000',
                  strokeOpacity: 0.1,
                  strokeWidth: 50,
                  height: 5000,
               }}
            />
            <Line
               type="monotone"
               dataKey="sessionLength"
               stroke="url(#colorUv)"
               activeDot={{
                  stroke: '#FFFFFF',
                  strokeOpacity: 0.1,
                  strokeWidth: 10,
                  r: 4,
                  fill: '#FFFFFF',
               }}
               dot={false}
            />
         </LineChart>
      </ResponsiveContainer>
   )
}

export default ChartLine

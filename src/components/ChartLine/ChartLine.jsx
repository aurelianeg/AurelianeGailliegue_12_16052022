import {
   ResponsiveContainer,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   LineChart,
   Line,
} from 'recharts'
import './ChartLine.css'

function ChartLine(props) {
   return (
      <ResponsiveContainer>
         <LineChart
            data={props.data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="pv" stroke="#8884d8" />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
         </LineChart>
      </ResponsiveContainer>
   )
}

export default ChartLine

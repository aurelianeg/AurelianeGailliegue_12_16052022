import React from 'react'
import propTypes from 'prop-types'
import {
   ResponsiveContainer,
   RadialBarChart,
   PolarAngleAxis,
   RadialBar,
} from 'recharts'
import './ChartRadialBar.css'

/**
 * React component to create a radial bar chart with Recharts
 * @param { {data: Array} } props - data: array containing score for the day
 * @returns { React.ReactElement } ChartRadialBar component
 */
function ChartRadialBar(props) {
   const data = JSON.parse(JSON.stringify(props.data))

   // Get percentage from score value in data
   let scoreValue = 0
   if (data.todayScore) {
      scoreValue = Math.ceil(data.todayScore * 100)
   } else {
      scoreValue = Math.ceil(data.score * 100)
   }
   // Create a new array with score data (avoid problems with data name 'todayScore' or 'score')
   let chartData = [
      {
         score: scoreValue,
      },
   ]

   return (
      <ResponsiveContainer width={260}>
         <RadialBarChart
            cy={100}
            innerRadius={90}
            outerRadius={100}
            barSize={10}
            data={chartData}
            startAngle={90}
            endAngle={450}
         >
            <PolarAngleAxis
               type="number"
               domain={[0, 100]}
               angleAxisId={0}
               tick={false}
            />
            <RadialBar dataKey="score" cornerRadius="10" fill="#FF0000" />
            <text
               className="chart_radialbar_percent_text"
               x="50%"
               y="35%"
               textAnchor="middle"
            >
               {scoreValue} %
            </text>
            <text
               className="chart_radialbar_goal_text"
               x="50%"
               y="46%"
               textAnchor="middle"
               opacity="0.5"
            >
               de votre
            </text>
            <text
               className="chart_radialbar_goal_text"
               x="50%"
               y="57%"
               textAnchor="middle"
               opacity="0.5"
            >
               objectif
            </text>
         </RadialBarChart>
      </ResponsiveContainer>
   )
}

ChartRadialBar.propTypes = {
   data: propTypes.object.isRequired,
}

export default ChartRadialBar

import {
   ResponsiveContainer,
   BarChart,
   CartesianGrid,
   XAxis,
   YAxis,
   Tooltip,
   Legend,
   Bar,
   LineChart,
   Line,
   RadarChart,
   PolarGrid,
   PolarAngleAxis,
   PolarRadiusAxis,
   Radar,
   PieChart,
   Pie,
} from 'recharts'
import Energy from '../../components/Energy/Energy'
import calories from '../../assets/icons/calories.svg'
import proteins from '../../assets/icons/proteins.svg'
import carbohydrates from '../../assets/icons/carbohydrates.svg'
import lipids from '../../assets/icons/lipids.svg'
import './Home.css'

function Home() {
   return (
      <div className="home_container">
         <div className="welcome_container">
            <div className="name_text">
               <p>Bonjour</p>
               <p className="name_user">Auréliane</p>
            </div>
            <p className="welcome_text">
               Félicitations ! Vous avez explosé vos objectifs hier 👏
            </p>
         </div>

         <div className="info_container">
            <div className="charts_container">
               <ResponsiveContainer
                  className="chart_container chart_container--bar"
                  height={320}
               >
                  <BarChart>
                     <CartesianGrid strokeDasharray="3 3" />
                     <XAxis dataKey="name" />
                     <YAxis />
                     <Tooltip />
                     <Legend />
                     <Bar dataKey="pv" fill="#8884d8" />
                     <Bar dataKey="uv" fill="#82ca9d" />
                  </BarChart>
               </ResponsiveContainer>

               <div className="charts_square">
                  <ResponsiveContainer
                     className="chart_container chart_container--line"
                     width={'30%'}
                  >
                     <LineChart
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
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

                  <ResponsiveContainer
                     className="chart_container chart_container--radar"
                     width={'30%'}
                  >
                     <RadarChart outerRadius={90}>
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

                  <ResponsiveContainer
                     className="chart_container chart_container--pie"
                     width={'30%'}
                  >
                     <PieChart>
                        <Pie
                           /* data={} */
                           dataKey="value"
                           nameKey="name"
                           cx="50%"
                           cy="50%"
                           outerRadius={50}
                           fill="#8884d8"
                        />
                     </PieChart>
                  </ResponsiveContainer>
               </div>
            </div>

            <div className="energy_container">
               <Energy
                  img={calories}
                  name="Calories"
                  quantity="1,930kCal"
                  type="calories"
               />

               <Energy
                  img={proteins}
                  name="Protéines"
                  quantity="155g"
                  type="proteins"
               />

               <Energy
                  img={carbohydrates}
                  name="Glucides"
                  quantity="290g"
                  type="carbohydrates"
               />

               <Energy
                  img={lipids}
                  name="Lipides"
                  quantity="50g"
                  type="lipids"
               />
            </div>
         </div>
      </div>
   )
}

export default Home

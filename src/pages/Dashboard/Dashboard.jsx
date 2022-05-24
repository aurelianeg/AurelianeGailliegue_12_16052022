import { useFetch } from '../../utils/hooks/useFetch'
import { useParams } from 'react-router-dom'
import ChartBar from '../../components/ChartBar/ChartBar'
import ChartLine from '../../components/ChartLine/ChartLine'
import ChartRadar from '../../components/ChartRadar/ChartRadar'
import ChartRadialBar from '../../components/ChartRadialBar/ChartRadialBar'
import Energy from '../../components/Energy/Energy'
import calories from '../../assets/icons/calories.svg'
import proteins from '../../assets/icons/proteins.svg'
import carbohydrates from '../../assets/icons/carbohydrates.svg'
import lipids from '../../assets/icons/lipids.svg'
import Loader from '../../components/Loader/Loader'
import Error from '../Error/Error'
import './Dashboard.css'

function Dashboard() {
   const { id } = useParams('/')

   const {
      data: userData,
      isDataLoading: isUserDataLoading,
      error: userError,
   } = useFetch('http://localhost:3001/user/' + id)

   const {
      data: activityData,
      isDataLoading: isActivityDataLoading,
      error: activityError,
   } = useFetch('http://localhost:3001/user/' + id + '/activity')

   const {
      data: sessionsData,
      isDataLoading: isSessionsDataLoading,
      error: sessionsError,
   } = useFetch('http://localhost:3001/user/' + id + '/average-sessions')

   const {
      data: performanceData,
      isDataLoading: isPerformanceDataLoading,
      error: performanceError,
   } = useFetch('http://localhost:3001/user/' + id + '/performance')

   if (userError || activityError || sessionsError || performanceError) {
      return <Error />
   } else {
      if (
         isUserDataLoading ||
         isActivityDataLoading ||
         isSessionsDataLoading ||
         isPerformanceDataLoading
      ) {
         return <Loader />
      } else {
         let userName = userData.userInfos.firstName
         let userCalorieCount = userData.keyData.calorieCount
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
         let userProteinCount = userData.keyData.proteinCount
         let userCarbohydrateCount = userData.keyData.carbohydrateCount
         let userLipidCount = userData.keyData.lipidCount

         return (
            <div className="dashboard_container">
               <div className="welcome_container">
                  <div className="name_text">
                     <h1>Bonjour</h1>
                     <h1 className="name_user">{userName}</h1>
                  </div>
                  <h2 className="welcome_text">
                     Félicitations ! Vous avez explosé vos objectifs hier 👏
                  </h2>
               </div>

               <div className="info_container">
                  <div className="chart_container">
                     <div className="chart chart_long chart--bar">
                        <h3 className="chart_title chart_title--bar">
                           Activité quotidienne
                        </h3>
                        <ChartBar data={activityData.sessions} />
                     </div>

                     <div className="chart chart_square chart--line">
                        <h3 className="chart_title chart_title--line">
                           Durée moyenne des sessions
                        </h3>
                        <ChartLine data={sessionsData.sessions} />
                     </div>

                     <div className="chart chart_square chart--radar">
                        <ChartRadar
                           data={performanceData.data}
                           axisTitles={performanceData.kind}
                        />
                     </div>

                     <div className="chart chart_square chart--radialbar">
                        <h3 className="chart_title chart_title--radialbar">
                           Score
                        </h3>
                        <ChartRadialBar data={userData} />
                     </div>
                  </div>

                  <div className="energy_container">
                     <Energy
                        img={calories}
                        name="Calories"
                        quantity={userCalorieCount + 'kCal'}
                        type="calories"
                     />

                     <Energy
                        img={proteins}
                        name="Protéines"
                        quantity={userProteinCount + 'g'}
                        type="proteins"
                     />

                     <Energy
                        img={carbohydrates}
                        name="Glucides"
                        quantity={userCarbohydrateCount + 'g'}
                        type="carbohydrates"
                     />

                     <Energy
                        img={lipids}
                        name="Lipides"
                        quantity={userLipidCount + 'g'}
                        type="lipids"
                     />
                  </div>
               </div>
            </div>
         )
      }
   }
}

export default Dashboard

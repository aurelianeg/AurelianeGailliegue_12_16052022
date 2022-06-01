import React from 'react'
import propTypes from 'prop-types'
import { useParams } from 'react-router-dom'
import { useGetData } from '../../utils/hooks/useGetData'
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

/**
 * React component to create the dashboard page with user data
 * @param { {mock: Boolean} } props - mock: Mocked data (true) or API data (false)
 * @returns { React.ReactElement } Dashboard page
 */
function Dashboard(props) {
   const { id } = useParams('/')

   const {
      userData,
      isUserDataLoading,
      userError,
      activityData,
      isActivityDataLoading,
      activityError,
      sessionsData,
      isSessionsDataLoading,
      sessionsError,
      performanceData,
      isPerformanceDataLoading,
      performanceError,
   } = useGetData(props.mock, id)

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
                        <ChartLine
                           data={sessionsData.sessions}
                           dates={activityData.sessions}
                        />
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
                        <div className="chart_radialbar_background_circle"></div>
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

Dashboard.propTypes = {
   mock: propTypes.bool.isRequired,
}

export default Dashboard

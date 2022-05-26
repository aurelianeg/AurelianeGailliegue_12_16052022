import { useFetch } from './useFetch'

const serverMock = "http://localhost:8000/"
const server = "http://localhost:3001/user/"

export function useGetData(mock, id) {

   let url, urlSep, userUrl, activityUrl, averageSessionsUrl, performanceUrl
   if (!mock) {
      url = server + id
      urlSep = '/'
   }
   else {
      url = serverMock + id
      urlSep = '-'
   }
   userUrl = url
   activityUrl = url + urlSep + 'activity'
   averageSessionsUrl = url + urlSep + 'average-sessions'
   performanceUrl = url + urlSep + 'performance'

   const {
      data: userData,
      isDataLoading: isUserDataLoading,
      error: userError,
   } = useFetch(userUrl)

   const {
      data: activityData,
      isDataLoading: isActivityDataLoading,
      error: activityError,
   } = useFetch(activityUrl)

   const {
      data: sessionsData,
      isDataLoading: isSessionsDataLoading,
      error: sessionsError,
   } = useFetch(averageSessionsUrl)

   const {
      data: performanceData,
      isDataLoading: isPerformanceDataLoading,
      error: performanceError,
   } = useFetch(performanceUrl)

   return { userData, isUserDataLoading, userError,
      activityData, isActivityDataLoading, activityError,
      sessionsData, isSessionsDataLoading, sessionsError,
      performanceData, isPerformanceDataLoading, performanceError }
}

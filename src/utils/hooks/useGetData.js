import { useFetch } from './useFetch'

/**
 * React hook to get data from mocked data or API (using useFetch)
 * @param { Boolean } mock - Mocked data (true) or API data (false)
 * @param { Number } id - User ID
 * @returns { {Array, Boolean, Boolean, Array, Boolean, Boolean, Array, Boolean, Boolean, Array, Boolean, Boolean} }
 */
export function useGetData(mock, id) {

   const serverMock = "http://localhost:8000/"
   const server = "http://localhost:3001/user/"
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

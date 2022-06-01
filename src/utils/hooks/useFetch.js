import { useState, useEffect } from 'react'

/**
 * React hook to fetch data on an given URL
 * @param { String } url - URL containing data to fetch
 * @returns { {data: Array, isDataLoading: Boolean, error: Boolean} } - data: array containing fetched data, isDataLoading: boolean to know if the data is loaded or not, error: boolean to know if an error occurred or not 
 */
export function useFetch(url) {
   const [data, setData] = useState([])
   const [isDataLoading, setDataLoading] = useState(true)
   const [error, setError] = useState(false)

   useEffect(() => {
      async function getData() {
         setDataLoading(true)
         try {
            const response = await fetch(url)
            if (!response.ok) {
               setError(true)
            }
            const data = await response.json()
            setData(data.data)
         } catch (error) {
            console.log('Error at fetch: ', error)
            setError(true)
         } finally {
            setDataLoading(false)
         }
      }
      getData()
   }, [url])

   return { data, isDataLoading, error }
}
import { useState, useEffect } from 'react'

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
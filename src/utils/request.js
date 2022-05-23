import { useFetch } from './hooks/useFetch'

function fetchData() {
   const {
      data,
      isLoading,
      error
   } = useFetch('http://localhost:3001/user/' + userId + '/average-sessions')
   
   return { data, isLoading, error }
}

export default fetchData
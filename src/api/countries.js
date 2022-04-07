import axios from 'axios'

const BASE_URL = 'http://localhost:5005/api'

const getCountriesFromApi = async () => {
  const { data } = await axios.get(`${BASE_URL}/countries/`)
  return data
}

const getCountryFromApi = async (cca3) => {
  const { data } = await axios.get(`${BASE_URL}/countries/${cca3}`)
  return data
}

export { getCountriesFromApi, getCountryFromApi }

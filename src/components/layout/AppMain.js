import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Countries from '../../pages/Countries'
import Country from '../../pages/Country'
import CountryList from '../countries/CountryList'
import { useState } from 'react'

const AppMain = () => {
  const [visited, setVisited] = useState([])
  const [totalCountryCount, setTotalCountryCount] = useState(0)

  const toggleVisited = (cca3) => {
    const visitedIndex = visited.indexOf(cca3)
    if (visitedIndex !== -1) {
      setVisited([
        visited.slice(0, visitedIndex),
        visited.slice(visitedIndex + 1),
      ])
    } else {
      setVisited([...visited, cca3])
    }
  }

  const getIsVisited = (cca3) => {
    const visitedIndex = visited.indexOf(cca3)
    return visitedIndex !== -1
  }

  const countryList = (
    <CountryList
      toggleVisited={toggleVisited}
      getIsVisited={getIsVisited}
      setTotalCountryCount={setTotalCountryCount}
    />
  )

  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route
          path='/countries'
          element={
            <Countries
              visitedCount={visited.length}
              totalCountryCount={totalCountryCount}
            />
          }
        >
          <Route index element={countryList} />
          <Route
            path=':cca3'
            element={
              <Country
                toggleVisited={toggleVisited}
                getIsVisited={getIsVisited}
              />
            }
          />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </main>
  )
}

export default AppMain

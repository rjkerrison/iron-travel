import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Countries from '../../pages/Countries'
import Country from '../../pages/Country'
import CountryList from '../countries/CountryList'
import { useState } from 'react'

const AppMain = () => {
  const [visitedCount, setVisitedCount] = useState(0)
  const [totalCountryCount, setTotalCountryCount] = useState(0)

  const decreaseVisitedCount = () => {
    setVisitedCount(visitedCount - 1)
  }
  const increaseVisitedCount = () => {
    setVisitedCount(visitedCount + 1)
  }

  const countryList = (
    <CountryList
      increaseVisitedCount={increaseVisitedCount}
      decreaseVisitedCount={decreaseVisitedCount}
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
              visitedCount={visitedCount}
              totalCountryCount={totalCountryCount}
            />
          }
        >
          <Route index element={countryList} />
          <Route
            path=':cca3'
            element={
              <Country
                increaseVisitedCount={increaseVisitedCount}
                decreaseVisitedCount={decreaseVisitedCount}
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

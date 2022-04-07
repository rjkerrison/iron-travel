import { Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import Countries from '../../pages/Countries'
import Country from '../../pages/Country'

const AppMain = () => {
  return (
    <main>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/countries' element={<Countries />}>
          <Route path=':cca3' element={<Country />} />
        </Route>
        <Route path='*' element={<h2>404</h2>} />
      </Routes>
    </main>
  )
}

export default AppMain

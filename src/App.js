import './App.css'
import AppFooter from './components/layout/AppFooter'
import AppHeader from './components/layout/AppHeader'
import AppMain from './components/layout/AppMain'

function App() {
  const appName = 'IronTravel'
  const appDescription = 'Plan your next trip (after the bootcamp)'

  return (
    <div className='App'>
      <AppHeader
        className='pink'
        appName={appName}
        appDescription={appDescription}
      />
      <AppMain />
      <AppFooter />
    </div>
  )
}

export default App

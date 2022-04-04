import './App.css'
import AppFooter from './components/AppFooter'
import AppHeader from './components/AppHeader'
import AppMain from './components/AppMain'

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

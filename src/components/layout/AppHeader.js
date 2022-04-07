import { Link } from 'react-router-dom'
import './AppHeader.css'

const AppHeader = (props) => {
  return (
    <header className={`App-header`}>
      <h1>{props.appName}</h1>
      <p>{props.appDescription}</p>
      <nav>
        <Link className='App-link' to='/'>
          Home
        </Link>
        <Link className='App-link' to='/countries'>
          Countries
        </Link>
      </nav>
    </header>
  )
}

export default AppHeader

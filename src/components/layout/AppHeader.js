import './AppHeader.css'

const AppHeader = (props) => {
  return (
    <header className={`App-header`}>
      <h1>{props.appName}</h1>
      <p>{props.appDescription}</p>
      <nav>
        <a className='App-link' href='/'>
          Homepage
        </a>
      </nav>
    </header>
  )
}

export default AppHeader

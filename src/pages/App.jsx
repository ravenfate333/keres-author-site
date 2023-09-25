// adding Link from react-router-dom for internal linking
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <div>
      </div>
      <h1>HOME</h1>
        <p>
          This will be the home page
        </p>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      {/* added to demonstrate how to use <Link> instead of <a> for changing to internal pages */}
      <Link to={'/sample'}>Sample Page Here</Link>

    </>
  )
}

export default App

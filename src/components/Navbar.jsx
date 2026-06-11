import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

function Navbar() {

  const { theme, toggleTheme } = useContext(UserContext)

  return (
<nav className={`navbar ${theme}`}>
<h2>User Dashboard</h2>
<button onClick={toggleTheme}>

        Switch Theme
</button>
</nav>

  )

}

export default Navbar
 
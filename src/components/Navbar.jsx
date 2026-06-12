import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Navbar() {
 const { theme, toggleTheme } = useContext(UserContext)
 return (
<nav className={`navbar ${theme}`}>
<h2>Employee Dashboard</h2>
<button onClick={toggleTheme}>
       Toggle Theme
</button>
</nav>
 )
}
export default Navbar
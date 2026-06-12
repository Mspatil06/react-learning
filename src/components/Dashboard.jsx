import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Dashboard() {
 const { user, theme } = useContext(UserContext)
 return (
<div className={`dashboard ${theme}`}>
<h1>Welcome {user.name}</h1>
<p>Current Role: {user.role}</p>
<p>Organization: {user.company}</p>
<p>Theme: {theme}</p>
</div>
 )
}
export default Dashboard
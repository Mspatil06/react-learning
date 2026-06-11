import { useContext } from 'react'
import { UserContext } from '../context/UserContext'
function Dashboard() {
 const { user, theme } = useContext(UserContext)
 return (
<div className={`dashboard ${theme}`}>
<h1>Welcome {user.name}</h1>
<p>
       You are logged in as {user.role}
</p>
<p>
       Theme Mode: {theme}
</p>
</div>
 )
}
export default Dashboard
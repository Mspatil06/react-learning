import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

function ProfileCard() {

  const { user, theme } = useContext(UserContext)

  return (
<div className={`card ${theme}`}>
<h2>{user.name}</h2>
<p>Email: {user.email}</p>
<p>Role: {user.role}</p>
<p>Company: {user.company}</p>
</div>

  )

}

export default ProfileCard
 
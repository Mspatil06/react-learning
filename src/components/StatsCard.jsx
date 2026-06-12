import { useContext } from 'react'

import { UserContext } from '../context/UserContext'

function StatsCard() {

  const { theme } = useContext(UserContext)

  return (
<div className={`stats ${theme}`}>
<h3>Dashboard Statistics</h3>
<p>Total Projects: 12</p>
<p>Completed Tasks: 48</p>
<p>Pending Tasks: 7</p>
</div>

  )

}

export default StatsCard
 
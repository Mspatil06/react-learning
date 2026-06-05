import { useEffect, useState } from 'react'

import UserCard from './components/UserCard'

import './App.css'

function App() {

  const [users, setUsers] = useState([])

  const [loading, setLoading] = useState(true)

  const [search, setSearch] = useState('')

  useEffect(() => {

    fetch('https://jsonplaceholder.typicode.com/users')

      .then(response => response.json())

      .then(data => {
        
        setUsers(data)

        setLoading(false)

      })

      .catch(error => {
 
        console.log(error) 

        setLoading(false)

      })

  }, [])

  const filteredUsers = users.filter(user =>

    user.name.toLowerCase().includes(search.toLowerCase())

  )

  return (
<div className="container">
<h1>User Management Dashboard</h1>
<input

        type="text"

        placeholder="Search User..."

        value={search}

        onChange={e => setSearch(e.target.value)}

      />
<h3>Total Users: {filteredUsers.length}</h3>

      {loading ? (
<h2>Loading Users...</h2>

      ) : (
<div className="user-container">

          {filteredUsers.map(user => (
<UserCard

              key={user.id}

              user={user}

            />

          ))}
</div>

      )}
</div>

  )

}

export default App
 
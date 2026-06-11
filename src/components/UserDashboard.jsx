import { useState, useEffect } from 'react'
function UserDashboard() {
 const [users, setUsers] = useState([])
 const [filteredUsers, setFilteredUsers] = useState([])
 const [search, setSearch] = useState('')
 const [loading, setLoading] = useState(true)
 const [error, setError] = useState('')
 useEffect(() => {
   fetchUsers()
 }, [])
 useEffect(() => {
   const result = users.filter(user =>
     user.name.toLowerCase().includes(search.toLowerCase())
   )
   setFilteredUsers(result)
 }, [search, users])
 const fetchUsers = async () => {
   try {
     const response = await fetch(
       'https://jsonplaceholder.typicode.com/users'
     )
     if (!response.ok) {
       throw new Error('Unable to fetch users')
     }
     const data = await response.json()
     setUsers(data)
     setFilteredUsers(data)
     setLoading(false)
   } catch (err) {
     setError(err.message)
     setLoading(false)
   }
 }
 if (loading) {
   return <h1>Loading Users...</h1>
 }
 if (error) {
   return <h1>{error}</h1>
 }
 return (
<div className="container">
<h1>User Directory Dashboard</h1>
<input
       type="text"
       placeholder="Search User"
       value={search}
       onChange={(e) => setSearch(e.target.value)}
       className="search"
     />
<div className="card-container">
       {filteredUsers.map(user => (
<div key={user.id} className="card">
<h2>{user.name}</h2>
<p>
<strong>Email:</strong> {user.email}
</p>
<p>
<strong>Phone:</strong> {user.phone}
</p>
<p>
<strong>Website:</strong> {user.website}
</p>
<p>
<strong>Company:</strong> {user.company.name}
</p>
<p>
<strong>City:</strong> {user.address.city}
</p>
</div>
       ))}
</div>
</div>
 )
}
export default UserDashboard
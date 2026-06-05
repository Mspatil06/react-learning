function UserCard({ user }) {
 return (
<div className="card">
<h2>{user.name}</h2>
<p>
<strong>Username:</strong> {user.username}
</p>
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
     {user.id % 2 === 0 ? (
<p className="active">Premium User</p>
     ) : (
<p className="inactive">Regular User</p>
     )}
</div>
 )
}
export default UserCard
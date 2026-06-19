import { useState } from 'react'
function EmployeeManager() {
 const [employees, setEmployees] = useState([])
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   department: ''
 })
 const [editId, setEditId] = useState(null)
 const handleChange = e => {
   setFormData({
     ...formData,
     [e.target.name]: e.target.value
   })
 }
 const handleSubmit = e => {
   e.preventDefault()
   if (
     !formData.name ||
     !formData.email ||
     !formData.department
   ) {
     return
   }
   if (editId) {
     setEmployees(
       employees.map(emp =>
emp.id === editId
           ? { ...formData, id: editId }
           : emp
       )
     )
     setEditId(null)
   } else {
     const newEmployee = {
       id: Date.now(),
       ...formData
     }
     setEmployees([
       ...employees,
       newEmployee
     ])
   }
   setFormData({
     name: '',
     email: '',
     department: ''
   })
 }
 const handleEdit = employee => {
   setFormData({
     name: employee.name,
     email: employee.email,
     department: employee.department
   })
   setEditId(employee.id)
 }
 const handleDelete = id => {
   setEmployees(
     employees.filter(
       emp => emp.id !== id
     )
   )
 }
 return (
<div className="container">
<h1>Employee Management System</h1>
<form onSubmit={handleSubmit}>
<input
         type="text"
         name="name"
         placeholder="Employee Name"
         value={formData.name}
         onChange={handleChange}
       />
<input
         type="email"
         name="email"
         placeholder="Employee Email"
         value={formData.email}
         onChange={handleChange}
       />
<input
         type="text"
         name="department"
         placeholder="Department"
         value={formData.department}
         onChange={handleChange}
       />
<button type="submit">
         {editId
           ? 'Update Employee'
           : 'Add Employee'}
</button>
</form>
<table>
<thead>
<tr>
<th>Name</th>
<th>Email</th>
<th>Department</th>
<th>Actions</th>
</tr>
</thead>
<tbody>
         {employees.map(employee => (
<tr key={employee.id}>
<td>{employee.name}</td>
<td>{employee.email}</td>
<td>{employee.department}</td>
<td>
<button
                 onClick={() =>
                   handleEdit(employee)
                 }
>
                 Edit
</button>
<button
                 onClick={() =>
                   handleDelete(employee.id)
                 }
>
                 Delete
</button>
</td>
</tr>
         ))}
</tbody>
</table>
</div>
 )
}
export default EmployeeManager
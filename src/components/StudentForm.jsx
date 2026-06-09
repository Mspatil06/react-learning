import { useState } from 'react'
function StudentForm() {
 const [name, setName] = useState('')
 const [email, setEmail] = useState('')
 const [course, setCourse] = useState('')
 const [submitted, setSubmitted] = useState(false)
 const handleSubmit = (e) => {
   e.preventDefault()
   setSubmitted(true)
 }
 return (
<div className="container">
<h1>Student Registration Form</h1>
<form onSubmit={handleSubmit}>
<input
         type="text"
         placeholder="Enter Name"
         value={name}
         onChange={(e) => setName(e.target.value)}
       />
<input
         type="email"
         placeholder="Enter Email"
         value={email}
         onChange={(e) => setEmail(e.target.value)}
       />
<input
         type="text"
         placeholder="Enter Course"
         value={course}
         onChange={(e) => setCourse(e.target.value)}
       />
<button type="submit">
         Submit
</button>
</form>
     {submitted && (
<div className="result">
<h2>Student Details</h2>
<p>Name: {name}</p>
<p>Email: {email}</p>
<p>Course: {course}</p>
</div>
     )}
</div>
 )
}
export default StudentForm
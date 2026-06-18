import { useState } from 'react'
function EmployeeForm() {
 const [formData, setFormData] = useState({
   name: '',
   email: '',
   phone: '',
   gender: '',
   department: '',
   skills: []
 })
 const [errors, setErrors] = useState({})
 const [submitted, setSubmitted] = useState(false)
 const handleChange = e => {
   const { name, value } = e.target
   setFormData({
     ...formData,
     [name]: value
   })
 }
 const handleSkillChange = e => {
   const { value, checked } = e.target
   if (checked) {
     setFormData({
       ...formData,
       skills: [...formData.skills, value]
     })
   } else {
     setFormData({
       ...formData,
       skills: formData.skills.filter(
         skill => skill !== value
       )
     })
   }
 }
 const validateForm = () => {
   let newErrors = {}
   if (!formData.name) {
     newErrors.name = 'Name is required'
   }
   if (!formData.email) {
     newErrors.email = 'Email is required'
   }
   if (!formData.phone) {
     newErrors.phone = 'Phone number is required'
   }
   if (!formData.gender) {
     newErrors.gender = 'Select gender'
   }
   if (!formData.department) {
     newErrors.department = 'Select department'
   }
   setErrors(newErrors)
   return Object.keys(newErrors).length === 0
 }
 const handleSubmit = e => {
   e.preventDefault()
   if (validateForm()) {
     setSubmitted(true)
   }
 }
 const handleReset = () => {
   setFormData({
     name: '',
     email: '',
     phone: '',
     gender: '',
     department: '',
     skills: []
   })
   setErrors({})
   setSubmitted(false)
 }
 return (
<div className="container">
<h1>Employee Registration Form</h1>
<form onSubmit={handleSubmit}>
<input
         type="text"
         name="name"
         placeholder="Enter Name"
         value={formData.name}
         onChange={handleChange}
       />
<p>{errors.name}</p>
<input
         type="email"
         name="email"
         placeholder="Enter Email"
         value={formData.email}
         onChange={handleChange}
       />
<p>{errors.email}</p>
<input
         type="text"
         name="phone"
         placeholder="Enter Phone"
         value={formData.phone}
         onChange={handleChange}
       />
<p>{errors.phone}</p>
<h3>Gender</h3>
<label>
<input
           type="radio"
           name="gender"
           value="Male"
           onChange={handleChange}
         />
         Male
</label>
<label>
<input
           type="radio"
           name="gender"
           value="Female"
           onChange={handleChange}
         />
         Female
</label>
<p>{errors.gender}</p>
<h3>Skills</h3>
<label>
<input
           type="checkbox"
           value="React"
           onChange={handleSkillChange}
         />
         React
</label>
<label>
<input
           type="checkbox"
           value="JavaScript"
           onChange={handleSkillChange}
         />
         JavaScript
</label>
<label>
<input
           type="checkbox"
           value="Python"
           onChange={handleSkillChange}
         />
         Python
</label>
<h3>Department</h3>
<select
         name="department"
         value={formData.department}
         onChange={handleChange}
>
<option value="">
           Select Department
</option>
<option value="Development">
           Development
</option>
<option value="Testing">
           Testing
</option>
<option value="HR">
           HR
</option>
</select>
<p>{errors.department}</p>
<button type="submit">
         Submit
</button>
<button
         type="button"
         onClick={handleReset}
>
         Reset
</button>
</form>
     {submitted && (
<div className="result">
<h2>Employee Details</h2>
<p>Name: {formData.name}</p>
<p>Email: {formData.email}</p>
<p>Phone: {formData.phone}</p>
<p>Gender: {formData.gender}</p>
<p>
           Skills: {formData.skills.join(', ')}
</p>
<p>
           Department: {formData.department}
</p>
</div>
     )}
</div>
 )
}
export default EmployeeForm
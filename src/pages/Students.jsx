import { Link } from 'react-router-dom'
function Students() {
 const students = [
   {
     id: 1,
     name: 'Mallikarjun',
     course: 'React'
   },
   {
     id: 2,
     name: 'Rahul',
     course: 'Java'
   },
   {
     id: 3,
     name: 'Sneha',
     course: 'Python'
   }
 ]
 return (
<div className="container">
<h1>Students List</h1>
     {students.map(student => (
<div
         key={student.id}
         className="card"
>
<h3>{student.name}</h3>
<p>{student.course}</p>
<Link
           to={`/student/${student.id}`}
>
           View Details
</Link>
</div>
     ))}
</div>
 )
}
export default Students
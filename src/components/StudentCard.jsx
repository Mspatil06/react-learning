function StudentCard({ student, deleteStudent }) {
 return (
<div className="card">
<h3>{student.name}</h3>
<p>Course: {student.course}</p>
<button
       onClick={() => deleteStudent(student.id)}
>
       Delete
</button>
</div>
 )
}
export default StudentCardf  
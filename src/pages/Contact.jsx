function Students() {
 const students = [
   'Rahul',
   'Priya',
   'Amit',
   'Sneha',
   'Kiran'
 ]
 return (
<div className="page">
<h1>Students Page</h1>
     {students.map((student, index) => (
<p key={index}>{student}</p>
     ))}
</div>
 )
}
export default Students
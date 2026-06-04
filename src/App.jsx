import { useState } from 'react'

import './App.css'

import StudentCard from './components/StudentCard'

function App() {

  const [name, setName] = useState('')

  const [course, setCourse] = useState('')

  const [students, setStudents] = useState([])

  const addStudent = () => {

    if (!name || !course) {

      alert('Please fill all fields')

      return

    }

    const newStudent = {

      id: Date.now(),

      name,

      course

    }

    setStudents([...students, newStudent])

    setName('')

    setCourse('')

  }

  const deleteStudent = id => {

    const updatedStudents = students.filter(

      student => student.id !== id

    )

    setStudents(updatedStudents)

  }

  return (
<div className="container">
<h1>Student Management System</h1>
<div className="form">
<input

          type="text"

          placeholder="Enter Student Name"

          value={name}

          onChange={e => setName(e.target.value)}

        />
<input

          type="text"

          placeholder="Enter Course"

          value={course}

          onChange={e => setCourse(e.target.value)}

        />
<button onClick={addStudent}>

          Add Student
</button>
</div>
<div className="student-list">

        {students.length === 0 ? (
<h2>No Students Added</h2>

        ) : (

          students.map(student => (
<StudentCard

              key={student.id}

              student={student}

              deleteStudent={deleteStudent}

            />

          ))

        )}
</div>
</div>

  )

}

export default App

 
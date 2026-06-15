import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/taskSlice'
function TaskForm() {
 const [task, setTask] = useState('')
 const dispatch = useDispatch()
 const handleSubmit = e => {
   e.preventDefault()
   if (!task.trim()) return
   dispatch(addTask(task))
   setTask('')
 }
 return (
<form onSubmit={handleSubmit}>
<input
       type="text"
       placeholder="Enter Task"
       value={task}
       onChange={e => setTask(e.target.value)}
     />
<button type="submit">
       Add Task
</button>
</form>
 )
}
export default TaskForm
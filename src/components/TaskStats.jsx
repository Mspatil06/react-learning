import { useSelector } from 'react-redux'
function TaskStats() {
 const tasks = useSelector(
   state => state.tasks.taskList
 )
 const completed = tasks.filter(
   task => task.completed
 ).length
 return (
<div className="stats">
<h2>Total Tasks: {tasks.length}</h2>
<h2>
       Completed Tasks: {completed}
</h2>
</div>
 )
}
export default TaskStats
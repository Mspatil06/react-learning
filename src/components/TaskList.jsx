import { useSelector, useDispatch } from 'react-redux'
import {
 toggleTask,
 deleteTask
} from '../features/taskSlice'
function TaskList() {
 const tasks = useSelector(
   state => state.tasks.taskList
 )
 const dispatch = useDispatch()
 return (
<div>
     {tasks.map(task => (
<div
         key={task.id}
         className="task-card"
>
<h3>{task.title}</h3>
<p>
           Status:
           {task.completed
             ? ' Completed'
             : ' Pending'}
</p>
<button
           onClick={() =>
             dispatch(toggleTask(task.id))
           }
>
           Toggle
</button>
<button
           onClick={() =>
             dispatch(deleteTask(task.id))
           }
>
           Delete
</button>
</div>
     ))}
</div>
 )
}
export default TaskList
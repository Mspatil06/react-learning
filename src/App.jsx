import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import TaskStats from './components/TaskStats'
import './App.css'
function App() {
 return (
<div className="container">
<h1>Redux Task Manager</h1>
<TaskForm />
<TaskStats />
<TaskList />
</div>
 )
}
export default App
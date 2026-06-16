import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import Students from './pages/Students'
import StudentDetails from './pages/StudentDetails'
import NotFound from './pages/NotFound'
function App() {
 return (
<>
<nav className="navbar">
<Link to="/">Home</Link>
<Link to="/students">Students</Link>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route
         path="/students"
         element={<Students />}
       />
<Route
         path="/student/:id"
         element={<StudentDetails />}
       />
<Route
         path="*"
         element={<NotFound />}
       />
</Routes>
</>
 )
}
export default App
import { useParams, useNavigate } from 'react-router-dom'
function StudentDetails() {
 const { id } = useParams()
 const navigate = useNavigate()
 return ( 
<div className="container"> 
<h1>Student Details</h1>   
<h2>Student ID: {id}</h2> 
<button
       onClick={() =>   
         navigate('/students')
       }                        
> 
       Back 
</button>
</div>  
 )
}
export default StudentDetails        
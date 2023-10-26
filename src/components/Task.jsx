import './Task.css'
import { FaEllipsisH, FaArrowUp, FaTrash } from 'react-icons/fa'
import { useHistory } from "react-router-dom";


export const Task = ({task, handleTaskClick,handleTaskDelete}) => {

    const history = useHistory();

	const handleTaskDetailsClick = () => {
		history.push(`/${task.title}`);
	};
    
    return(

        <div  className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>

            
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                <FaArrowUp style={{position: "relative", left:"0", top:"3px", marginRight:"10px", cursor:"pointer", color:"chartreuse", opacity:"0.4"}}></FaArrowUp>
                {task.title}
            </div>


            

            <div className="btn-container">
            <FaEllipsisH onClick={handleTaskDetailsClick} style={{color:"chartreuse", cursor:"pointer"}}>

            </FaEllipsisH>
            <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}><FaTrash/>
            </button>
            </div>

        </div>
    )
}
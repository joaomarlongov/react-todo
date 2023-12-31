import './Task.css'
import { FaArrowUp, FaTrash } from 'react-icons/fa'
import { useHistory } from "react-router-dom";
import { FaCircleInfo } from "react-icons/fa6";


export const Task = ({task, handleTaskClick,handleTaskDelete}) => {

    const history = useHistory();

	const handleTaskDetailsClick = () => {
		history.push(`/${task.title}`);
	};
    
    return(

        <div  className='task-container' style={task.completed ? {borderLeft: '6px solid chartreuse'} : {}}>

            
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                
                {task.title}
            </div>


            

            <div className="btn-container">
            <FaCircleInfo onClick={handleTaskDetailsClick} style={{color:"chartreuse", cursor:"pointer"}}>

            </FaCircleInfo>
            <button className='remove-task-button' onClick={() => handleTaskDelete(task.id)}><FaTrash style={{marginTop:"4px"}}/>
            </button>
            </div>

        </div>
    )
}
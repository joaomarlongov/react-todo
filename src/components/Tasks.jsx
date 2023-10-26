import { Task } from "./Task"




export const Tasks = ({tasks, handleTaskClick,handleTaskDelete}) => {

    
    return (
        <>
            {tasks.map(task => 
                <Task task={task} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>
            )}
        </>
    )
}


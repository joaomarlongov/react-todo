import { Button } from "./Button"
import {useParams} from 'react-router-dom'

import './TaskDetails.css'

export const TaskDetails = () => {

    const params = useParams()

    return(
        <>
        <div className="back-button-container">
            <Button>Voltar</Button>
        </div>
        
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis eius ipsum nesciunt ipsam aspernatur labore.</p>
        </div>
        
        </>
    )
}
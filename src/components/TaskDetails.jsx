import { Button } from "./Button"
import {useHistory, useParams} from 'react-router-dom'

import './TaskDetails.css'

export const TaskDetails = () => {

    const params = useParams();
    const history = useHistory();


    const handleBackButtonClick = () => {
        history.goBack();
    }


    return(
        <>
        <div className="back-button-container">
            <Button onCLick={handleBackButtonClick}>Voltar</Button>
        </div>
        
        <div className="task-details-container">
            <h2>{params.taskTitle}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eveniet iusto laborum illo quod, magnam fuga delectus explicabo dolores quam cupiditate nemo dicta fugit cumque rerum consequatur maiores, libero harum.</p>
        </div>
        
        </>
    )
}
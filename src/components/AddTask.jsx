import { useState } from 'react'
import './AddTask.css'
import { Button } from './Button'



export const AddTask = ({handleTaskAdd}) => {

    const[inputData, setInputData] = useState('')
    const handleInputChange = (e) => {
        setInputData(e.target.value)
    }

    const handleTaskAddClick = () => {
        handleTaskAdd(inputData)
        setInputData('')
    }

    return(

        <div className="add-task-container">
            <input placeholder='Digite a sua tarefa' onChange={handleInputChange} value={inputData} className='add-task-input' type="text" />

            <div className="add-task-button-container">
            <Button onCLick={handleTaskAddClick}>Adicionar</Button>
            </div>
        </div>
    ) 
}
import { useEffect, useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import {BrowserRouter as Router,Route} from 'react-router-dom'
import axios from 'axios';
 
import { Tasks } from './components/Tasks';
import { AddTask } from './components/AddTask';
import { Header } from './components/Header';
import { TaskDetails } from './components/TaskDetails';


import './App.css'; 


function App() {

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async ()=>{
      const {data} = await axios.get('https://jsonplaceholder.cypress.io/todos?_limit=4')
      console.log(data)

      setTasks(data)
    }

    fetchTasks();
  },[])

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map(task => {
      if(task.id == taskId) return {... task, completed: !task.completed}

      return task
    })
    setTasks(newTasks)
  }

  const handleTaskAdd = (taskTitle) => {
    const newTasks = [... tasks, {
      title: taskTitle,
      id: uuidv4(),
      completed: false
    }]

    setTasks(newTasks)
  }

  const handleTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id != taskId)

    setTasks(newTasks)
  }
  

  return (
    <Router>
      <div className="container">
        <Route path="/" exact render={()=> (
          <>
            <Header>Minha Lista 😎</Header>
            <AddTask handleTaskAdd={handleTaskAdd}/>
            <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDelete={handleTaskDelete}/>         
          </>
        )}/>
        <Route path="/:taskTitle" exact component={TaskDetails} />
      </div>
    </Router>
  );
}

export default App;

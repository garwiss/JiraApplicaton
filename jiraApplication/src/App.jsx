import TaskCreate from './components/TaskCreate';
import TaskList from './components/TaskList';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';

import './App.css'


function App() {
  const [tasks, setTasks] = useState([])

  const createTask = (title, taskDesc) => {
    const createdTask = [
      ...tasks, {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc
        //?objelerde key ile value aynı ise tek şekilde kullanılabillir
      }
    ];
    // console.log(title,taskDesc);

    setTasks(createdTask);
  }

  const deleteTaskById = (id) => {
    //* console.log(id);
   const aferDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    })
    setTasks(aferDeletingTasks); // atama işlemi
  };

  return (
    <div className='App'>
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskById} />
    </div>
  )
}

export default App

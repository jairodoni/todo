import { Toaster } from 'react-hot-toast';

import { FormTask } from "./components/FormTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import { useTask } from './hooks/useTasks';

import styles from './styles/App.module.css'

export default function App() {
  const {
    tasks,
    newTask,
    setNewTask,
    handleCreateNewTask,
    handleToggleTaskCompletion,
    handleRemoveTask
  } = useTask()

  const numberConcluidedTasks = tasks.filter(task => task.isConclude === true).length

  return (

    <div className={styles.containerApp}>
      <Toaster position="top-center" reverseOrder={true} />
      <Header />
      <div className={styles.content}>
        <FormTask newTask={newTask} setNewTask={setNewTask} handleCreateNewTask={handleCreateNewTask} />
        <div className={styles.taskCounter}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{`${numberConcluidedTasks} de ${tasks.length}`}</span></p>
        </div>
        <div className={styles.taskList} >
          {tasks.map(task => (
            <Task
              key={task.id}
              task={task}
              handleToggleTaskCompletion={handleToggleTaskCompletion}
              handleRemoveTask={handleRemoveTask}
            />
          ))}
        </div>
      </div>
    </div>
  )
}


import { Toaster } from 'react-hot-toast';
import { LuClipboardList } from 'react-icons/lu'
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

  const numberConcluidedTasks = tasks.filter(task => task.isConclude === true).length;
  const textConcluidedTasks = tasks.length > 0 ? `${numberConcluidedTasks} de ${tasks.length}` : 0

  return (

    <div className={styles.containerApp}>
      <Toaster position="top-center" reverseOrder={true} />
      <Header />
      <div className={styles.content}>
        <FormTask newTask={newTask} setNewTask={setNewTask} handleCreateNewTask={handleCreateNewTask} />
        <div className={styles.taskCounter}>
          <p>Tarefas criadas <span>{tasks.length}</span></p>
          <p>Concluídas <span>{textConcluidedTasks}</span></p>
        </div>
        {tasks.length > 0 ? (
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
        ) : (
          <div className={styles.emptyTaskList}>
            <LuClipboardList size={80} />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <small>Crie tarefas e organize seus itens a fazer</small>
          </div>
        )}
      </div>
    </div>
  )
}


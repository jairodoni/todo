import { FormTask } from "./components/FormTask";
import { Header } from "./components/Header";
import { Task } from "./components/Task";

import styles from './styles/App.module.css'

export default function App() {
  return (
    <div className={styles.containerApp}>
      <Header />
      <div className={styles.content}>
        <FormTask />
        <div className={styles.taskCounter}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluídas <span>0 de 0</span></p>
        </div>
        <div className={styles.taskList} >
          <Task />
          <Task />
          <Task />
        </div>
      </div>
    </div>
  )
}


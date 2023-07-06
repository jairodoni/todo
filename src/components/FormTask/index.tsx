import { FormEvent } from 'react';
import { GoPlusCircle } from 'react-icons/go'
import styles from './styles.module.css';

interface FormTaskProps {
  newTask: string;
  setNewTask: (newTaks: string) => void;
  handleCreateNewTask: (event: FormEvent) => void;
}

export function FormTask({ newTask, setNewTask, handleCreateNewTask }: FormTaskProps) {
  return (
    <form onSubmit={handleCreateNewTask} className={styles.containerFormTask}>
      <input
        type="text"
        placeholder='Adicione uma nova tarefa'
        value={newTask}
        onChange={event => setNewTask(event.target.value)}
      />
      <button type="submit">
        Criar
        <GoPlusCircle size={19} />
      </button>
    </form>
  );
}
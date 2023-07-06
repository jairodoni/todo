import { GoPlusCircle } from 'react-icons/go'
import styles from './styles.module.css';

export function FormTask() {
  return (
    <div className={styles.containerFormTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        Criar
        <GoPlusCircle size={19} />
      </button>
    </div>
  );
}
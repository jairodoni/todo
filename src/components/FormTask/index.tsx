import styles from './styles.module.css';
import { HiOutlineTrash } from 'react-icons/hi'
import { GoPlusCircle } from 'react-icons/go'

export function FormTask() {
  return (
    <div className={styles.containerFormTask}>
      <input type="text" placeholder='Adicione uma nova tarefa' />
      <button type="submit">
        Criar
        <GoPlusCircle size={20} />
      </button>
    </div>
  );
}
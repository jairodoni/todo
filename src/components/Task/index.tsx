import { TaskType } from '../../types';
import { PiTrash } from 'react-icons/pi'
import { FiCheck } from 'react-icons/fi'

import styles from './styles.module.css';

interface TaskProps {
  task: TaskType;
  handleToggleTaskCompletion: (taskId: string) => void;
  handleRemoveTask: (taskId: string) => void;
}

export function Task({ task, handleToggleTaskCompletion, handleRemoveTask }: TaskProps) {
  return (
    <div className={styles.containerTask}>
      <div>
        <div>
          <label
            htmlFor={`statusTask-${task.id}`}
            className={!task.isConclude ? styles.taskBoxFalse : styles.taskBoxTrue}
          >
            <input
              type="checkbox"
              id={`statusTask-${task.id}`}
              className={styles.taskBox}
              checked={task.isConclude}
              onChange={() => handleToggleTaskCompletion(task.id)}
            />
            {task.isConclude && (
              <div>
                <FiCheck size={14} />
              </div>
            )}
          </label>
        </div>
        <p className={task.isConclude ? styles.textToTaskCompleted : undefined} >
          {' '}{task.title}
        </p>
      </div>
      <button
        className={styles.deleteTaskButton}
        onClick={() => handleRemoveTask(task.id)}
      >
        <PiTrash size={19} />
      </button>
    </div>
  );
}
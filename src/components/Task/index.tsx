import { PiTrash } from 'react-icons/pi'
import { FiCheck } from 'react-icons/fi'

import styles from './styles.module.css';
import { useEffect, useState } from 'react';

interface Task {
  id: string;
  task: string;
  status: 'true' | 'false'
}

export function Task() {
  const [status, setStatus] = useState(false)

  useEffect(() => {
    console.log(status)
  }, [status])


  return (
    <div className={styles.containerTask}>
      <div>
        <div>
          <label htmlFor="statusTask" className={!status ? styles.taskBoxFalse : styles.taskBoxTrue} onChange={() => setStatus(!status)}>
            <input
              type="checkbox"
              id='statusTask'
              className={styles.taskBox}
              checked={status}
            />
            {status && (
              <div>
                <FiCheck size={14} />
              </div>
            )}
          </label>
        </div>
        <p className={status && styles.textToTaskCompleted} >
          {' '}Lorem Ipsum is simply dummy text of the printing a4nd typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.lo
        </p>
      </div>
      <div>
        <PiTrash size={21} />
      </div>
    </div>
  );
}
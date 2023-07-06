import { useContext } from 'react';
import { TaskContext } from '../contexts/tasks';

export const useTask = () => {
  return useContext(TaskContext);
}
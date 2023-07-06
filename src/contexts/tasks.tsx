import { useState, createContext, FormEvent, ReactNode } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';
import { TaskType } from '../types';

interface TaskContextData {
  tasks: TaskType[];
  newTask: string;
  setNewTask: (newTaks: string) => void;
  handleCreateNewTask: (event: FormEvent) => void;
  handleToggleTaskCompletion: (taskId: string) => void;
  handleRemoveTask: (taskId: string) => void;
}

interface TaskProviderProps {
  children: ReactNode
}

export const TaskContext = createContext({} as TaskContextData)

export function TaskProvider({ children }: TaskProviderProps) {
  const [newTask, setNewTask] = useState<string>('')
  const [tasks, setTasks] = useState<TaskType[]>(() => {
    const storagedCart = localStorage.getItem('@ToDo:tasks')

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  })

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault()

    try {
      if (!newTask) {
        toast('A descrição da tarefa esta vazia', {
          icon: '❕',
          style: {
            borderRadius: '12px',
            background: '#262626',
            color: '#fff',
          },
        })
        return;
      }

      const data = {
        id: uuidv4(),
        title: newTask,
        isConclude: false
      }
      const newTaskList = [...tasks, data]
      setTasks(newTaskList)
      localStorage.setItem('@ToDo:tasks', JSON.stringify(newTaskList))

      setNewTask('')
      return toast.success('Tarefa adicionada', {
        style: {
          borderRadius: '12px',
          background: '#262626',
          color: '#fff',
        },
      });

    } catch {
      toast.error('Erro ao adicionar nova tarefa', {
        style: {
          borderRadius: '12px',
          background: '#262626',
          color: '#fff',
        },
      });
    }
  }

  function handleToggleTaskCompletion(taskId: string) {
    const taskChanged = tasks.map(task => task.id === taskId ? {
      ...task,
      isConclude: !task.isConclude,
    } : task)

    setTasks(taskChanged)
    localStorage.setItem('@ToDo:tasks', JSON.stringify(taskChanged))
  }

  function handleRemoveTask(taskId: string) {
    const filterTask = tasks.filter(task => task.id !== taskId)
    setTasks(filterTask)
    localStorage.setItem('@ToDo:tasks', JSON.stringify(filterTask))
  }

  return (
    <TaskContext.Provider value={{
      tasks,
      newTask,
      setNewTask,
      handleCreateNewTask,
      handleToggleTaskCompletion,
      handleRemoveTask
    }}>
      {children}
    </TaskContext.Provider>
  )
}
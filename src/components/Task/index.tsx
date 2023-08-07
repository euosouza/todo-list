import './task.scss';

import { useState } from 'react';
import { Trash } from '@phosphor-icons/react';

export interface TaskType {
  id: number;
  content: string;
  done: boolean;
}

export interface TaskProps {
  task: TaskType;
  onDeleteTask: (task: TaskType) => void;
  onUpdatedTask: (task: TaskType) => void;
}

export function Task({ task, onDeleteTask, onUpdatedTask }:TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(task)
  }

  const [isChecked, setIsChecked] = useState(task.done)

  const handleChecked = () => {
    setIsChecked(!isChecked);
    onUpdatedTask(task);
  }

  return(
    <div className="task">
        <input
          className='check-task'
          type="checkbox"
          name="task"
          id='task'
          checked={isChecked}
          onChange={handleChecked}
        />
        <p className='content-task'>{ task.content }</p>
        <button className='btn-delete' onClick={handleDeleteTask}>
          <Trash size={16} />
        </button>     
    </div>
  )
}
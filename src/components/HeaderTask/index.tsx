import './headerTask.scss';

import { TaskType } from '../Task';

interface HeaderTaskProps {
  tasks: TaskType[];
}

export function HeaderTask({ tasks }: HeaderTaskProps) {
  const tasksDone = tasks.filter(task => task.done);
  // const hasTasks = tasksDone.length > 1;
  return(
    <>
      <div className="header-task">
        <div className="wrapper-create-tasks">
          <span className='title-badge'>Tarefas criadas</span>
          <span className='badge'>{ tasks.length }</span>
        </div>
        <div className="wrapper-done-tasks">
          <span className='title-badge'>Concluídas</span>
            <span className='badge'>{ tasksDone.length } de { tasks.length }</span>  
        </div>
      </div>

      {/* TODO: Não tem tasks */}
    </>
  );
}
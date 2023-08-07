import '@assets/styles/app.scss';

import { useState, FormEvent, ChangeEvent } from 'react';

import { Header } from "@components/Header";
import { HeaderTask } from '@components/HeaderTask';
import { Task, TaskType } from "@components/Task";
import { PlusCircle } from '@phosphor-icons/react';

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    { id: 1, content: "Estudar Reactjs 🔥", done: true },
    { id: 2, content: "Estudar Angular 🤖", done: false },
    { id: 3, content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum atque nostrum laborum dolorum optio dolor voluptate dolore! Iure molestiae quaerat tempora natus labore incidunt, eveniet a distinctio harum aliquam earum!", done: false },
  ]);

  const [newTask, setNewTask] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const createNewTask = { id: tasks.length + 1, content: newTask, done: false };
    setTasks([...tasks, createNewTask])
    setNewTask("");
  }

  function handleCreateNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTask(event.target.value)
  }

  function deleteTask(taskPayload: TaskType) {
    const taskDeleted = tasks.filter(task => task.id !== taskPayload.id);
    setTasks([...taskDeleted])
  }

  function updatedTask(taskPayload: TaskType) {
    const taskUpdated = tasks.map(task => {
      if (task.id === taskPayload.id) {
        task.done = !task.done;
      }

      return task;
    });

    setTasks([...taskUpdated])
  }

  const isNewTaskEmpty = newTask.length === 0;

  return (
    <>
      <Header />
      <div className="container">
        <form className="form-create-task" onSubmit={handleCreateNewTask}>
          <input
            type="text"
            value={newTask}
            onChange={handleCreateNewTaskChange}
            placeholder='Adicione uma nova tarefa'
            required
          />
          <button type='submit' className='btn-create-taks' disabled={isNewTaskEmpty}>
            <span>Criar</span>
            <PlusCircle size={16} />
          </button>
        </form>
        <HeaderTask tasks={tasks}/>
        <div className="list-tasks">
          { tasks.map(task => {
            return(
              <Task
                key={task.id}
                task={ task }
                onDeleteTask={deleteTask}
                onUpdatedTask={updatedTask}
              />
            );
          })}        

        </div>
      </div>
    </>
  )
}

export default App

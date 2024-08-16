import React, { useState } from 'react';
import './TaskList.css';  

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [showCompleted, setShowCompleted] = useState(false);

  const addTask = () => {
    if (newTask.trim()) {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const toggleShowCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  const filteredTasks = showCompleted
    ? tasks.filter((task) => task.completed)
    : tasks;

  return (
    <div>
      <h1>Lista de Tarefas</h1>

      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Nova tarefa"
      />
      <button onClick={addTask}>Adicionar Tarefa</button>

      <ul>
        {filteredTasks.map((task, index) => (
          <li key={index}>
            <span className={task.completed ? 'completed' : ''}>
              {task.name}
            </span>
            <button onClick={() => toggleTaskCompletion(index)}>
              {task.completed ? 'Não Concluída' : 'Concluída'}
            </button>
          </li>
        ))}
      </ul>

      <button className="filter-btn" onClick={toggleShowCompleted}>
        {showCompleted ? 'Mostrar Todas' : 'Filtrar Concluídas'}
      </button>
    </div>
  );
}

export default TaskList;

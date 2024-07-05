import React, { useState, useEffect } from 'react';
import './Todo.css';
import Usidebar from './Usidebar';

const Todo = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : [];
  });
  const [task, setTask] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim()) {
      const newTask = { text: task, completed: false };
      setTasks([...tasks, newTask]);
      setTask('');
    }
  };

  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const handleToggleComplete = (index) => {
    const newTasks = tasks.map((task, i) => {
      if (i === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  };

  return (
    <>
      <div className="container-fluid row">
        <div className="col-md-3">
          <Usidebar />
        </div>
        <div className="col-md-9 mt-5">
          <div className="todo-container">
            <h1>To-Do List</h1>
            <input
              type="text"
              value={task}
              onChange={handleInputChange}
              placeholder="Add a new task"
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
              {tasks.map((task, index) => (
                <li key={index} className={task.completed ? 'completed' : ''} >
                  <span className="task-text">{task.text}</span>
                  <div>
                    <button onClick={() => handleToggleComplete(index)}>
                      {task.completed ? 'Undo' : 'Done'}
                    </button>
                    <button className="delete-button" onClick={() => handleDeleteTask(index)}>Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;

import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import Task from './task';

interface Task {
  id: number;
  task: string;
  priority: string;
  status: string;
}

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: 1, task: 'Go to gym', priority: 'High', status: 'To Do' },
    { id: 2, task: 'Read a book', priority: 'Low', status: 'Done' },
    { id: 3, task: 'Go to market', priority: 'Medium', status: 'In Progress' },
    // Add more tasks as needed
  ]);

  const addTask = () => {
    const newTask: Task = {
      id: tasks.length + 1,
      task: 'New Task',
      priority: 'Medium',
      status: 'To Do',
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const editTask = (id: number) => {
    const editedTask = prompt('Edit task');
    if (editedTask) {
      setTasks(
        tasks.map(task =>
          task.id === id ? { ...task, task: editedTask } : task
        )
      );
    }
  };

  const toggleStatus = (id: number) => {
    setTasks(
      tasks.map(task =>
        task.id === id
          ? { ...task, status: task.status === 'To Do' ? 'In Progress' : 'To Do' }
          : task
      )
    );
  };

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h3>Task List</h3>
        <Button variant="primary" onClick={addTask}>+ Add Task</Button>
      </div>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task.task}
          priority={task.priority}
          status={task.status}
          onDelete={() => deleteTask(task.id)}
          onEdit={() => editTask(task.id)}
          onToggleStatus={() => toggleStatus(task.id)}
        />
      ))}
    </div>
  );
};

export default TaskList;

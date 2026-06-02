import React, { useState, useEffect } from 'react';
import { taskService } from './services/taskService';
import TaskDashboard from './components/TaskDashboard';
import TaskForm from './components/TaskForm';
import TaskFilter from './components/TaskFilter';
import TaskItem from './components/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('All');
  const [serverError, setServerError] = useState('');

  const loadTasks = async () => {
    try {
      const data = await taskService.fetchTasks();
      setTasks(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAddTask = async (taskData) => {
    setServerError('');
    try {
      await taskService.createTask(taskData);
      loadTasks();
    } catch (err) {
      setServerError(err.message);
    }
  };

  const handleToggleTask = async (task) => {
    try {
      await taskService.updateTask(task.id, { completed: !task.completed });
      loadTasks();
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleDeleteTask = async (id) => {
    if (window.confirm('Are you sure you want to delete this task permanently?')) {
      try {
        await taskService.deleteTask(id);
        loadTasks();
      } catch (err) {
        console.error(err.message);
      }
    }
  };

  const total = tasks.length;
  const completed = tasks.filter((t) => t.completed).length;
  const active = total - completed;

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'Active') return !task.completed;
    if (filter === 'Completed') return task.completed;
    return true;
  });

  return (
    <div style={styles.appShell}>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.mainHeading}>Workspace Workspace</h1>
          <p style={styles.subHeading}>Manage personal assignments and deadlocks cleanly.</p>
        </header>

        <TaskDashboard total={total} active={active} completed={completed} />
        
        <TaskForm onAddTask={handleAddTask} serverError={serverError} />
        
        <div style={styles.listSection}>
          <div style={styles.listHeader}>
            <h3 style={styles.sectionTitle}>Your Tasks</h3>
            <TaskFilter currentFilter={filter} onFilterChange={setFilter} />
          </div>

          <div style={styles.listContainer}>
            {filteredTasks.length === 0 ? (
              <div style={styles.emptyCard}>
                <p style={styles.emptyText}>No tasks match this filter state.</p>
              </div> // Empty state layout match 
            ) : (
              filteredTasks.map((task) => (
                <TaskItem
                  key={task.id}
                  task={task}
                  onToggle={handleToggleTask}
                  onDelete={handleDeleteTask}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  appShell: { minHeight: '100vh', backgroundColor: '#f8f9fa', padding: '40px 0', boxSizing: 'border-box' },
  container: { maxWidth: '640px', margin: '0 auto', padding: '0 24px' },
  header: { textAlign: 'left', marginBottom: '32px' },
  mainHeading: { margin: '0 0 6px 0', fontSize: '28px', fontWeight: '700', color: '#121416', letterSpacing: '-0.5px' },
  subHeading: { margin: '0', fontSize: '14px', color: '#6c757d' },
  listSection: { background: '#ffffff', borderRadius: '16px', padding: '24px', boxShadow: '0 10px 30px rgba(0, 0, 0, 0.03)', border: '1px solid #f1f3f5' },
  listHeader: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #f1f3f5', paddingBottom: '12px', marginBottom: '16px' },
  sectionTitle: { margin: '0', fontSize: '16px', fontWeight: '600', color: '#212529' },
  listContainer: { display: 'flex', flexDirection: 'column', gap: '12px' },
  emptyCard: { padding: '40px 20px', textAlign: 'center', background: '#f8f9fa', borderRadius: '12px', border: '1px dashed #dee2e6' },
  emptyText: { margin: '0', fontSize: '14px', color: '#868e96', fontStyle: 'italic' }
};
import React from 'react';
import { Trash2, CheckCircle2, Circle, Calendar } from 'lucide-react';

export default function TaskItem({ task, onToggle, onDelete }) {
  const isOverdue = !task.completed && task.dueDate && new Date(task.dueDate) < new Date().setHours(0, 0, 0, 0);

  return (
    <div style={{
      ...styles.taskRow,
      backgroundColor: task.completed ? '#f8f9fa' : isOverdue ? '#fff5f5' : '#ffffff',
      borderLeft: isOverdue ? '5px solid #dc3545' : task.completed ? '5px solid #6c757d' : '5px solid #007bff',
      opacity: task.completed ? 0.75 : 1
    }}>
      <button onClick={() => onToggle(task)} style={styles.iconBtn}>
        {task.completed ? (
          <CheckCircle2 size={22} color="#28a745" style={{ fill: '#e8f5e9' }} />
        ) : (
          <Circle size={22} color={isOverdue ? '#dc3545' : '#ced4da'} />
        )}
      </button>

      <div style={styles.taskInfo}>
        <h4 style={{
          ...styles.taskTitle,
          color: task.completed ? '#6c757d' : '#212529',
          textDecoration: task.completed ? 'line-through' : 'none'
        }}>
          {task.title}
        </h4>
        
        {task.description && !task.completed && (
          <p style={styles.taskDesc}>{task.description}</p>
        )}
        
        {task.dueDate && (
          <div style={{
            ...styles.dateWrapper,
            color: isOverdue ? '#dc3545' : '#6c757d',
            backgroundColor: isOverdue ? '#ffe3e3' : '#f1f3f5'
          }}>
            <Calendar size={12} />
            <span>
              {task.completed ? `Completed` : isOverdue ? `Overdue: ${task.dueDate}` : `Due: ${task.dueDate}`}
            </span>
          </div>
        )}
      </div>

      <button onClick={() => onDelete(task.id)} style={styles.deleteBtn} title="Delete Task">
        <Trash2 size={16} />
      </button>
    </div>
  );
}

const styles = {
  taskRow: { 
    display: 'flex', 
    alignItems: 'center', 
    padding: '16px', 
    borderRadius: '12px', 
    boxShadow: '0 4px 12px rgba(0,0,0,0.02)', 
    border: '1px solid #efefef',
    gap: '14px',
    transition: 'all 0.2s ease'
  },
  iconBtn: { background: 'none', border: 'none', cursor: 'pointer', padding: '0', display: 'flex', alignItems: 'center' },
  taskInfo: { flex: 1, display: 'flex', flexDirection: 'column', gap: '4px' },
  taskTitle: { margin: '0', fontSize: '15px', fontWeight: '600', lineHeight: '1.4' },
  taskDesc: { margin: '2px 0 6px 0', fontSize: '13px', color: '#6c757d', lineHeight: '1.4' },
  dateWrapper: { 
    display: 'inline-flex', 
    alignItems: 'center', 
    gap: '6px', 
    fontSize: '11px', 
    fontWeight: '600', 
    padding: '4px 8px', 
    borderRadius: '6px',
    width: 'fit-content',
    marginTop: '4px'
  },
  deleteBtn: { 
    background: 'none', 
    border: 'none', 
    color: '#adb5bd', 
    cursor: 'pointer',
    padding: '8px',
    borderRadius: '6px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'color 0.2s, background-color 0.2s',
    ':hover': { color: '#dc3545', backgroundColor: '#fff5f5' } // Visual hint indicator
  }
};
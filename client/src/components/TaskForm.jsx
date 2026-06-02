import React, { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TaskForm({ onAddTask, serverError }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setValidationError('');

    if (!title.trim()) {
      setValidationError('Task title is required to proceed.');
      return;
    }

    onAddTask({ title, description, dueDate });
    setTitle('');
    setDescription('');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      <h3 style={styles.formHeading}>Create a New Assignment</h3>
      
      {(validationError || serverError) && (
        <div style={styles.errorAlert}>
          {validationError || serverError}
        </div>
      )}

      <div style={styles.inputGroup}>
        <label style={styles.label}>Task Title *</label>
        <input
          type="text"
          placeholder="What needs to be done?"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Description</label>
        <textarea
          placeholder="Add important details or notes..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ ...styles.input, height: '70px', resize: 'vertical' }}
        />
      </div>

      <div style={styles.inputGroup}>
        <label style={styles.label}>Due Date</label>
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          style={styles.input}
        />
      </div>

      <button type="submit" style={styles.button}>
        <Plus size={16} /> Add Task
      </button>
    </form>
  );
}

const styles = {
  form: { 
    background: '#ffffff', 
    padding: '24px', 
    borderRadius: '16px', 
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.04)', 
    marginBottom: '32px', 
    display: 'flex', 
    flexDirection: 'column', 
    gap: '16px',
    border: '1px solid #f1f3f5'
  },
  formHeading: { margin: '0 0 4px 0', fontSize: '18px', fontWeight: '600', color: '#212529' },
  inputGroup: { display: 'flex', flexDirection: 'column', gap: '6px' },
  label: { fontSize: '12px', fontWeight: '600', color: '#495057' },
  input: { 
    padding: '12px', 
    borderRadius: '8px', 
    border: '1px solid #dee2e6', 
    fontSize: '14px',
    color: '#212529',
    backgroundColor: '#f8f9fa',
    transition: 'border-color 0.2s, background-color 0.2s',
    outline: 'none'
  },
  button: { 
    padding: '12px', 
    background: '#007bff', 
    color: '#ffffff', 
    border: 'none', 
    borderRadius: '8px', 
    cursor: 'pointer', 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center', 
    gap: '8px', 
    fontWeight: '600',
    fontSize: '14px',
    boxShadow: '0 4px 12px rgba(0, 123, 255, 0.2)',
    transition: 'background-color 0.2s'
  },
  errorAlert: { 
    padding: '10px 14px', 
    background: '#fff5f5', 
    color: '#dc3545', 
    borderRadius: '8px', 
    fontSize: '13px', 
    fontWeight: '500',
    border: '1px solid #ffe3e3'
  }
};
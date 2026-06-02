const API_URL = 'http://localhost:5000/api/tasks';

export const taskService = {
  // GET all tasks
  async fetchTasks() {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error('Failed to fetch tasks');
    return await response.json();
  },

  // POST new task
  async createTask(taskData) {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(taskData),
    });
    if (!response.ok) {
      const errData = await response.json();
      throw new Error(errData.error || 'Failed to create task');
    }
    return await response.json();
  },

  // PUT update status/details
  async updateTask(id, updates) {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updates),
    });
    if (!response.ok) throw new Error('Failed to update task');
    return await response.json();
  },

  // DELETE a task
  async deleteTask(id) {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (!response.ok) throw new Error('Failed to delete task');
    return await response.json();
  }
};
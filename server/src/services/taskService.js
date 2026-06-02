import { taskRepository } from '../repositories/taskRepository.js';
import { Task } from '../models/taskModel.js';

export const taskService = {
    async getTasks() {
        const tasks = await taskRepository.getAll();
        // Requirement check: Sorted by creation date (newest first)
        return [...tasks].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    },

    async createTask(taskData) {
        if (!taskData.title || taskData.title.trim() === "") {
            throw new Error("Title is strictly required");
        }
        const tasks = await taskRepository.getAll();
        const newTask = new Task(taskData);
        tasks.push(newTask);
        await taskRepository.saveAll(tasks);
        return newTask;
    },

    async updateTask(id, updates) {
        const tasks = await taskRepository.getAll();
        const taskIndex = tasks.findIndex(t => t.id === id);
        
        if (taskIndex === -1) throw new Error("Task not found");

        // Merge updates
        tasks[taskIndex] = { ...tasks[taskIndex], ...updates };
        await taskRepository.saveAll(tasks);
        return tasks[taskIndex];
    },

    async deleteTask(id) {
        const tasks = await taskRepository.getAll();
        const filteredTasks = tasks.filter(t => t.id !== id);
        
        if (tasks.length === filteredTasks.length) throw new Error("Task not found");

        await taskRepository.saveAll(filteredTasks);
        return true;
    }
};
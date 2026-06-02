import { taskService } from '../services/taskService.js';

export const taskController = {
    async getAllTasks(req, res) {
        try {
            const tasks = await taskService.getTasks();
            res.json(tasks);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },

    async createTask(req, res) {
        try {
            const newTask = await taskService.createTask(req.body);
            res.status(201).json(newTask);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async updateTask(req, res) {
        try {
            const updatedTask = await taskService.updateTask(req.params.id, req.body);
            res.json(updatedTask);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },

    async deleteTask(req, res) {
        try {
            await taskService.deleteTask(req.params.id);
            res.json({ message: "Task successfully scrubbed from persistent storage" });
        } catch (error) {
            res.status(404).json({ error: error.message });
        }
    }
};
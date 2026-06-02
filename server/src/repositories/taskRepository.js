import fs from 'fs/promises';
import path from 'path';

const FILE_PATH = path.resolve('data/tasks.json');

export const taskRepository = {
    async getAll() {
        try {
            const data = await fs.readFile(FILE_PATH, 'utf-8');
            return JSON.parse(data || '[]');
        } catch (error) {
            // If file doesn't exist yet, return empty array
            return [];
        }
    },

    async saveAll(tasks) {
        await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), 'utf-8');
    }
};
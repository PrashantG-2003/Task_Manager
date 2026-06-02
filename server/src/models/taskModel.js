export class Task {
    constructor({ title, description = "", dueDate = null }) {
        this.id = Date.now().toString() + Math.random().toString(36).substr(2, 5);
        this.title = title.trim();
        this.description = description ? description.trim() : "";
        this.dueDate = dueDate || null;
        this.completed = false;
        this.createdAt = new Date();
    }
}
import express from 'express';
import cors from 'cors';
import taskRoutes from './src/routes/taskRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Security and standard parsers
app.use(cors());
app.use(express.json());

// Routes Mount mapping
app.use('/api/tasks', taskRoutes);

// Global Error Catchment routing
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Internal Server Architectural Error' });
});

app.listen(PORT, () => {
    console.log(`🚀 Production-ready Engine deployed at http://localhost:${PORT}`);
});
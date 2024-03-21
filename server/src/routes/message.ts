import express from 'express';

const app = express();
app.use(express.json()); 

// Define your routes here
app.post('/messages', async (req, res) => {
    // Will replace later when working back through frontend implementation
    res.status(200).json(req.body);
});

app.get('/messages', async (req, res) => {
    // Will replace later when working back through frontend implementation
    res.status(200).json([]);
});

export default app;

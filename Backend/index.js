

const express = require('express');
const cors = require('cors');
const userRoutes = require('./routes/userRoutes'); // We'll set this up if not already

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', userRoutes);

// Health check
app.get('/api/status', (req, res) => {
  res.json({ status: "ok" });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});

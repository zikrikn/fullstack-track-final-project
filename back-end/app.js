const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routers/route');

const app = express();
const PORT = 3000;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tokoplay";

// MongoDB Connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Middleware
app.use(bodyParser.json());

// API Routes
app.use('/api', routes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal server error' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
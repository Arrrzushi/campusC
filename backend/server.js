require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ Connected to MongoDB'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

// Routes
const authRoutes = require('./routes/auth');
app.use('/api/auth', authRoutes);

// Basic Route
app.get('/', (req, res) => {
  res.send('CampusC Backend Running');
});

// Fix: Ensure the correct port is used
const PORT = process.env.PORT || 10000; // Default to 10000 for Render compatibility

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

// MongoDB Events
mongoose.connection.on('connected', () => {
  console.log('📊 MongoDB connection active');
});

mongoose.connection.on('error', (err) => {
  console.error('🔥 MongoDB connection error:', err);
});

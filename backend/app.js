require('dotenv').config();

const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors');

// My routes
const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/user.routes');

// Middlewares
app.use(express.json({ extended: false }));
app.use(cookieParser());
app.use(cors());

// Routes
app.use('/auth', authRoutes);
app.use('/user', userRoutes);

// PORT
const port = process.env.PORT || 8000;

// Starting a server
app.listen(port, () => {
  console.log(`App is running at ${port}`);
});
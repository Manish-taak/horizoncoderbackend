const express = require('express');
const sequelize = require('./db');
const userController = require('./controllers/userController');

const app = express();
app.use(express.json());

// Routes
app.post('/users', userController.createUser);
app.get('/users', userController.getUsers);

// Test the DB connection and sync models
sequelize.sync({ force: true }).then(() => {
  console.log('Database & tables created!');
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

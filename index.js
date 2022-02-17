require('dotenv').config();
const express = require ('express');
const cors = require("cors");
// Database
const { dbConnection } = require ('./database/config');

// Create server
const app = express();

// Settings
app.use(cors());
app.use(express.json());
app.set('PORT',process.env.PORT);

// Routes
app.use('/api/tasks',require('./routes/task.routes'));
app.use('/api/folders',require('./routes/folder.routes'));
app.use('/api/auth',require('./routes/auth.routes'));

// Start server
app.listen(app.get('PORT'),()=>{
    console.log(`Server on port: ${app.get('PORT') || 5000}`)
});
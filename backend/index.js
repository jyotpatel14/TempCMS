// Load ENV variables
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
// Import dependences
const express = require('express');
const cors = require('cors');
const connectToDb = require('./config/connectToDb');


// Create an express app
const app = express();

// Configure Express app
app.use(express.json());
app.use(cors());

//connect to db
connectToDb();

//import routing dependencies
const userRoutes = require('./routes/userRoutes');
//import route modules
app.use('/api/users',userRoutes);

//routing
// app.post("/",)


// Start server
app.listen(process.env.PORT);
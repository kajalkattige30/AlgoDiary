import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'; 
//importing routes
import postRoutes from './routes/posts.js';

// Initialize app
const app = express();
dotenv.config();

// using different methods on the app instance
// Setting up bodyParser so that it can properly send requests.
app.use(bodyParser.json({ limit: "200mb", extended : true })); // to send files which can be large in size
app.use(bodyParser.urlencoded({ limit : "200mb", extended : true}));
app.use(cors());


// using express middleware to connect to our application
app.use('/posts', postRoutes);

// Server connection with mongodb
const PORT = process.env.PORT || 5000;
mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser : true, useFindAndModify : false, useUnifiedTopology : true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port : ${PORT}`))) // If our connection is successful, then call app and listen
    .catch((error) => console.log(error.message)); // If connection to the database is not successful

// mongoose.set('UseFindAndModify', false); //To avoid warnings in the console

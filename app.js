const express = require("express");
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = 3000;
//importacion de routes
const taskRouter = require('./Routes/taskRouter')
const usersRouter = require('./Routes/usersRouter')
const loginRouter = require('./Routes/loginRouter')

app.use(express.json());
app.use(morgan('dev')); 
app.use(cors({ origin: 'http://localhost:5173' }))

//routes

app.use('/tasks', taskRouter);
app.use('/user', usersRouter);
app.use('/', loginRouter);

const server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

module.exports = { app, server } 

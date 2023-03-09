const express = require('express');
const cors = require('cors');
const db = require("./utils/database");
const Todo = require("./models/todos.model");
const todoRoutes = require("./routes/todos.routes");

Todo;

const PORT = 8000;

db.authenticate()
    .then(() => {
        console.log('Connections established of server')
    })
    .catch((error) => {
        console.log(error)
    });
    
db.sync()
.then(() => {
    console.log('Synchronized database')
})
.catch((error) => {
    console.log(error);
});

const app = express();

app.use(cors());

app.use(express.json());

app.use(todoRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to server');
});

app.listen(PORT, (req, res) => {
    console.log(`Server listening on port: ${PORT}`);
});
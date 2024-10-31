require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userControllers');
const rolController = require('./controllers/rolControllers');

const app = express();
app.use(express.json());
app.use('/api/users', userController);
app.use('/api/rols', rolController);

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('¡Hola mundo!');
})

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
})
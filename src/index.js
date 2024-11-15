require('dotenv').config();
const express = require('express');
const userController = require('./controllers/userControllers');
const rolController = require('./controllers/rolControllers');
const helmet  = require('helmet');

const app = express();
app.use(express.json());
app.use(helmet());

app.use(helmet.referrerPolicy({
    policy: 'strict-origin-when-cross-origin'
}));

  // Configurar CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200'); // Ajusta esto a la URL de tu frontend
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

app.use('/api/users', userController);
app.use('/api/rols', rolController);

const port = process.env.PORT || 3000;

app.get('/',(req,res)=>{
    res.send('¡Hola mundo!');
})

app.listen(port, ()=>{
    console.log(`servidor corriendo en http://localhost:${port}`);
})
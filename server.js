const express = require('express');
const mysql = require('mysql');
const myconn = require('express-myconnection');

const routes = require('./routes');

const app = express();
app.set('port', process.env.PORT || 4000);
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'vansOFFthewall123',
    database: 'library'
}

// Midlewares
app.use(myconn(mysql, dbOptions, 'single'))
app.use(express.json());

// Routes
app.get('/', (req, res)=>{
    res.send('Welcome to my API')
})
app.use('/api', routes)

// Running Server
app.listen(app.get('port'), () => {
    console.log('Server corriendo en puerto', app.get('port'));
});
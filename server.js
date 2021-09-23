const express = require('express');

const app = express();
app.set('port', process.env.PORT || 4000);

app.get('/', (req, res) => {
    res.send('Bienvenido a esta API');
})

app.listen(app.get('port'), () => {
    console.log('Server corriendo en puerto', app.get('port'));
});
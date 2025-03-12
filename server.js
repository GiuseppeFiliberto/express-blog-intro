const express = require('express');
const app = express();
const port = 3000;

//middlewere for static files
app.use(express.static('Public'));

//this turns on the server and starts to listen
app.listen(port, () =>{
    console.log(`Server is running on port http://localhost:${port}`);
})


app.get('/', (req, res) => {

    res.send('<h1> Server del mio Blog</h1>');

})
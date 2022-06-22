
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;

//Include these two lines or express will screw you
app.use(cors());
app.use(express.json());

//Importing GoogleCSE module
app.use(require('./GoogleCSE'));

app.get('/', (req, res) => {
  res.send('Hello Transposers')
})

app.post('/sendsongname',function(req,res){
    console.log(req.body.songname)
    
    res.end("yes");
    });

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});



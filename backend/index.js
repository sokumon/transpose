<<<<<<< HEAD
require('dotenv').config()
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5001;

//Include these two lines or express will screw you
app.use(cors());
app.use(express.json());

//Importing GoogleCSE module
app.use(require('./GoogleCSE'));

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
=======
const express = require('express')
const app = express()

const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Transposers')
})
app.use(express.json());
app.post('/sendsongname',function(req,res){
    console.log(req.body.songname)
    
    res.end("yes");
    });
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
>>>>>>> origin/main

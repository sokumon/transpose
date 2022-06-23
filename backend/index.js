
require('dotenv').config()
const express = require('express');
const axios= require('axios').default
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

app.post('/sendsongname',function(req,response){
    var song_links=[]
    console.log(req.body.songname)
    console.log(req.body.platforms)
    chossen_platforms=req.body.platforms
    chossen_platforms.forEach(async element => {
      const test =await sendRequest(element,req.body.songname,song_links)
      console.log(test)
    });
    
  });


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
function sendRequest(platform,songname,ar) {
    return axios.get(`http://localhost:3000/search?q=${platform} ${songname}`).then(json => {
        return json.data.items[0].link
    });
}
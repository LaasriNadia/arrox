const express =  require('express');
const app = express();
const request =  require('request');
const cheerio = require('cheerio');
//Body Parser Middlware
app.use(express.json())
const port = process.env.PORT || 3000;
// const lyrics = require('./Lyrics');
let Lyrics = {
    value:null
};
//Fetch lyrics
app.get('/lyrics' , (req ,res) =>{
    res.json(Lyrics)
})
app.post('/lyrics' , (req,res)=>{
    const url = req.body.data.url;
    if(url){
        request(url , (response , err , html) =>{
            const $ = cheerio.load(html);
            const lyrics = $('.lyrics').text()
            Lyrics.value = lyrics;
            res.json(lyrics)
        })
    }
    else{
        res.send('There is no parameters')
        // res.status(400)
    }
})

app.listen(port , ()=>{
    console.log(`listening to port ${port}`)
})
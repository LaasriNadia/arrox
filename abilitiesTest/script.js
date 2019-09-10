//hna ka nfetchiw song mn api dyal genius ima b id wla b query
const API = "https://api.genius.com/songs/";
const accessToken= "?access_token=ifVJ2NTFj1Zd3QDBhEcXccdzBIi-PMK0-trbe_18bMuh-pfme2CFI0X1WmdX_rWs";
const id = 4651661;
const url = `${API + id + accessToken}`;
let song = null;//hna kandiru url li kayjina mn genius api
fetch(url)
.then(res=>res.json())
.then(data=>{
    song = data.response.song.url;
}).then(function(){
    axios.defaults.baseURL = 'http://localhost:3000';
    axios.post('/lyrics',
    {
        data:{
            url:song //kandiru lih song url as argument
        },
    }
    
    )
    .then(function (response) {
        // handle success
        console.log(response.data); //uhna ka dji output
    })
    .catch(function (error) {
        // handle error
        console.log(error.message);
    })
})



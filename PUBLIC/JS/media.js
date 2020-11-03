//newsContent(apiUrl); - apiUrl = Url'en til apiet
//Fetcher fra vores api og sørger for at vi får det tilbage i json og sender dataen videre

//sortingMedia(data); - data = Dataen fra apiet
//looper igennem dataen fra apiet som vi får fra newsContent og deler det ud, derfra sender vi det videre


//creatingMedia(title, file, ref); - title = Er der bare | file = fil lokation | ref = youtube video id
//Kigger om det er et billede eller en video vi har fået fra apiet, og sender link til lokationen videre

//insertVideo(link); - link = youtube linket
//Skaber en iframe og sætter src til linket vi får fra creatingMedia og appender det til vores DOM


const API = 'https://api.mediehuset.net'
const ENDPOINT_NEWS = '/infoboard/news';
const ENDPOINT_MEDIA = '/infobard/media';

let getData = newsContent('https://api.mediehuset.net/infoboard/media');

function newsContent(apiUrl) {
    fetch(apiUrl)
    .then((res) => {  return res.json();  })
    .then((data) => {  sortingMedia(data.result); })
}


function sortingMedia (data) {
    for (let media of data) {
        let title = media.title;
        let file = media.file;
        let ref = media.reference;
        creatingMedia(title, file, ref)
    }
}


//Ting vi skal gøre
//Autoplay og mute, Karussel for Media tingetang, Køre nyt iteration efter videon er færdig 
function creatingMedia(title, file, ref) {
    if (ref){
        insertVideos("https://www.youtube.com/embed/" + ref);
    } else if(file) {
        console.log("IM A TOTALLY TRUE IMAGE");
    } else {
        console.log("Someone decided not to give a path at ALL!");
    }
}

function insertVideos (link) {
    let iframe = document.createElement('iframe');
    iframe.setAttribute('src', link);
    document.getElementById('wrapper').appendChild(iframe);
}
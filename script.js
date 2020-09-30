imageContainer11=document.getElementById("image-container11");
imageContainer21=document.getElementById("image-container21");
imageContainer31=document.getElementById("image-container31");
imageContainer12=document.getElementById("image-container21");
imageContainer22=document.getElementById("image-container22");
imageContainer32=document.getElementById("image-container23");
imageContainer13=document.getElementById("image-container31");
imageContainer23=document.getElementById("image-container32");
imageContainer33=document.getElementById("image-container33");
loader=document.getElementById("loader");
let total=0;
var i=0;
let totalImages=0;
let imagesLoaded=0;
let ready=false;
let photosArray=[];
count=30;
apiKey="sxu0jAITp0Mc0FzugB1xqtYcjvWha4VdQ-tgTDeB3Uo";
url=`https://api.unsplash.com/photos/random?client_id=${apiKey}&count=${count}`;

function imageLoad(){
    imagesLoaded++;
    total++;
    console.log("number of images imagesLoaded",total)
    console.log("image loaded",imagesLoaded);
    if(imagesLoaded===totalImages){
        ready=true;
        loader.hidden=true;
        console.log("ready=",ready);
    }
}
function displayPhotos(photos){
    imagesLoaded=0;
    
    console.log(photos);
    totalImages=photos.length;
    console.log("total images=",totalImages);
    console.log("number of images imagesLoaded",total)
    photos.forEach((photo)=>{
        //Creating the anchor tag element
        const item = document.createElement('a');
        item.setAttribute('href',photo.links.html);
        item.setAttribute('target', '_blank');
        // Creating the image tag element
        const img=document.createElement('img');
        img.setAttribute('src', photo.urls.regular);
        img.setAttribute('alt', photo.alt_description);
        img.setAttribute('title', photo.alt_description);
        img.addEventListener('load',imageLoad);
        item.appendChild(img);
        mod=i%9;
        switch(mod){
            case 0:imageContainer11.appendChild(item);
            i++;
                break;
            case 1:imageContainer21.appendChild(item);
            i++;
                break;
            case 2:imageContainer31.appendChild(item);
            i++;
                break;
            case 3:imageContainer12.appendChild(item);
            i++;
                break; 
            case 4:imageContainer22.appendChild(item);
            i++;
                break; 
            case 5:imageContainer32.appendChild(item);
            i++;
                break;
            case 6:imageContainer13.appendChild(item);
            i++;
                break; 
            case 7:imageContainer23.appendChild(item);
            i++;
                break; 
            case 8:imageContainer33.appendChild(item);
            i++;
                break;  
            default:
                imageContainer22.appendChild(item);
                i++;
        }
    });
}
function getPhotos(){
    fetch(url).then(res => res.json())
    .then(
        photosArray => displayPhotos(photosArray))
}

window.addEventListener('scroll',()=>{
    if(window.innerHeight+window.scrollY>=document.body.offsetHeight-1000 && ready){
        ready=false;
        getPhotos();
    }
});

getPhotos();
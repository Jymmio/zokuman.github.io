var move = 0;

var image = document.getElementById('image-container');
var container = document.querySelector(".container");
container.innerHTML += "<video loop muted playsinline id=\"video-container\"><source type=\"video/mp4\" src=\"https://www.lesbonsartisans.fr/wp-content/uploads/2018/11/7740955-hd-2.mp4\"></video>"
var video = document.getElementById('video-container');
video.style.width = "100vw";
video.style.height = "100%";
video.style.blur = "1.5px";
container.innerHTML = "";
container.appendChild(image);

videoDuration = 9000;
imageDuration = 9000;

function toggleVideoAndImage() {
    if (move % 2 === 0) {
        // Afficher la vidéo
        if(container.contains(image)){
        	container.removeChild(image);
        }
        else{console.log("nope !!");}
        container.appendChild(video);
        video.play().then(() => {
            setTimeout(function() {
                container.removeChild(video);
                video.pause();
                video.currentTime = 0;
            }, videoDuration);
        }).catch(error => {
            console.error('Erreur de lecture de la vidéo:', error);
        });
    } else {
        // Afficher l'image
        container.appendChild(image);
        setTimeout(function() {
            container.removeChild(image);
        }, imageDuration);
    }
    move++;
}

// Appeler la fonction toutes les secondes (1000 millisecondes)
var intervalId = setInterval(toggleVideoAndImage, videoDuration);

// Arrêter la boucle après un certain nombre de répétitions (facultatif)
var numberOfRepetitions = 999; // par exemple, 5 répétitions
setTimeout(function() {
    clearInterval(intervalId);
}, (videoDuration + imageDuration) * numberOfRepetitions);


var boutonAppeler1 = document.getElementById("phone-number-2");
var boutonAppeler2 = document.getElementById("phone-number");
var phone = '0641415598';

boutonAppeler1.addEventListener('click', function(){
	window.open('tel:' + phone);
});
boutonAppeler2.addEventListener('click', function(){
	window.open('tel:' + phone);
});
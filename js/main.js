var music = new Audio("media/music.mp3");
//var song = 1;
function toggleMusic() {
    console.log("music toggled");
    return music.paused ? music.play() : music.pause();
};
/*music.addEventListener('ended', function () {
    music.src = "media/music" + song++ + ".mp3";
    music.pause();
    music.load();
    music.play();
});*/
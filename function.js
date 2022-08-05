var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let ctr;
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0'
  });
  ctr = document.getElementById("player");
  updateSurah();
}

let icon = document.querySelector(".youtube-icon");

let isPlaying = false;

function playToggle() {
    if (!isPlaying) {
        player.playVideo();
        player.seekTo(player.getDuration());
        icon.src = "https://icons.veryicon.com/png/o/object/material-design-icons-1/pause-38.png";
        isPlaying = true;
    }
    else {
        player.pauseVideo();
        icon.src = "https://www.pngall.com/wp-content/uploads/9/White-Play-Silhoutte-PNG1.png";
        isPlaying = false;
    }
}

function updateSurah() {
    ctr.src = `https://www.youtube.com/embed/fgq7kMgnAG0?autoplay=0&loop=0&enablejsapi=1&widgetid=1`;
}

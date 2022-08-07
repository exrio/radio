let selectedRadioStation = localStorage.getItem("selectedRadioStation") || "fgq7kMgnAG0";

let radioStationButtons = document.querySelectorAll(".radio-station-button");

var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let ctr;
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: '0',
    width: '0',
    playerVars: {
        autoplay: 1,
        loop: 0
    },
    events: {
        'onReady': onPlayerReady
    }
  });
  ctr = document.getElementById("player");
  changeRadioStation(selectedRadioStation);
}

let icon = document.querySelector(".youtube-icon");

let isPlaying = false;

function onPlayerReady(event) {
    player.playVideo();
}

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

function changeRadioStation(value) {
    selectedRadioStation = value;
    localStorage.setItem("selectedRadioStation", selectedRadioStation);
    findSelectedButton();
    ctr.src = `https://www.youtube.com/embed/${selectedRadioStation}?autoplay=0&loop=0&enablejsapi=1&widgetid=1`;
}

function findSelectedButton() {
    for (let index = 0; index < radioStationButtons.length; index++) {
        if (radioStationButtons[index].value == selectedRadioStation) {
            radioStationButtons[index].classList.add("selected-button")
        }
        else radioStationButtons[index].classList.remove("selected-button");
    }
}

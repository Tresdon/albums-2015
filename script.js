var list = document.getElementsByTagName('audio');
function play(idString){
	//pause all other audio
	for(var i = 0; i < list.length; i++){
		list[i].pause();
	}
	var audio = document.getElementById(idString);
	if(!audio.paused){ //if audio is playing
		audio.pause();
	}
	else{
		audio.load();
		audio.play();
	}
}

//checks if a song is playing and sets "playing" to that song and returns true
// or returns false meaning that no song is playing.
function checkPlaying()
{
	for(var i = 0; i < list.length; i++){
		if(!list[i].paused){ //this element is playing
			document.getElementById("playing").innerHTML = "♫: " + list[i].getAttribute("title");
			setTimeout(checkPlaying,500);
			return;
		}
	}
	setTimeout(checkPlaying,500);
	document.getElementById("playing").innerHTML = "";
	return;
}
checkPlaying();

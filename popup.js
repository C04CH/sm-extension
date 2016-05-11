document.addEventListener('DOMContentLoaded', function() {
   class PlayableSource {
       constructor(id, label, source){
           this.id = id;
           this.label = label;
           this.source = source;
       }
    }

	class PlayableSourceList {
		constructor(title, list){
			this.title = title
			this.list = list
		}
	}
// ----------------------------------------------------------------
    var sources = new Array();
    sources.push(new PlayableSource("fox", "Fox intro", "fox.mp3"));
	sources.push(new PlayableSource("got", "GoT", "got.mp3"));
	sources.push(new PlayableSource("takeonme", "Take on me", "takeonme.mp3"));
	sources.push(new PlayableSource("titanic", "Titanic theme", "titanic.mp3"));
	sources.push(new PlayableSource("starwars", "Star Wars intro", "starwars.mp3"));
	sources.push(new PlayableSource("soundofsilence", "Sound of Slience", "soundofsilence.mp3"));
	sources.push(new PlayableSource("rocky", "Rocky theme", "rocky.mp3"));
	sources.push(new PlayableSource("dancingqueen", "Dancing queen", "dancingqueen.mp3"));

	var sourcesList = new Array();
	sourcesList.push(new PlayableSourceList("ShittyFlute", sources));
// ----------------------------------------------------------------
    sources = new Array();
    sources.push(new PlayableSource("benderparque", "Parque tematico", "benderparque.mp3"));
	sources.push(new PlayableSource("benderrana", "La ranita croaba", "benderrana.mp3"));
	sources.push(new PlayableSource("neutral", "Neutral response", "neutral.mp3"));

	sourcesList.push(new PlayableSourceList("Futurama", sources));
// ----------------------------------------------------------------
    sources = new Array();
    sources.push(new PlayableSource("dvno", "Darth Vader", "dvno.mp3"));
	sources.push(new PlayableSource("scno", "Steve Carell", "scno.mp3"));

	sourcesList.push(new PlayableSourceList("No", sources));
// ----------------------------------------------------------------
    var sources = new Array();
	sources.push(new PlayableSource("frodo", "Gandalf", "frodo.mp3"));
	sources.push(new PlayableSource("r2d2screa,", "R2D2 Scream", "r2d2scream.mp3"));

	sourcesList.push(new PlayableSourceList("Otros", sources));
// ----------------------------------------------------------------

    var main = document.getElementById("main");
	var headline = '<h4 class="title">[%TITLE%]</h4>';
	var container = '<div id="[%ID%]" class="container"></div>';

    var playerTpl = '<div class="playable"><span class="label">[%LABEL%]:</span> <audio id="[%ID%]" src="sources/audio/[%SOURCE%]" type="audio/mp3" controls></audio></div>';

    for (var c = 0; sourcesList.length > c; c++){
		var tempHeadline = headline;
		tempHeadline = tempHeadline.replace(/\[%TITLE%\]/gim, sourcesList[c].title);
		main.innerHTML = main.innerHTML + tempHeadline;

		var tempContainer = container;
		tempContainer = tempContainer.replace(/\[%ID%\]/gim, sourcesList[c].title + "Container");
		main.innerHTML = main.innerHTML + tempContainer;

		for (var d = 0; sourcesList[c].list.length > d; d++){
	        var tempTpl = playerTpl;
	        tempTpl = tempTpl.replace(/\[%ID%\]/gim, sourcesList[c].list[d].id);
	        tempTpl = tempTpl.replace(/\[%LABEL%\]/gim, sourcesList[c].list[d].label);
	        tempTpl = tempTpl.replace(/\[%SOURCE%\]/gim, sourcesList[c].list[d].source);
			var tempContainerDiv = document.getElementById(sourcesList[c].title + "Container");
	        tempContainerDiv.innerHTML = tempContainerDiv.innerHTML + tempTpl;
		}

		main.innerHTML = main.innerHTML + "<hr>";
    }
});

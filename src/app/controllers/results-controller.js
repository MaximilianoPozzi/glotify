export function resultsController(ApiService, $location){
	

	ApiService.	queryArtist(localStorage.getItem("glotifyArtistName")).then(function(artists){
		this.artists=artists;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	function goTo(url){
		$location.path(url);
	}

    function choseAnArtist(chosenId){
    	localStorage.setItem("glotifyArtistId", chosenId);
    }

	this.goTo = goTo;
	this.choseAnArtist=choseAnArtist;
};
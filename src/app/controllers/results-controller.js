export function resultsController(ApiService, $location){
	

	ApiService.	queryArtist(localStorage.getItem("artistName")).then(function(artists){
		this.artists=artists;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	function goTo(url){
		$location.path(url);
	}

    function choseAnArtist(chosenId){
    	localStorage.setItem("artistId", chosenId);
    }

	this.goTo = goTo;
	this.choseAnArtist=choseAnArtist;
};
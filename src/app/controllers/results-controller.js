export function resultsController(ApiService, $location, $routeParams){

	ApiService.	queryArtist($routeParams.artistName).then(function(artists){
		this.artists=artists;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	function goTo(url){
		$location.path(url);
	}

	this.goTo = goTo;
};
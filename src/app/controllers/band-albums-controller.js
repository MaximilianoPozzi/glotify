export function bandAlbumsController(ApiService, $location, $routeParams){

	function goTo(url){
		$location.path(url);
	}

	ApiService.queryArtistAlbums($routeParams.artistId).then(function(albums){
		this.albums = albums;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	this.goTo = goTo;
};
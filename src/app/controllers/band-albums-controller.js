export function bandAlbumsController(ApiService, $location){
	function choseAnAlbum(chosenAlbumId){
		localStorage.setItem("glotifyAlbumId", chosenAlbumId);
	}

	function goTo(url){
		$location.path(url);
	}

	ApiService.queryArtistAlbums(localStorage.getItem("glotifyArtistId")).then(function(albums){
		this.albums = albums;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	this.choseAnAlbum = choseAnAlbum;
	this.goTo = goTo;
};
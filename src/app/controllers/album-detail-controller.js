export function albumDetailController(ApiService, $location){
	
    function goTo(url){
    	$location.path(url);
    }

	ApiService.getAlbumInfo(localStorage.getItem("albumId")).then(function(album){
		this.image=album.images[0].url;
		this.tracks=album.tracks.items;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	this.goTo=goTo;
};
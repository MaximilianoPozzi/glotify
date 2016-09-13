export function AlbumDetailController(ApiService, $location, $routeParams, LocalStorageService){
	
    function goTo(url){
    	$location.path(url);
    }

    function setFavorite(track){
    	if (!LocalStorageService.getItem("glotifyFavoriteSongs")) {
    		LocalStorageService.setItem("glotifyFavoriteSongs", JSON.stringify([track.id]));
    	} else {
    		let favorites = JSON.parse(LocalStorageService.getItem("glotifyFavoriteSongs"));
    		let trackAlreadyIncluded=false;
    		for (let i=0;i<favorites.length;i++){
    			if (track.id==favorites[i]){
    				trackAlreadyIncluded = true;
    				break;
    			}
    		}
    		if (!trackAlreadyIncluded){
  				favorites.push(track.id);
    			LocalStorageService.setItem("glotifyFavoriteSongs", JSON.stringify(favorites));
    		}
    	}
    }

	ApiService.getAlbumInfo($routeParams.albumId).then(function(album){
		this.image=album.images[0].url;
		this.tracks=album.tracks.items;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	this.goTo=goTo;
	this.setFavorite=setFavorite;
};
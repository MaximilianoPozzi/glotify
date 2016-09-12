export function albumDetailController(ApiService, $location, $routeParams){
	
    function goTo(url){
    	$location.path(url);
    }

    function setFavorite(track){
    	if (!localStorage.getItem("glotifyFavoriteSongs")) {
    		localStorage.setItem("glotifyFavoriteSongs", JSON.stringify([track.id]));
    	} else {
    		let favorites = JSON.parse(localStorage.getItem("glotifyFavoriteSongs"));
    		let trackAlreadyIncluded=false;
    		for (let i=0;i<favorites.length;i++){
    			if (track.id==favorites[i]){
    				trackAlreadyIncluded = true;
    				break;
    			}
    		}
    		if (!trackAlreadyIncluded){
  				favorites.push(track.id);
    			localStorage.setItem("glotifyFavoriteSongs", JSON.stringify(favorites));
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
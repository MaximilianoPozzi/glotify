export function albumDetailController(ApiService, $location){
	
    function goTo(url){
    	$location.path(url);
    }

    function setFavorite(track){
//    	localStorage.setItem("banana", JSON.stringify([track]));
    	if (!localStorage.getItem("glotifyFavoriteSongs")) {
    		localStorage.setItem("glotifyFavoriteSongs", JSON.stringify([track]));
    	} else {
    		let favorites = JSON.parse(localStorage.getItem("glotifyFavoriteSongs"));
    		let trackAlreadyIncluded=false;
    		for (let i=0;i<favorites.length;i++){
    			if (JSON.stringify(track)==JSON.stringify(favorites[i])){
    				trackAlreadyIncluded = true;
    				break;
    			}
    		}
    		if (!trackAlreadyIncluded){
  				favorites.push(track);
    			localStorage.setItem("glotifyFavoriteSongs", JSON.stringify(favorites));
    		}
    	}
    }

	ApiService.getAlbumInfo(localStorage.getItem("glotifyAlbumId")).then(function(album){
		this.image=album.images[0].url;
		this.tracks=album.tracks.items;
	}.bind(this), function(error){
		console.log(error);
	}.bind(this));

	this.goTo=goTo;
	this.setFavorite=setFavorite;
};
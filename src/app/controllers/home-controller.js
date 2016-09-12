export function homeController(ApiService, $location){

    function searchArtist(){
    	let artistName = document.getElementById("artist-name").value;
    	$location.path('/results_query='+artistName);
    }

    function removeFavorite(trackId){
        let favorites = JSON.parse(localStorage.getItem(glotifyFavoriteSongs));
        let favoritesAfterRemoving = [];
        for (favorite in favorites){
            if (favorite!=trackId){
                favoritesAfterRemoving.push(favorite);
            }
        }
        localStorage.setItem("glotifyFavoriteSongs", JSON.stringify(favoriteesAfterRemoving));
    }

    let artistName = document.getElementById("artist-name")

    ApiService.getTracksInfo(JSON.parse(localStorage.getItem("glotifyFavoriteSongs"))).then(function(tracks){
    	this.tracks=tracks;
    }.bind(this), function(error){
    	console.log(error);
    }.bind(this));

	this.searchArtist = searchArtist;
    this.removeFavorite = removeFavorite;
};
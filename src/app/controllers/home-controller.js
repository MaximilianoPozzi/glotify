export function HomeController(ApiService, $location, LocalStorageService){

    function searchArtist(){
    	let artistName = document.getElementById("artist-name").value;
    	$location.path('/results_query='+artistName);
    }

    if (LocalStorageService.getItem("glotifyFavoriteSongs") == "undefined" ||LocalStorageService.getItem("glotifyFavoriteSongs") == null){
        LocalStorageService.setItem("glotifyFavoriteSongs", "[]");
    }
    
    var favoriteTracksIds = JSON.parse(LocalStorageService.getItem("glotifyFavoriteSongs"));
    
    ApiService.getTracksInfo(favoriteTracksIds).then(function(tracks){
    	this.tracks=tracks;
    }.bind(this), function(error){
    	console.log(error);
    }.bind(this));


	this.searchArtist = searchArtist;
    this.favoriteTracksIds = favoriteTracksIds;
};
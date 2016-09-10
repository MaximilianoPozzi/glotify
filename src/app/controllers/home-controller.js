export function homeController($location){

    function saveArtistName(){
    	localStorage.setItem('glotifyArtistName', document.getElementById("artist-name").value);
    }

    function searchArtist(url){
    	saveArtistName();
    	$location.path(url);
    }
	
	this.saveArtistName=saveArtistName;
	this.searchArtist = searchArtist;
};
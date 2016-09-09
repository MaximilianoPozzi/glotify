export function homeController($location){

    function saveArtistName(){
    	localStorage.setItem('artistName', document.getElementById("artist-name").value);
    }

    function searchArtist(url){
    	saveArtistName();
    	$location.path(url);
    }
	
	this.saveArtistName=saveArtistName;
	this.searchArtist = searchArtist;
};
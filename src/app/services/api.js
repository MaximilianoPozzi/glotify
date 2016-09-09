export function ApiService($http) {
    
    function queryArtist(artistName){
        return $http({
            method:"GET",
            url:"https://api.spotify.com/v1/search?q="+artistName+"&type=artist"
        }).then(function(response){
            return response.data.artists.items;
        }, function(){

        });
    } 


    
	function queryArtistAlbums(artistId){
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/artists/"+artistId+"/albums?market=AR&limit=50" 
        }).then(function(response){
            return response.data.items;
        }, function(){

        });
    }


    function getAlbumInfo(albumId){
        return $http({
            method:'GET',
            url:"https://api.spotify.com/v1/albums/"+albumId 
        }).then(function(response){
            return response.data;
        }, function(){

        });
    }

    this.queryArtist = queryArtist;
    this.queryArtistAlbums = queryArtistAlbums;
    this.getAlbumInfo = getAlbumInfo;
}
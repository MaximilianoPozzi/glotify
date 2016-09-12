export function ApiService($http) {
    
    function queryArtist(artistName){
        return $http({
            method:"GET",
            url:"https://api.spotify.com/v1/search?q="+artistName+"&type=artist"
        }).then(function(response){
            return response.data.artists.items;
        }, function(error){
            console.log(error);
        });
    } 


    
	function queryArtistAlbums(artistId){
        return $http({
            method: "GET",
            url: "https://api.spotify.com/v1/artists/"+artistId+"/albums?market=AR&limit=50" 
        }).then(function(response){
            return response.data.items;
        }, function(error){
            console.log(error);
        });
    }


    function getAlbumInfo(albumId){
        return $http({
            method:'GET',
            url:"https://api.spotify.com/v1/albums/" + albumId 
        }).then(function(response){
            return response.data;
        }, function(error){
            console.log(error);
        });
    }

    function getTracksInfo(tracksIds){
        let joinedIds = tracksIds.join(',');
        return $http({
            method:'GET',
            url:"https://api.spotify.com/v1/tracks?ids=" + joinedIds
        }).then(function(response){
            return response.data.tracks;
        }, function(error){
            console.log(error);
        });
    }

    this.queryArtist = queryArtist;
    this.queryArtistAlbums = queryArtistAlbums;
    this.getAlbumInfo = getAlbumInfo;
    this.getTracksInfo = getTracksInfo;
}
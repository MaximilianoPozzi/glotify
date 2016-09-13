export function favoriteDirective(LocalStorageService){
	return {
		restrict: 'E',
		replace: true,
		templateUrl:'app/directives/views/favorite.html',
		scope: {
			tracks: '=',
			trackName:'=',
			mainArtistName:'=',
			mainArtistId:'=',
			albumName:'=',
			albumId:'=',
			trackId:'=',
			favoriteTracksIds:'='
		},

		link: function(scope, elem, attrs){
			let moreInfo=false;

			function changeDisplay(moreInfo){
				scope.moreInfo= !scope.moreInfo;
			}

    		function removeFavorite(trackidcode){
    	    	let favorites = scope.tracks;
        		let favoritesAfterRemoving = [];
        		let favoritesIdsAfterRemoving = [];
        		for (let i=0; i<favorites.length; i++){
        		    if (favorites[i].id!=trackidcode){
        	    	    favoritesAfterRemoving.push(favorites[i]);
        	    	    favoritesIdsAfterRemoving.push(favorites[i].id);
    	    		    }
        		}
        		scope.tracks = favoritesAfterRemoving;
        		scope.favoriteTracksIds = favoritesIdsAfterRemoving;
        		LocalStorageService.setItem("glotifyFavoriteSongs", JSON.stringify(favoritesIdsAfterRemoving));

    		}
		
			scope.moreInfo = moreInfo;
			scope.changeDisplay = changeDisplay;
			scope.removeFavorite = removeFavorite;
		}
	};
};
export function favoriteDirective(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl:'app/directives/views/favorite.html',
		scope: {
			trackName:'=',
			albumName:'=',
			trackId:'=',
		},
		link: function(scope, elem, attrs){
			let moreInfo=false;

			function changeDisplay(moreInfo){
				scope.moreInfo= !scope.moreInfo;
			}

			scope.moreInfo = moreInfo;
			scope.changeDisplay = changeDisplay;
		}
	};
};
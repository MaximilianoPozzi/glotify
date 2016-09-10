angular.mopdule('App')
.directive('favorite', function(){
	return {
		restrict: 'E',
		replace: true,
		templateUrl:'app/directives/views/favorite.html',
	}
})
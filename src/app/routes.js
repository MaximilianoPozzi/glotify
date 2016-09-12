import 'angular-route';

export function routes($routeProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false,
        rewriteLinks: true,
    });

    $routeProvider
        .when('/', {
            templateUrl: 'app/views/index.html',
            controller: 'homeController',
            controllerAs: 'homeCtrl'
        })

    	.when('/album-detail_query=:albumId', {
    		templateUrl: 'app/views/album-detail.html',
    		controller:'albumDetailController',
    		controllerAs:'albumDetailCtrl'
    	})

    	.when('/band-albums_get=:artistId', {
    		templateUrl: 'app/views/band-albums.html',
    		controller: 'bandAlbumsController',
    		controllerAs: 'bandAlbumsCtrl'
    	})

    	.when('/results_query=:artistName', {
    		templateUrl: 'app/views/results.html',
    		controller: 'resultsController',
    		controllerAs: 'resultsCtrl'
    	})

        .otherwise('/');


};
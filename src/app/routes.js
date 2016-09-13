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
            controller: 'HomeController',
            controllerAs: 'HomeCtrl'
        })

    	.when('/album-detail_query=:albumId', {
    		templateUrl: 'app/views/album-detail.html',
    		controller:'AlbumDetailController',
    		controllerAs:'AlbumDetailCtrl'
    	})

    	.when('/band-albums_get=:artistId', {
    		templateUrl: 'app/views/band-albums.html',
    		controller: 'BandAlbumsController',
    		controllerAs: 'BandAlbumsCtrl'
    	})

    	.when('/results_query=:artistName', {
    		templateUrl: 'app/views/results.html',
    		controller: 'ResultsController',
    		controllerAs: 'ResultsCtrl'
    	})

        .otherwise('/');


};
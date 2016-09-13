import {routes} from './routes';
import {ApiService} from './services';
import {LocalStorageService} from './services';
import {HomeController} from './controllers';
import {ResultsController} from './controllers';
import {AlbumDetailController} from './controllers';
import {BandAlbumsController} from './controllers';
import {favoriteDirective} from './directives';


angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .service('LocalStorageService', LocalStorageService)
    .controller('HomeController', HomeController)
    .controller('ResultsController', ResultsController)
    .controller('AlbumDetailController', AlbumDetailController)
    .controller('BandAlbumsController', BandAlbumsController)
    .directive('favorite', favoriteDirective);

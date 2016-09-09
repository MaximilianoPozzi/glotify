import {routes} from './routes';
import {ApiService} from './services';
import {homeController} from './controllers';
import {resultsController} from './controllers';
import {albumDetailController} from './controllers';
import {bandAlbumsController} from './controllers';



angular.module('App', ['ngRoute'])
    .config(routes)
    .service('ApiService', ApiService)
    .controller('homeController', homeController)
    .controller('resultsController', resultsController)
    .controller('albumDetailController', albumDetailController)
    .controller('bandAlbumsController', bandAlbumsController);

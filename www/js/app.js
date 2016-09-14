var moduleName = "MobileApp";
var plugins = [
    'ionic',
    'templates'
];
var app = angular.module(moduleName, plugins);
app.run(["$ionicPlatform", function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
}]);
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'menu.html',
        controller: 'MenuCtrl'
    })
        .state('login', {
        url: '/login',
        templateUrl: 'login.html',
        controller: 'LoginCtrl'
    })
        .state('app.prestations-technical', {
        url: '/prestations-technical',
        views: {
            'menuContent': {
                templateUrl: 'prestations-technical.html',
                controller: 'PrestationsTechnicalCtrl'
            }
        }
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');
}]);
app.controller('LoginCtrl', ["$scope", "$state", function ($scope, $state) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
    // Form data for the login modal
    $scope.loginData = {};
    // Perform the login action when the user submits the login form
    $scope.doLogin = function () {
        console.log('Doing login', $scope.loginData);
        $state.go('app.prestations-technical');
    };
}]);
app.controller('MenuCtrl', ["$scope", "$state", function ($scope, $state) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //$scope.$on('$ionicView.enter', function(e) {
    //});
}]);
app.controller('PrestationsTechnicalCtrl', ["$scope", function ($scope) {
    $scope.playlists = [
        { title: 'Reggae', id: 1 },
        { title: 'Chill', id: 2 },
        { title: 'Dubstep', id: 3 },
        { title: 'Indie', id: 4 },
        { title: 'Rap', id: 5 },
        { title: 'Cowbell', id: 6 }
    ];
}]);

//# sourceMappingURL=app.js.map

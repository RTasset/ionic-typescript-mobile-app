app.config(function ($stateProvider, $urlRouterProvider) {
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
});
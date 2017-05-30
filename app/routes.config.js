export function routes ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true)

    $routeProvider
    .when('/sgp/statistique', {
        template: '<sgp></sgp>'
    })

    .otherwise({
        redirectTo: '/sgp/statistique'
    })

}

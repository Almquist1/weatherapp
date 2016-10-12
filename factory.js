(function() {
    'use strict';

    angular
        .module('weatherapp')
        .factory('WeatherFactory', WeatherFactory);

    WeatherFactory.$inject = ['$http'];

    /* @ngInject */
    function WeatherFactory($http) {

        var service = {
            getWeather: getWeather
        };

        return service;

        ////////////////

        function getWeather(city) {
            // Get method for API by city ID
            return $http({
                method: 'GET',
                url: 'http://api.openweathermap.org/data/2.5/weather',
                params: {
                    APPID: '',
                    q: city,
                    units: "imperial"
                }

            }).then(function(response) {

                return response.data;
        });

    }

}
})();
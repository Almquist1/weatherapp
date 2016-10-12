(function() {
    'use strict';

    angular
        .module('weatherapp')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['WeatherFactory', '$http'];

    /* @ngInject */
    function WeatherController(WeatherFactory, $http) {
        var vm = this;

        vm.cityData;
        vm.searchHistory = [];
        vm.getInfo;
        vm.cityname;
        vm.history = [{}];

        // get from API
        vm.getInfo = function(cityname){
            WeatherFactory.getWeather(cityname)
            .then(function(result){
                vm.cityData = result;
                vm.history.push({
                    place: result.name,
                    dt: result.dt    

                })

            });
        }
        
    }

})();
(function() {
    'use strict';
    angular
        .module('module')
        .factory('weatherfactory', weatherfactory);
weatherFactory.$inject = ['$http'];

    /* @ngInject */
    function factory(dependencies) {
        var service = {
            func: func
        };
        return service;

        ////////////////

        function func() {
        }
    }
})();


function getTopspots(city) {
var defer = $q.defer();
$http({
	method: ‘GET’, 
	url:
	params: {
		APPID: 
		id:
})

.then(
	function(response){
		if(typeof response.data === ‘object){
			defer.resolve(response);

			toast.success(‘We have weather!’);



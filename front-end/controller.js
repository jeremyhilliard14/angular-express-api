var searchApp = angular.module('searchApp', []);

searchApp.controller('searchController', function($scope, $http){
	
	var apiURL = 'http://localhost:3000/search';
	//var apiURL = 'http://10.150.41.253:3000/search';


	$http.get(apiURL).then(
		function successCallback(response){
			$scope.studentsOnLoad = response.data;
			console.log($scope.studentsOnLoad);
					//this callback will be called asynchronously
				//when the response is available
		}, function errorCallback(response){
			$scope.result = "Error!!";
				//called asynchronously if an error occurs
				//or server returns response with an error status
		});


	$scope.search = function(){
		
		//var apiURL = 'http://localhost:3000/search';
		var apiURL = 'http://10.150.41.253:3000/search';


		$http.post(apiURL, {name: $scope.who}).then(
			function successCallback(response){
				$scope.result = response.data;
				//this callback will be called asynchronously
				//when the response is available
			}, function errorCallback(response){
				$scope.result = "Error!!";
				//called asynchronously if an error occurs
				//or server returns response with an error status
			});
	}
});
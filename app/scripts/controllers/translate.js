'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:TranslateCtrl
 * @description
 * # TranslateCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('TranslateCtrl', function ($scope, $rootScope, $http, $location) {
    $scope.fromLangId = $location.search().from;
		$scope.fromTerm = $location.search().term;
		$scope.toLangId = $location.search().to;
/*
		$scope.fromLang = 'English';
		$scope.toLang = 'Portuguese';
		$scope.toTerm = 'Graviola';
		$scope.desc = 'Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...';
		$scope.imageUrl = '//upload.wikimedia.org/wikipedia/commons/thumb/9/90/Annona_muricata_Blanco1.196.png/474px-Annona_muricata_Blanco1.196.png';
*/
		function onFail(data) {
			console.error(data);
			$location.path('/error');
		}

		function onSuccess(response) {
			var pageId = response.data.query.pageids[0];
			var article = response.data.query.pages[pageId];
//			var imgRoot = '';
			$rootScope.translation = {
				originalTerm: $scope.fromTerm,
				fromTerm: article.title,
				fromDesc: article.extract,
//				fromImg: imgRoot + article.images[0].title,
				toTerm: article.langlinks[0]['*'],
				toArticleUrl: article.langlinks[0].url,
				toLangId: article.langlinks[0].lang
			};

			$location.path('/found');
		}

//		var apiUrl = '.wikipedia.org/w/api.php';
//		$http.get('//' + $scope.fromLangId + apiUrl, {
		$http.get('/mock_data/soursop.json', {
			params: {
				action: 'query',
				prop: 'extracts|images|langlinks',
				format: 'json',
				exchars: 200,
				exlimit: 1,
				exintro: '',
				imlimit: 1,
				indexpageids: '',
				lllimit: 10,
				llprop: 'url',
				lllang: $scope.toLangId,
				titles: $scope.fromTerm
			}
		}).then(onSuccess, onFail);
  });

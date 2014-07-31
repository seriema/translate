'use strict';

/**
 * @ngdoc function
 * @name translapediaApp.controller:TranslateCtrl
 * @description
 * # TranslateCtrl
 * Controller of the translapediaApp
 */
angular.module('translapediaApp')
  .controller('TranslateCtrl', function ($scope, $rootScope, $http, $location, languageCodes) {
    $scope.fromLangId = $location.search().from;
		$scope.fromTerm = $location.search().term;
		$scope.toLangId = $location.search().to;

		$rootScope.translation = {
			originalTerm: $scope.fromTerm,
			fromLangId: $scope.fromLangId,
			fromLang: languageCodes[$scope.fromLangId],
			toLangId: $scope.toLangId,
			toLang: languageCodes[$scope.toLangId]
		};

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
			if (response.data.length === 0) {
				return $location.path('/error');
			}

			var pageId = response.data.query.pageids[0];

			// Term not found
			if (pageId === '-1') {
				return $location.path('/not-found');
			}

			var article = response.data.query.pages[pageId];
			var redirected = !!response.data.query.redirects && response.data.query.redirects.length > 0;

			angular.extend($rootScope.translation, {
				fromTerm: article.title,
				fromDesc: article.extract,
				redirected: redirected
			});

			var translation = article.langlinks;

			// Term found, but no translation
			if (!translation) {
				if (redirected) {
					return $location.path('/not-found-ambiguous');
				}

				return $location.path('/not-found-translation');
			}

			angular.extend($rootScope.translation, {
				toTerm: translation[0]['*'],
				toArticleUrl: translation[0].url
			});

			// Term found because of redirect
			if (redirected) {
				return $location.path('/found-redirect');
			}

			// Term found and translated
			return $location.path('/found');
		}

		var apiUrl = '.wikipedia.org/w/api.php';
		$http.jsonp('//' + $scope.fromLangId + apiUrl, {
//		$http.get('/mock_data/soursop.json', {
			params: {
				callback: 'JSON_CALLBACK',
				action: 'query',
				prop: 'extracts|images|langlinks',
				format: 'json',
				exchars: 200,
				exlimit: 1,
				exintro: '',
				explaintext: '',
				imlimit: 1,
				indexpageids: '',
				lllimit: 10,
				llprop: 'url',
				lllang: $scope.toLangId,
				redirects: '',
				titles: $scope.fromTerm
			}
		}).then(onSuccess, onFail);
  });

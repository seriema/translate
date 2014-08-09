"use strict";angular.module("translapediaApp",["ngAnimate","ngRoute","ngSanitize"]).constant("languageCodes",{en:"English",fr:"French",de:"German",it:"Italian",pl:"Polish",pt:"Portuguese",es:"Spanish",sv:"Swedish"}).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl"}).when("/translate",{templateUrl:"views/translate.html",controller:"TranslateCtrl"}).when("/found",{templateUrl:"views/found.html",controller:"FoundCtrl"}).when("/found-redirect",{templateUrl:"views/found-redirect.html",controller:"FoundRedirectCtrl"}).when("/found-ambiguous",{templateUrl:"views/found-ambiguous.html",controller:"FoundAmbiguousCtrl"}).when("/not-found",{templateUrl:"views/not-found.html",controller:"NotFoundCtrl"}).when("/not-found-translation",{templateUrl:"views/not-found-translation.html",controller:"NotFoundTranslationCtrl"}).when("/not-found-ambiguous",{templateUrl:"views/not-found-ambiguous.html",controller:"NotFoundAmbiguousCtrl"}).when("/error",{templateUrl:"views/error.html"}).otherwise({redirectTo:"/"})}]),angular.module("translapediaApp").controller("MainCtrl",function(){}),angular.module("translapediaApp").controller("AboutCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("translapediaApp").controller("TranslateCtrl",["$scope","$rootScope","$http","$location","languageCodes",function(a,b,c,d,e){function f(a){console.error(a),d.path("/error")}function g(a){if(0===a.data.length)return d.path("/error");var c=a.data.query.pageids[0];if("-1"===c)return d.path("/not-found");var e=a.data.query.pages[c],f=!!a.data.query.redirects&&a.data.query.redirects.length>0;angular.extend(b.translation,{fromTerm:e.title,fromDesc:e.extract,fromArticleUrl:e.fullurl,redirected:f});var g=e.langlinks;return g?(angular.extend(b.translation,{toTerm:g[0]["*"],toArticleUrl:g[0].url}),d.path(f?"/found-redirect":"/found")):d.path(f?"/not-found-ambiguous":"/not-found-translation")}a.fromLangId=d.search().from,a.fromTerm=d.search().term,a.toLangId=d.search().to,b.translation={originalTerm:a.fromTerm,fromLangId:a.fromLangId,fromLang:e[a.fromLangId],toLangId:a.toLangId,toLang:e[a.toLangId]};var h=".wikipedia.org/w/api.php";c.jsonp("//"+a.fromLangId+h,{params:{callback:"JSON_CALLBACK",action:"query",prop:"extracts|info|langlinks",format:"json",indexpageids:"",redirects:"",titles:a.fromTerm,exchars:200,exlimit:1,exintro:"",explaintext:"",inprop:"url",lllimit:10,llprop:"url",lllang:a.toLangId}}).then(g,f)}]),angular.module("translapediaApp").controller("FoundCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"Soursop",fromLangId:"en",fromLang:"English",fromTerm:"Soursop",fromDesc:"Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...",fromArticleUrl:"http://en.wikipedia.org/wiki/Soursop",toLangId:"pt",toLang:"Portuguese",toTerm:"Graviola",toArticleUrl:"http://pt.wikipedia.org/wiki/Graviola"})}]),angular.module("translapediaApp").controller("FoundRedirectCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"trek",fromLangId:"en",fromLang:"English",fromTerm:"Backpacking",fromDesc:"Backpacking is generally an extended journey or walk with a backpack.[1] However, for North American hikers it more frequently describes a multi-day hike that involves camping, ...",fromArticleUrl:"http://en.wikipedia.org/wiki/Backpacking_(wilderness)",toLangId:"sv",toLang:"Swedish",toTerm:"vandring",toArticleUrl:"http://sv.wikipedia.org/wiki/Vandring"})}]),angular.module("translapediaApp").controller("FoundAmbiguousCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"trek"})}]),angular.module("translapediaApp").controller("NotFoundCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"prffteghh",fromLangId:"en",fromLang:"English",toLangId:"sv"})}]),angular.module("translapediaApp").controller("NotFoundTranslationCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"soursop",fromLangId:"en",fromLang:"English",fromTerm:"Soursop",fromDesc:"Soursop is the fruit of Annona muricata, a broadleaf, flowering, evergreen tree native to Mexico, Cuba, Central America, the Caribbean, and northern South America, primarily ...",toLangId:"sv",toLang:"Swedish"})}]),angular.module("translapediaApp").controller("NotFoundAmbiguousCtrl",["$scope","$rootScope",function(a,b){b.translation||(a.translation={originalTerm:"trek",fromLangId:"en",fromLang:"English",fromTerm:"Backpacking",fromDesc:"Backpacking is generally an extended journey or walk with a backpack.[1] However, for North American hikers it more frequently describes a multi-day hike that involves camping, ...",toLangId:"pt",toLang:"Portuguese"})}]),angular.module("translapediaApp").directive("translateInput",function(){return{restrict:"E",templateUrl:"views/directives/translate-input.html",controller:["$scope","$rootScope","$location","languageCodes",function(a,b,c,d){var e=b.translation||{};a.term=e.originalTerm||"",a.toLangId=e.toLangId||"pt",a.fromLangId=e.fromLangId||"en",a.languages=Object.keys(d).map(function(a){return{id:a,text:d[a]}}),a.translate=function(){c.path("/translate").search({term:a.term,from:a.fromLangId,to:a.toLangId})}}]}}),angular.module("translapediaApp").directive("termDefinition",function(){return{restrict:"E",templateUrl:"views/directives/term-definition.html"}}),angular.module("translapediaApp").directive("termTranslation",function(){return{restrict:"E",transclude:!0,templateUrl:"views/directives/term-translation.html"}});
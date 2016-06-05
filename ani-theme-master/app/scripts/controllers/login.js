'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('LoginCtrl', function($scope, $location) {
    function loadJSON(callback) {

      var xobj = new XMLHttpRequest();
      xobj.overrideMimeType("application/json");
      xobj.open('GET', 'scripts/page.json', true); // Replace 'my_data' with the path to your file
      xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
          // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
          callback(xobj.responseText);
        }
      };
      xobj.send(null);
    }

    loadJSON(function(response) {
      // Parse JSON string into object
      $scope.page = JSON.parse(response);
      $scope.name = $scope.page.name_of_school
      console.log($scope.name);
      $scope.load()
    });
    $scope.load = function(){
      console.log($scope.name)
      $scope.submit()
    }
    // $scope.page = JSON.parse(response);
    // $scope.name = $scope.page.name_of_school
    $scope.submit = function(t) {
    }

  });

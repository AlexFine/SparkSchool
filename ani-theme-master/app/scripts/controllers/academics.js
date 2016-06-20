'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('AcademicsCtrl', function($scope, $location,$uibModal, $anchorScroll) {
	$scope.collapse = true;

    $scope.submit = function() {

      $location.path('/dashboard');

      return false;
    }
    $scope.scroll = function(place){
      $location.hash(place);
      $anchorScroll();
      // var section3 = angular.element(document.getElementById(place));
      // console.log(section3)
      // $document.scrollToElementAnimated(section3)
      // anchorSmoothScroll.scrollTo(place);
    }
    $scope.animationsEnabled = true;
    $scope.animationsEnabled = true;
    $scope.open = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent3.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return [[[]]];
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
    $scope.open2 = function (size) {

      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent4.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return [[[]]];
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };
  });

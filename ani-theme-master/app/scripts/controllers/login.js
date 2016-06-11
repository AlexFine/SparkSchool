'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('HomeCtrl', function($scope, $location,  $uibModal, $log) {

	
	 $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.toggleAnimation = function () {
    $scope.animationsEnabled = !$scope.animationsEnabled;
  };

	
	
	
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


    $scope.load = function(){
      loadJSON(function(response) {
        // // Parse JSON string into object
        // response = '{"home_page_content": "Spark Charter School is a new, public, K-8 school in Sunnyvale. We opened on August 18, 2015 with grades K-6, and will increase by one grade level each year until 2017 when we reach grades K-8. The Spark Charter academic program utilizes Project-based Learning, Social-Emotional Intelligence, and Parent Partnerships to provide a rigorous and holistic educational program. Our educational model is poised to foster deeper learning, encourage creativity, cultivate strong critical thinking, and promote collaboration and communication skills.  The visual and performing arts, STEAM, Mandarin language instruction, and physical education will be fully integrated into our instructional program. Spark Charter is a school that is racially, ethnically, and culturally diverse, reflecting the rich diversity of our community.", "name_of_school": "Spark Charter School", "upcoming_events": ["march 15","Test event","description"]],"about_us": {"Spark's Philosophy": {"Vision": {"text": "Our vision is to create a K-8 public school that utilizes hands-on projects, social-emotional learning, and family participation* to create a rich and academically rigorous educational program that will foster deeper learning, encourage creativity, and cultivate strong critical thinking, collaboration and communication skills.  We strive to integrate the arts, foreign language instruction, and physical education into the academic program. We are committed to creating a school that is racially, ethnically, and culturally diverse, reflecting the diversity of our community. ","image": "test image.jpg"}}}'
        console.log(response,"test")
        $scope.page = JSON.parse(response);
        $scope.name = $scope.page.name_of_school
        console.log($scope.name);
        console.log($scope.name)
        $scope.$apply()
        $scope.submit()

      });

    }
    // $scope.page = JSON.parse(response);
    // $scope.name = $scope.page.name_of_school
    $scope.submit = function(t) {
      console.log("test")
    }
    $scope.load();
	
	
	
	$scope.myInterval = 5000;
  $scope.noWrapSlides = false;
  $scope.active = 0;
  var slides = $scope.slides = [];
  var currIndex = 0;

  $scope.addSlide = function() {
    var newWidth = 1000 + slides.length + 1;
    slides.push({
      image: '../images/image' + i + '.jpg',
      text: ['Nice image','Awesome photograph','That is so cool'][slides.length % 3],
      id: currIndex++
    });
  };

  $scope.randomize = function() {
    var indexes = generateIndexesArray();
    assignNewIndexesToSlides(indexes);
  };

  for (var i = 1; i < 4; i++) {
    $scope.addSlide(i);
  }

  // Randomize logic below

  function assignNewIndexesToSlides(indexes) {
    for (var i = 0, l = slides.length; i < l; i++) {
      slides[i].id = indexes.pop();
    }
  }

  function generateIndexesArray() {
    var indexes = [];
    for (var i = 0; i < currIndex; ++i) {
      indexes[i] = i;
    }
    return shuffle(indexes);
  }

  // http://stackoverflow.com/questions/962802#962890
  function shuffle(array) {
    var tmp, current, top = array.length;

    if (top) {
      while (--top) {
        current = Math.floor(Math.random() * (top + 1));
        tmp = array[current];
        array[current] = array[top];
        array[top] = tmp;
      }
    }

    return array;
  }
	
	
  })

	.controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $uibModalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $uibModalInstance.dismiss('cancel');
  };
});

'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('HomeCtrl', function($scope, $location,  $uibModal, $log, $sce, anchorSmoothScroll, $anchorScroll,$document, $window) {

	$scope.collapse = true;
//	$scope.width = $window.innerWidth;
//	$scope.sub1 = Math.log($scope.width);
//	$scope.sub2 = Math.log(9.8*$scope.width);
//	$scope.ln10 = Math.log(10)
//	$scope.sub25 = $scope.sub2/$scope.ln10
//	$scope.sub3 = 471*$scope.sub25
//	$scope.sub4 = 2096.96738123 - $scope.sub3;
//	$scope.height = 1000;


    $scope.teachers = [
      ["Whitney Infelise", "Kindergarten",  "images/flat-avatar.png","Whitney Infelise is coming to us from Hillbrook School in Los Gatos where she taught kindergarten and 1st grade.  She has a B.A. in Music and English Literature from Hamilton College and a Masters in Early Childhood Education with a focus on using creative arts in the classroom from Lesley University. She believes that learning is more meaningful and memorable through the integration of arts and play. In her free time, Whitney enjoys cooking, singing, reading, and playing with her cat." ],
      ["Sharon King", "Kindergarten","images/flat-avatar.png", "I(and Billy Crystal) grew up in Long Beach, Long Island; I worked for New York University and its medical center in Manhattan for twelve years. Years later, I lived in Berkeley Heights, New Jersey where I home schooled my daughter and son through eighth grade. Today, they both have their master's degree. And, yes, I still have my New York accent. My favorite book is Step Out on Nothing, by Byron Pitts. I also love swimming in the Atlantic Ocean,  skiing  in the Rockies, helping to build houses in Mexico and California, and working out at the gym. My favorite California things are the brilliant sunshine, the easy access to fresh fruits and vegetables, and the friendliness of people. My passion as a reading specialist for over twenty-five years, is to help elementary school children to have a more successful and brighter future by teaching them reading and by building a strong,educational foundation."],
      ["Usha Ramesh","Elementary School Teacher", "images/8.png","I’m thrilled to be here again at Spark, igniting young minds with the passion and drive for academics and critical thinking. I possess a Master’s degree in English Literature in addition to a clear single subject credential in English and a Multiple Subjects credential. I have a rich and varied teaching experience, having held challenging positions as an upper elementary/elementary teacher in India, Singapore, and CA. These diverse work experiences have added yet another dimension to my teaching skills and has given me a deep insight and sensitivity to the learning needs of my students. I also possess immaculate work ethics, and strong ideals that make me model, mold, and inspire students to become achievers. My goal is to motivate students in ascertaining their inner strengths and abilities, in order to make good choices. I aim to provide a stimulating learning environment that fosters confidence, develops higher critical thinking skills, and encourages children to reach their full potential. I am happily married to the man of my dreams with two wonderful sons off at college at UCSD and UCSB. I am a classical dancer and an avid gardener with a thriving garden. I have two pets: Lilo my dog and Kiki my green cheek conure."],
      ["Par Pandit","Elementary School Teacher", "images/9.jpg", "Par Pandit has Bachelor Degrees in Psychology (U. C. Berkeley) and Mathematics/Computer Science (San Jose State). He earned his teaching credential from University of San Francisco in 2014 and taught last year at Magnolia Science Academy. Before becoming a teacher, Par was a software quality engineer for over 20 years working at companies such as Lotus and Netscape. He enjoys watching sports and listening to audio-books. His passion is to help students better understand themselves, become global citizens, and develop problem solving skills.  Par has been living in the San Jose area since 1970. "]
    ]
 $scope.dynamicPopover = {
    content: 'A graduate of Boston University, Chris has over twenty years experience as both a math teacher and charter school leader.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Christopher Mahoney's Bio"
  };
	$scope.dynamicPopover2 = {
    content: 'Prior to coming to Spark, Martha worked at the German International School in Palo Alto.  Her many years of experience in the financial sector has focused on both schools and non-profit organizations.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Martha Branch's Bio"
  };
	$scope.dynamicPopover3 = {
    content: 'Director of Special Education.  Jenny has over twenty years of experience working in Special Education with the Santa Clara County Board of Education.  In addition to her role within the school’s special education program, Jenny also serves as Dean of Student Life.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Jenny Garver's Bio"
  };

  $scope.placement = {
    options: [
      'top',
      'top-left',
      'top-right',
      'bottom',
      'bottom-left',
      'bottom-right',
      'left',
      'left-top',
      'left-bottom',
      'right',
      'right-top',
      'right-bottom'
    ],
    selected: 'top'
  };
  $scope.scroll = function(place){
    $location.hash(place);
    $anchorScroll();
    // var section3 = angular.element(document.getElementById(place));
    // console.log(section3)
    // $document.scrollToElementAnimated(section3)
    // anchorSmoothScroll.scrollTo(place);
  }

  $scope.htmlPopover = $sce.trustAsHtml('<b style="color: red">I can</b> have <div class="label label-success">HTML</div> content');

	$scope.isCollapsed1 = false;
	$scope.isCollapsed2 = false;
	$scope.isCollapsed3 = false;
	$scope.isCollapsed4 = false;
	$scope.isCollapsed5 = false;
	$scope.isCollapsed6 = false;
	$scope.isCollapsed7 = false;
	$scope.isCollapsed8 = false;
	$scope.isCollapsed9 = false;

	$scope.faq = [{
		num: 1,
		q:'How large is Spark Charter School?  What are the school times?',
		a:"Spark is a K-8 charter school with 200 students for the 16-17 school year.  The plan is to grow as we expand our school to a projected size of 400 students over the next six years.  Kindergarten attends Monday-Friday 8:30 AM - 1:00 PM.  Grades 1-8 attends 8:30 Am - 3:15 PM Monday-Friday except on Wednesdays when there is a weekly Minimum Day:  8:30 AM-1:00 PM for all students."
	},
		{
		num:2,
		q:"How is a charter school different from a public school?",
		a:"A charter school is a public school.  The only real difference is that any family can apply to a charter school.  You do not have to live in Sunnyvale to apply for enrollment."
	},
		{
		num:3,
		q:"Is there an admissions process?",
		a:"No.  As a public school, we have to be open and accessible to all interested families.  The process is to register and, if there are more students than spots available, Spark will have a lottery to fairly determine who is admitted."
	},
		{
		num:4,
		q:"Why doesn’t Spark accept all interested students? ",
		a:"We would if we could!  Unfortunately, we are limited in size because of issues pertaining to the local school district."
	}];
	
	$scope.faqnum = $scope.faq.length;
	$scope.faqhalf = Math.floor($scope.faqnum/2);
	

	 $scope.items = ['Usha Ramos', 'Melissa Hasan', 'Jay Levin', 'Joe Callinan'];

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

	$scope.open2 = function (size) {

    var modalInstance = $uibModal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'myModalContent2.html',
      controller: 'ModalInstanceCtrl',
      size: size,
      resolve: {
        items: function () {
          return $scope.teachers;
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

      });

    }
    // $scope.page = JSON.parse(response);
    // $scope.name = $scope.page.name_of_school
    $scope.submit = function(t) {
      console.log(t)
    }
    $scope.submitForm = function(t) {
      console.log(t)
      console.log($scope.form1)
      var text = "Hi Spark School, \n my name is " +$scope.form1.name +" and I wanted to say this: " + $scope.form1.comments + " \n Thanks my email is " +$scope.form1.email
      window.open('mailto:test@example.com?subject=spark\nSchool&body='+text);

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
      image: 'images/image' + i + '.jpg',
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

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
//	$scope.sub3 = 4collapsed71*$scope.sub25
//	$scope.sub4 = 2096.96738123 - $scope.sub3;
//	$scope.height = 1000;


    $scope.teachers = [
      ["Emily Duncan", "Kindergarten",  "../images/1.png","Emily Duncan received her B.A in Studio Art from San Jose State University and is currently completing her Masters in Education from National University. During the last school year, Mrs. Duncan was teaching Kindergarten through 5th grade STEM at St. Joseph of Cupertino. The quote from Margaret Meade, \"Children must be taught how to think, not what to think,\" is the basis for her philosophy in the classroom. Emily is an accomplished visual artist, with many of her pieces hanging in Bay Area residences. She is also a wife and mother (ages 9, 6, & 3), and enjoys marathon running and yoga in her \"spare\" time." ],
      ["Amanda Chung", "Kindergarten","../images/2.jpg", "Amanda Dee Chung recently graduated with a Master of Arts in Teaching and Credential from Santa Clara University. She also attended San Jose State where she received her bachelor’s degree in Liberal Studies with an emphasis in teaching. Last year, Amanda student-taught both first and third grade in Moreland School District.  Amanda is excited to meet her new students as they start Kindergarten.  She believes that each child can be successful when they follow their dreams, believe in themselves, and are supported.  As a teacher, her goal is to help tap into her students’ potential, and encourage and guide them along the way.  Amanda is happy to become part of a community of educators, students, and parents alike who want to be a part of Spark’s philosophy of education. When Amanda is not teaching, she is playing with her new puppy, planning family activities, swimming, and dancing."],
      ["Emily Moles","First Grade", "../images/3.png","Emily Moles graduated from Tennessee Technological University with a Bachelor's degree in Elementary Education. After graduation, she taught third grade in Tennessee for two years before moving to Chongqing, China to teach English as a second language to university students. Emily has a passion for helping her students see their own potential and for pushing them to do their best, not only academically but in all aspects of life. A few of her hobbies include listening to music, baking, and exercising. She is very excited about the upcoming year of adventures and learning in First Grade at Spark."],
      ["Martha Haake","Second Grade", "../images/4.png", "Martha Haake is a graduate of Mount Saint Mary’s University where she received her Master's of Science in Education, and Chapman University where she received her Bachelor of Arts in Communication. This is Martha’s first year teaching and she is excited to begin her journey at Spark Charter! She believes in discovering each student’s unique intelligences and allowing them to construct knowledge by following their passions. Teaching at Spark is a dream come true for Martha, who looks forward to working with parents to create meaningful learning experiences for students. Her hobbies include reading, writing, horseback riding, and being with friends and family (including her pets). "],
      ["Melissa Hasan","Third Grade", "../images/5.png","Melissa Hasan holds a BA from Kenyon College, an MA from Indiana University, and a Multiple Subjects Credential from San Jose State University.  She taught Special Education for four years and tutored privately for 5 years before recently completing the Multiple Subjects Credential.  Ms. Hasan's teaching philosophy is that all students can learn and should be challenged.  When students are engaged, learning can be fun even when it is hard work.  She is looking forward to learning (and watching her students learn) through hands-on activities and projects.  Ms. Hasan has two lovely young children, and enjoys spending time with them and playing board games with friends." ],
      ["Usha Ramesh","Fourth Grade","../images/6.jpg","Usha Ramesh has a rich and varied teaching experience, having taught in India, Singapore, and here in the U.S.. She holds a Master's degree in English Literature and Education, and a single-subject English Credential as well as a Multiple Subjects Credential.  Mrs. Ramesh's educational philosophy is to help students dream big and to create critical thinkers and problem solvers. Every child has great potential, and Mrs. Ramesh believes in doing9 all that she can to maximize learning while students have fun and experience a sense of accomplishment. Mrs. Ramesh's great pillars of strength are her husband, Ramesh, and her two sons. One completed undergrad Bio-Engineering at UCLA with honors and will be pursuing a M.S. at UCSD. The other is at UCSB studying Computer Science Engineering. Mrs. Ramesh is an avid gardener and a classical Bharatnatyam dancer."],
      ["Wayne Conley", "Fifth/Sixth Grade", "../images/7.png", "Wayne Conley holds a Bachelor's degree from UC Santa Barbara, and earned his Master's degree and teaching credential from the University of Phoenix.  Mr. Conley has six years of teaching experience, mostly as a middle school Science teacher.  He has taught in Blossom Hill, Santa Clara, and Watsonville.  Mr. Conley's passion is in the STEM fields, and he enjoys teaching science in a hands-on style.  He loves spending time outdoors, including when he's teaching!"]
    ]
 $scope.dynamicPopover = {
    content: 'A graduate of Boston University, Chris has over twenty years experience as both a math teacher and charter school leader..',
    templateUrl: 'myPopoverTemplate.html',
    title: "Christopher Mahoney's Bio"
  };
	$scope.dynamicPopover2 = {
    content: 'Prior to coming to Spark, Martha worked at the German International School in Palo Alto.  Her many years of experience in the financial sector has focused on both schools and non-profit organizations.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Martha Branch's Bio"
  };
	$scope.dynamicPopover3 = {
    content: 'Jenny has over twenty years of experience working in Special Education with the Santa Clara County Board of Education.  In addition to her role within the school’s special education program, Jenny also serves as Dean of Student Life.',
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

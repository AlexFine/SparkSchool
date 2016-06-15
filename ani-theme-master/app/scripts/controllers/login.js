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
	
	$scope.width = $window.innerWidth;
	
	
    $scope.teachers = [
      ["Emily Duncan", "Kindergarten",  "../images/1.png","Emily Duncan received her B.A in Studio Art from San Jose State University and is currently completing her Masters in Education from National University. During the last school year, Mrs. Duncan was teaching Kindergarten through 5th grade STEM at St. Joseph of Cupertino. The quote from Margaret Meade, \"Children must be taught how to think, not what to think,\" is the basis for her philosophy in the classroom. Emily is an accomplished visual artist, with many of her pieces hanging in Bay Area residences. She is also a wife and mother (ages 9, 6, & 3), and enjoys marathon running and yoga in her \"spare\" time." ],
      ["Amanda Chung", "Kindergarten","../images/2.jpg", "Amanda Dee Chung recently graduated with a Master of Arts in Teaching and Credential from Santa Clara University. She also attended San Jose State where she received her bachelor’s degree in Liberal Studies with an emphasis in teaching. Last year, Amanda student-taught both first and third grade in Moreland School District.  Amanda is excited to meet her new students as they start Kindergarten.  She believes that each child can be successful when they follow their dreams, believe in themselves, and are supported.  As a teacher, her goal is to help tap into her students’ potential, and encourage and guide them along the way.  Amanda is happy to become part of a community of educators, students, and parents alike who want to be a part of Spark’s philosophy of education. When Amanda is not teaching, she is playing with her new puppy, planning family activities, swimming, and dancing."],
      ["Emily Moles","First Grade", "../images/3.png","Emily Moles graduated from Tennessee Technological University with a Bachelor's degree in Elementary Education. After graduation, she taught third grade in Tennessee for two years before moving to Chongqing, China to teach English as a second language to university students. Emily has a passion for helping her students see their own potential and for pushing them to do their best, not only academically but in all aspects of life. A few of her hobbies include listening to music, baking, and exercising. She is very excited about the upcoming year of adventures and learning in First Grade at Spark."],
      ["Martha Haake","Second Grade", "../images/4.png", "Martha Haake is a graduate of Mount Saint Mary’s University where she received her Master's of Science in Education, and Chapman University where she received her Bachelor of Arts in Communication. This is Martha’s first year teaching and she is excited to begin her journey at Spark Charter! She believes in discovering each student’s unique intelligences and allowing them to construct knowledge by following their passions. Teaching at Spark is a dream come true for Martha, who looks forward to working with parents to create meaningful learning experiences for students. Her hobbies include reading, writing, horseback riding, and being with friends and family (including her pets). "],
      ["Melissa Hasan","Third Grade", "../images/5.png","Melissa Hasan holds a BA from Kenyon College, an MA from Indiana University, and a Multiple Subjects Credential from San Jose State University.  She taught Special Education for four years and tutored privately for 5 years before recently completing the Multiple Subjects Credential.  Ms. Hasan's teaching philosophy is that all students can learn and should be challenged.  When students are engaged, learning can be fun even when it is hard work.  She is looking forward to learning (and watching her students learn) through hands-on activities and projects.  Ms. Hasan has two lovely young children, and enjoys spending time with them and playing board games with friends." ],
      ["Usha Ramesh","Fourth Grade","../images/6.jpg","Usha Ramesh has a rich and varied teaching experience, having taught in India, Singapore, and here in the U.S.. She holds a Master's degree in English Literature and Education, and a single-subject English Credential as well as a Multiple Subjects Credential.  Mrs. Ramesh's educational philosophy is to help students dream big and to create critical thinkers and problem solvers. Every child has great potential, and Mrs. Ramesh believes in doing all that she can to maximize learning while students have fun and experience a sense of accomplishment. Mrs. Ramesh's great pillars of strength are her husband, Ramesh, and her two sons. One completed undergrad Bio-Engineering at UCLA with honors and will be pursuing a M.S. at UCSD. The other is at UCSB studying Computer Science Engineering. Mrs. Ramesh is an avid gardener and a classical Bharatnatyam dancer."],
      ["Wayne Conley", "Fifth/Sixth Grade", "../images/7.png", "Wayne Conley holds a Bachelor's degree from UC Santa Barbara, and earned his Master's degree and teaching credential from the University of Phoenix.  Mr. Conley has six years of teaching experience, mostly as a middle school Science teacher.  He has taught in Blossom Hill, Santa Clara, and Watsonville.  Mr. Conley's passion is in the STEM fields, and he enjoys teaching science in a hands-on style.  He loves spending time outdoors, including when he's teaching!"]
    ]
 $scope.dynamicPopover = {
    content: 'Chris has more than 20 years of experience with project-based learning instruction and leadership for grades K-8. He grew up in Concord, Massachusetts, attended Boston University as an undergraduate, got his Masters In Education from the University of Massachusetts (School Leadership), and attended Villanova’s MBA program.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Chris's Bio"
  };
	$scope.dynamicPopover2 = {
    content: 'Chris has more than 20 years of experience with project-based learning instruction and leadership for grades K-8. He grew up in Concord, Massachusetts, attended Boston University as an undergraduate, got his Masters In Education from the University of Massachusetts (School Leadership), and attended Villanova’s MBA program.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Chris's Bio"
  };
	$scope.dynamicPopover3 = {
    content: 'Chris has more than 20 years of experience with project-based learning instruction and leadership for grades K-8. He grew up in Concord, Massachusetts, attended Boston University as an undergraduate, got his Masters In Education from the University of Massachusetts (School Leadership), and attended Villanova’s MBA program.',
    templateUrl: 'myPopoverTemplate.html',
    title: "Chris's Bio"
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
    // $location.hash(place);
    // $anchorScroll();
    var section3 = angular.element(document.getElementById(place));
    console.log(section3)
    $document.scrollToElementAnimated(section3)
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
		q:'What is a charter school?',
		a:"Charter schools are publicly funded schools but function somewhat differently from traditional public schools. They operate independently under a performance agreement with a chartering authority (in Spark's case, the Santa Clara County Office of Education).  Because charter schools do not have to comply with certain sections of the state Education Code, they are less regulated and have more independence in making decisions than traditional public schools. Instead, they are governed primarily by their charters, which are generally granted for five years and renewed based on the school's performance.  Charter schools allow parents, organizations, or community groups to restore, reinvent, and re-energize our public school system."
	},
		{
		num:2,
		q:"How are charter schools funded?",
		a:"Charter schools are publicly funded based on student enrollment by local, state and federal tax dollars, just like other public schools."
	},
		{
		num:3,
		q:"Is Spark a For-Profit or Corporate Charter School?",
		a:"No, Spark Charter is a non-profit charter school which was formed by a group of Sunnyvale parents, with the assistance of a group of education experts, who wanted to see this type of educational option available in Sunnyvale as it is in so many other surrounding cities (San Jose, San Carlos, Cupertino, Mountain View, Santa Clara, etc.)"
	},
		{
		num:4,
		q:"Who is eligible to apply? ",
		a:"Any student wishing to attend a Charter school can apply.  Charter schools must typically give admission priority to students residing within their district, and then may admit students from outside the district if there is space."
	},
		{
		num:5,
		q:"How is a charter school different from the schools of choice in the district?",
		a:"Charter schools are exempt from some of the regulations that apply to other public schools. They have more flexibility in creating curriculum, and can also offer novel educational approaches. Charter schools must meet the same standards of quality that apply to all public schools."
	},{
		num:6,
		q:"Do charter schools select only the high performing students or benefit from self-selection?",
		a:"No.  Charter schools are public schools and cannot discriminate or self-select their students.  Spark Charter in particular places very high value on racial, ethnic, socio-economic, and cultural diversity, and is committed to reaching out to all populations within its community."
	},{
		num:7,
		q:"Does Spark have before and after-school care?",
		a:"Yes, Spark offers before-school care from 7:30-8:30 am, and after-school care from 3-6 pm.  "
	},{
		num:8,
		q:"How will Spark measure student achievement?",
		a:"Students will be assessed at regular intervals according to the common core standards, as charter schools are held to the same standards as traditional public schools. Although it is not Spark's philosophy to teach to the test, student performance is very important and will be tracked diligently using formal and informal assessments. As a part of the informal assessments, Spark will use individual learning plans for each of its students, where personalized goals are set up at the beginning of a trimester and revisited throughout the year."
	}
	,{
		num:9,
		q:"Will I be required to volunteer at school?",
		a:"By law, no public school (district or charter) can require parent participation.  Parent participation at Spark is not a requirement for application, and no child will be denied enrollment because parents have not participated.  Spark encourages parent participation from every family in whatever way is manageable for them. Having regular volunteers in the classroom and in the Spark community is the only way Spark can deliver on its promise of small-group, project-based instruction.  Please visit our Parents as Partners page for more details. "
	}
	,{
		num:10,
		q:"But I'm not a teacher; how can I possibly be helpful?",
		a:"Many parents have a fear of participating in their child's classroom because they're not sure they have anything valuable to offer.  We are here to prove you wrong!!  Every parent can and will make a difference in our children's education by participating   There are infinite ways to get involved that will help enrich the learning experience of all Spark students. It could be teaching students how to cook traditional dishes from your native culture (here we have chemistry, math, geography, history, and life skills all wrapped up into one fun activity!)   Or it might be helping to organize a community gardening event on the weekend. Can you help with foreign language instruction or tutor an EL student?  Are you good at carpentry? Sports? Music?  Everyone has a talent, and students can benefit immensely from exposure to a wide range of skills and knowledge.  Research shows that the more parents are involved at school, the greater their child's achievement level. Having volunteers in our classrooms will help our teachers deliver the hands-on, small group instruction that is fundamental to Spark. "
	}];

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

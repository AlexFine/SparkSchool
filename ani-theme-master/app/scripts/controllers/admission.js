'use strict';

/**
 * @ngdoc function
 * @name yapp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of yapp
 */
angular.module('yapp')
  .controller('AdmissionCtrl', function($scope, $location,  $uibModal, $log, $sce, anchorSmoothScroll, $anchorScroll,$document, $window) {
		$scope.collapse = true;
	
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

	
	

    $scope.scroll = function(place){
      $location.hash(place);
      $anchorScroll();
      // var section3 = angular.element(document.getElementById(place));
      // console.log(section3)
      // $document.scrollToElementAnimated(section3)
      // anchorSmoothScroll.scrollTo(place);
    }
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
    $scope.load()

  });

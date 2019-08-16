'use strict';

angular.module('myApp.phaseC1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseC1', {
    templateUrl: 'phaseC1/phaseC1.html',
    controller: 'PhaseC1Ctrl'
  });
}])

.controller('PhaseC1Ctrl', ['$scope', function($scope) {

  $scope.imgName = "implementationPhaseB1.png";

  $scope.progressValue = "60%";
  document.getElementById('progressBarid').style.width = $scope.progressValue;

  $scope.userOptionMap = "";

  $scope.dataInteropReqMapC1 = [];
  $scope.constraintsMapC1 = [];
  $scope.applicationMap = [];
  $scope.abbMap = [];

  $scope.umlClassMap = [];
  $scope.attributeMaps = [];
  $scope.entityMaps = [];
  
  
  
  $scope.useCaseMaps = [
    {"id":"1", "actorId":"1","description":" Industrialize products from common customer projects "},
    {"id":"2", "actorId":"1","description":" Industrialize products from common customer projects "}
  ];


  $scope.userMapB = [
    {"id": 0, "name": "Alice", "priority": 2, "role": "production_operator", "category": "production_operator"},
    {"id": 1, "name": "Abdelhadi", "priority": 2, "role": "production_operator", "category": "production_operator"},
    {"id": 2, "name": "Bob", "priority": 2, "role": "production_operator", "category": "production_operator"},
  ];

  
  $scope.businessEntityFileUpload = function(){

    
    $scope.useCaseMaps = [
      {"id":"1", "actorId":"1","description":" Industrialize products from common customer projects "},
      {"id":"2", "actorId":"1","description":" Industrialize products from common customer projects "}
    ];

    $scope.userMapB = [
      {"id": 0, "name": "Alice", "priority": 2, "role": "production_operator", "category": "production_operator"},
      {"id": 1, "name": "Abdelhadi", "priority": 2, "role": "production_operator", "category": "production_operator"},
      {"id": 2, "name": "Bob", "priority": 2, "role": "production_operator", "category": "production_operator"},
    ];
  

  }

    
  $scope.selectUseCaseEntity = function(){

    $scope.entityMaps =  [
      {"id":"1", "name" : "CAD_Object", "description":" Enable a collaboration channel with an SME in a complementary business domain "},
      {"id":"2", "name" : "Product", "description":" Enable a collaboration channel with an SME in a complementary business domain "}
    ];
  
    }

    $scope.selectUMLClass = function(umlClass){

      $scope.attributeMaps = [
        {"name":"attribute1", "type" : "int"},
        {"name":"attribute2", "type" : "int"}
      ];
    }
  

  $scope.addDataInteropReqC1 = function(){

    var newDataInteropReq = new function() {
      this.id = $scope.dataInteropReqMapC1.length == undefined ? 0 : $scope.dataInteropReqMapC1.length+1;
      this.description    = $scope.descriptionDataInteropReqC1;
      this.rationale    = $scope.rationaleDataInteropReqC1;
      this.fitCriterion    = $scope.criterionDataInteropReqC1;
      this.originator    = $scope.originatorDataInteropReqC1;
    }
    $scope.dataInteropReqMapC1.push(newDataInteropReq);

    $scope.descriptionDataInteropReqC1 = "";
    $scope.rationaleDataInteropReqC1 = "";
    $scope.criterionDataInteropReqC1 = "";
    $scope.originatorDataInteropReqC1 = "";

  }
  $scope.clearDataInteropReqC1 = function(){
    $scope.dataInteropReqMapC1 = [];
  }
  
  $scope.addConstraintC1 = function(){

    var newConstraint = new function() {
      this.id = $scope.constraintsMapC1.length == undefined ? 0 : $scope.constraintsMapC1.length+1;
      this.type    = $scope.constraintTypeC1;
      this.description    = $scope.constraintDescriptionC1;
      this.rationale    = $scope.constraintRationaleC1;
      this.fitCriterion    = $scope.constraintFitCriterionC1;
      this.originator    = $scope.constraintOriginatorC1;
    }
    $scope.constraintsMapC1.push(newConstraint);

    $scope.constraintDescriptionC1 = "";
    $scope.constraintRationaleC1 = "";
    $scope.constraintFitCriterionC1 = "";
    $scope.constraintOriginatorC1 = "";

  }

  $scope.clearConstraintC1 = function(){

    $scope.constraintsMapC1 = [];
  }

  $scope.fetchABB = function(){

    $scope.abbMap = [
      { "id":1, "name":"3DScan_Get3DObject_ABB", "stakeholders":[ { "id":1, "name":"Quality Engineer", "groupe":"Quality", "class":"Keep_Satisfied", "power":1 } ], "businessVisionStatement":"3D scanning technology can be useful in prototyping and design, reverse engineering, in-line manufacturing inspection and/or quality control.", "businessProblemDescription":"Perform dimensional controls to determine if the analyzed manufactured part must be accepted or rejected without slowing the production rhythm", "implementationSpecification":{ "name": "IS1_3DScan_get3DObject", "description": "The get3DObject service return 3D Object that is compliant with Three.js library", "rational": "To have the possibility to display the Object in a Web page" }, "implementationStandard":{ "name": "IST1_3DScan_get3DObject", "description": "The 3D Object returned by get3DObject service must be compliant with the ISO 10303 STEP-file Standard", "rational": "To have the possibility to share 3D models between users with different CAD systems" }, "applicationInteroperabilityRequirement":{ "name": "IR1_3DScan_get3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with different visualization systems" }, "businessEvent":"The visualizer developed in FitmanGL_DisplayTesting.html Sends an http get request with the appropriate URI of this ABB to trigger the service.", "dataInteroperabilityRequirement": { "name": "DIR1_3DScan_get3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with the visualization component developed in FitmanGL_DisplayTesting.html Web page" }, "Parameters":{ "functionName":"Display one existing 3D file stored in database", "inputParameters": { "imageObjectId": "int" }, "outputParameters":{ "object": "File" } }, "infrastructureConstraint": { "name": "IC1_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, "Capability":{ "businessUseCase": "Compare geometries of 3D CAD design", "businessFunction": "Retrieve the point cloud of the analyzed part", "businessActor": { "name": "Manufacturing Quality Engineers", "role": "quality_engineer" } } }, 
      { "id":2, "name":"3DScan_update3DObject_ABB", "stakeholders":[ { "id":1, "name":"Quality Engineer", "groupe":"Quality", "class":"Keep_Satisfied", "power":1 } ], "businessVisionStatement":"3D scanning technology can be useful in prototyping and design, reverse engineering, in-line manufacturing inspection and/or quality control.", "businessProblemDescription":"Perform dimensional controls to determine if the analyzed manufactured part must be accepted or rejected without slowing the production rhythm", "implementationSpecification":{ "name": "IS1_3DScan_update3DObject", "description": "The get3DObject service return 3D Object that is compliant with Three.js library", "rational": "To have the possibility to display the Object in a Web page" }, "implementationStandard":{ "name": "IST1_3DScan_update3DObject", "description": "The 3D Object returned by get3DObject service must be compliant with the ISO 10303 STEP-file Standard", "rational": "To have the possibility to share 3D models between users with different CAD systems" }, "applicationInteroperabilityRequirement":{ "name": "IR1_3DScan_update3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with different visualization systems" }, "businessEvent":"The visualizer developed in FitmanGL_DisplayTesting.html Sends an http get request with the appropriate URI of this ABB to trigger the service.", "dataInteroperabilityRequirement": { "name": "DIR1_3DScan_update3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with the visualization component developed in FitmanGL_DisplayTesting.html Web page" }, "Parameters":{ "functionName":"Display one existing 3D file stored in database", "inputParameters": { "imageObjectId": "int" }, "outputParameters":{ "object": "File" } }, "infrastructureConstraint": { "name": "IC1_3DScan_update3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, "Capability":{ "businessUseCase": "Compare geometries of 3D CAD design", "businessFunction": "Retrieve the point cloud of the analyzed part", "businessActor": { "name": "Manufacturing Quality Engineers", "role": "quality_engineer" } } }
    ];
   
  }


  $scope.selectApplication = function(application){

    $scope.applicationNameC1 = application.applicationName;
    $scope.applicationDataFormatC1 = application.dataformatDescription;
  }

  
  $scope.selectABB = function(abb){

    $scope.applicationMap = [];
    $scope.applicationNameC1 = "";
    $scope.applicationDataFormatC1 = "";

    var applicationC1 = new function() {
      this.applicationName = "3DScan";
      this.owner    = "fiware4industry";
      this.description    = "3DScan offers the possibility to store and visualize precise scanned images obtained from real objects.";
      this.url    = "https://github.com/datapixel/3DScan";
      this.certification    = false;
      this.support    = false;
      this.dataformatDescription = "XML as serialization data format";
    }
    $scope.applicationMap.push(applicationC1);

  }

  $scope.umlClassDiagramUpload = function(){

    $scope.umlClassMap = [
      {"name": "Class1", "attributes": [ 
        {"attribute1": "type1"}, 
        {"attribute2": "type2"}, 
        {"attribute3": "type3"}
      ]},
      {"name": "Class2", "attributes": [ 
        {"attribute1": "type1"}, 
        {"attribute2": "type2"}, 
        {"attribute3": "type3"}
      ]}
    
    ];

  }

  


}]);
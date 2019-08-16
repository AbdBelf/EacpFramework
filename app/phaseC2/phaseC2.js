'use strict';

angular.module('myApp.phaseC2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseC2', {
    templateUrl: 'phaseC2/phaseC2.html',
    controller: 'PhaseC2Ctrl'
  });
}])

.controller('PhaseC2Ctrl', ['$scope', function($scope) {

  $scope.imgName = "implementationPhaseB1.png";

  $scope.progressValue = "70%";
  document.getElementById('progressBarid').style.width = $scope.progressValue;

  $scope.userOptionMap = "";

  $scope.volereTemplatesEakrB = [];
  
  
  $scope.technicalRequirementMapC2 = [];
  $scope.appInteropRequirementMapC2 = [];

  $scope.constraintsMapC2 = [];
  
  $scope.sbbMap = [];
  $scope.abbMapC2 = [];
  $scope.applicationMap = [];
  

  
  $scope.addTechnicalRequirementC2 = function(){

    var newtechnicalRequirement = new function() {
      this.id = $scope.technicalRequirementMapC2.length == undefined ? 0 : $scope.technicalRequirementMapC2.length+1;
      this.description    = $scope.requirementDescriptionC2;
      this.rationale    = $scope.requirementRationaleC2;
      this.fitCriterion    = $scope.requirementFitCriterionC2;
      this.originator    = $scope.requirementOriginatorC2;
    }
    $scope.technicalRequirementMapC2.push(newtechnicalRequirement);

    $scope.requirementDescriptionC2 = "";
    $scope.requirementRationaleC2 = "";
    $scope.requirementFitCriterionC2 = "";
    $scope.requirementOriginatorC2 = "";

  }

  
  $scope.clearTechnicalRequirementC2 = function(){
    $scope.technicalRequirementMapC2 = [];
  }

    
  $scope.addAppInteropRequirementC2 = function(){

    var newAppInteropRequirementC2 = new function() {
      this.id = $scope.appInteropRequirementMapC2.length == undefined ? 0 : $scope.appInteropRequirementMapC2.length+1;
      this.description    = $scope.appInteropRequirementDescriptionC2;
      this.rationale    = $scope.appInteropRequirementRationaleC2;
      this.fitCriterion    = $scope.appInteropRequirementFitCriterionC2;
      this.originator    = $scope.appInteropRequirementOriginatorC2;
    }
    $scope.appInteropRequirementMapC2.push(newAppInteropRequirementC2);

    $scope.appInteropRequirementDescriptionC2 = "";
    $scope.appInteropRequirementRationaleC2 = "";
    $scope.appInteropRequirementFitCriterionC2 = "";
    $scope.appInteropRequirementOriginatorC2 = "";

  }

  
  $scope.clearAppInteropRequirementC2 = function(){
    $scope.appInteropRequirementMapC2 = [];
  }



  $scope.userMapB = [
    {"id": 0, "name": "Alice", "priority": 2, "role": "production_operator", "category": "production_operator"},
    {"id": 1, "name": "Abdelhadi", "priority": 2, "role": "production_operator", "category": "production_operator"},
    {"id": 2, "name": "Bob", "priority": 2, "role": "production_operator", "category": "production_operator"},
  ];



  $scope.addConstraintC2 = function(){

    var newConstraint = new function() {
      this.id = $scope.constraintsMapC2.length == undefined ? 0 : $scope.constraintsMapC2.length+1;
      this.type    = $scope.constraintTypeC2;
      this.description    = $scope.constraintDescriptionC2;
      this.rationale    = $scope.constraintRationaleC2;
      this.fitCriterion    = $scope.constraintFitCriterionC2;
      this.originator    = $scope.constraintOriginatorC2;
    }
    $scope.constraintsMapC2.push(newConstraint);

    $scope.constraintDescriptionC2 = "";
    $scope.constraintRationaleC2 = "";
    $scope.constraintFitCriterionC2 = "";
    $scope.constraintOriginatorC2 = "";
  }

  $scope.clearConstraintC2 = function(){

    $scope.constraintsMapC2 = [];
  }

  $scope.fetchABBs = function(){

    $scope.imgName = "implementationPhaseB2.png";
    $scope.progressValue = "80%";
    document.getElementById('progressBarid').style.width = $scope.progressValue;
    
   
    $scope.abbMapC2 = [
      { "id":1, "name":"3DScan_Get3DObject_ABB", "stakeholders":[ { "id":1, "name":"Quality Engineer", "groupe":"Quality", "class":"Keep_Satisfied", "power":1 } ], "businessVisionStatement":"3D scanning technology can be useful in prototyping and design, reverse engineering, in-line manufacturing inspection and/or quality control.", "businessProblemDescription":"Perform dimensional controls to determine if the analyzed manufactured part must be accepted or rejected without slowing the production rhythm", "implementationSpecification":{ "name": "IS1_3DScan_get3DObject", "description": "The get3DObject service return 3D Object that is compliant with Three.js library", "rational": "To have the possibility to display the Object in a Web page" }, "implementationStandard":{ "name": "IST1_3DScan_get3DObject", "description": "The 3D Object returned by get3DObject service must be compliant with the ISO 10303 STEP-file Standard", "rational": "To have the possibility to share 3D models between users with different CAD systems" }, "applicationInteroperabilityRequirement":{ "name": "IR1_3DScan_get3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with different visualization systems" }, "businessEvent":"The visualizer developed in FitmanGL_DisplayTesting.html Sends an http get request with the appropriate URI of this ABB to trigger the service.", "dataInteroperabilityRequirement": { "name": "DIR1_3DScan_get3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with the visualization component developed in FitmanGL_DisplayTesting.html Web page" }, "Parameters":{ "functionName":"Display one existing 3D file stored in database", "inputParameters": { "imageObjectId": "int" }, "outputParameters":{ "object": "File" } }, "infrastructureConstraint": { "name": "IC1_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, "Capability":{ "businessUseCase": "Compare geometries of 3D CAD design", "businessFunction": "Retrieve the point cloud of the analyzed part", "businessActor": { "name": "Manufacturing Quality Engineers", "role": "quality_engineer" } } }, 
      { "id":2, "name":"3DScan_update3DObject_ABB", "stakeholders":[ { "id":1, "name":"Quality Engineer", "groupe":"Quality", "class":"Keep_Satisfied", "power":1 } ], "businessVisionStatement":"3D scanning technology can be useful in prototyping and design, reverse engineering, in-line manufacturing inspection and/or quality control.", "businessProblemDescription":"Perform dimensional controls to determine if the analyzed manufactured part must be accepted or rejected without slowing the production rhythm", "implementationSpecification":{ "name": "IS1_3DScan_update3DObject", "description": "The get3DObject service return 3D Object that is compliant with Three.js library", "rational": "To have the possibility to display the Object in a Web page" }, "implementationStandard":{ "name": "IST1_3DScan_update3DObject", "description": "The 3D Object returned by get3DObject service must be compliant with the ISO 10303 STEP-file Standard", "rational": "To have the possibility to share 3D models between users with different CAD systems" }, "applicationInteroperabilityRequirement":{ "name": "IR1_3DScan_update3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with different visualization systems" }, "businessEvent":"The visualizer developed in FitmanGL_DisplayTesting.html Sends an http get request with the appropriate URI of this ABB to trigger the service.", "dataInteroperabilityRequirement": { "name": "DIR1_3DScan_update3DObject", "description": "get3DObject service accept XML as serialization data format", "rational": "To have the possibility to interoperate with the visualization component developed in FitmanGL_DisplayTesting.html Web page" }, "Parameters":{ "functionName":"Display one existing 3D file stored in database", "inputParameters": { "imageObjectId": "int" }, "outputParameters":{ "object": "File" } }, "infrastructureConstraint": { "name": "IC1_3DScan_update3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, "Capability":{ "businessUseCase": "Compare geometries of 3D CAD design", "businessFunction": "Retrieve the point cloud of the analyzed part", "businessActor": { "name": "Manufacturing Quality Engineers", "role": "quality_engineer" } } }
    ];

  }

  
  $scope.selectABBC2 = function(abb){
  
    $scope.sbbMap = [   
      { "id":1, "name":"3DScan_Get3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] }
  ];


  }



  $scope.selectSBB = function(sbb){

    $scope.applicationMap = [];

    var applicationC2 = new function() {
      this.applicationName = "3DScan";
      this.owner    = "fiware4industry";
      this.description    = "3DScan offers the possibility to store and visualize precise scanned images obtained from real objects.";
      this.url    = "https://github.com/datapixel/3DScan";
      this.certification    = false;
      this.support    = false;
      this.dataformatDescription = "XML as serialization data format";
    }
    $scope.applicationMap.push(applicationC2);

  }


 
  $scope.selectApplication = function(application){

    $scope.applicationNameC2 = application.applicationName;
    $scope.applicationOwnerC2 = application.owner;
  }


}]);
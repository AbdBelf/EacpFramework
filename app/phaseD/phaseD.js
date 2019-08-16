'use strict';

angular.module('myApp.phaseD', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseD', {
    templateUrl: 'phaseD/phaseD.html',
    controller: 'PhaseDCtrl'
  });
}])

.controller('PhaseDCtrl', ['$scope', function($scope) {

  $scope.imgName = "implementationPhaseB1.png";

  $scope.progressValue = "50%";
  document.getElementById('progressBarid').style.width = $scope.progressValue;

  $scope.nfrRequirementMap = [];
  $scope.fRequirementMapD = [];
  $scope.applicationMap = [];

  $scope.nfrItem = "";


  
  $scope.nfrMapD = [
  {
    "category" : "Performance",
    "name": "Web Application Capacity Metric",
    "description" : "measurable characteristics of Web application capacity"
  },
  {
    "category" : "Performance",
    "name": "Instance Starting Time Metric",
    "description" : "Maximum and average time required to initialize a new instance"
  },
  {
    "category" : "Performance",
    "name": "Response Time Metric",
    "description" : "Measure how long it took for a service to process a request "
  },
  {
    "category" : "Availability",
    "name": "Availability Rate Metric",
    "description" : "percentage of service up-time"
  },
  {
    "category" : "Reliability",
    "name": "Reliability Rate Metric",
    "description" : "percentage of successful service outcomes"
  },
  {
    "category" : "Scalability",
    "name": "Storage Scalability (Horizontal) Metric",
    "description" : "percentage of successful service outcomes"
  }
  
  ];


  $scope.selectNFRType = function(){
    $scope.nfrDescriptionD = $scope.nfrItem.description;
  }


  $scope.addNfrD = function(nfr){

    var newRequirement = new function() {
      this.id = $scope.nfrRequirementMap.length == undefined ? 0 : $scope.nfrRequirementMap.length+1;
      this.type    = $scope.nfrItem.category;
      this.name    = $scope.nfrItem.name;
      this.value = $scope.nfrValueD;
      this.description    = $scope.nfrDescriptionD;
      this.rationale    = $scope.nfrRationaleD;
      this.fitCriterion    = "";
      this.originator    = $scope.nfrOriginatorD;
    }

    $scope.nfrRequirementMap.push(newRequirement);

    $scope.nfrValueD = "";
    $scope.nfrDescriptionD = "";
    $scope.nfrRationaleD = "";
    $scope.nfrOriginatorD = "";

  }

  

  $scope.fetchSBB = function(){

    $scope.fRequirementMapD = [  
      {  
         "id":1,
         "useCase":"Use Case 1",
         "description":"description",
         "rationale":"ratioale",
         "fitCriterion":"fitCriterion",
         "originator":"originator",
         "type":"1"
      },
      {  
         "id":2,
         "useCase":"Use Case 2",
         "description":"description",
         "rationale":"ratioale",
         "fitCriterion":"fitCriterion",
         "originator":"originator",
         "type":"2"
      },
      {  
         "id":3,
         "useCase":"Use Case 3",
         "description":"description",
         "rationale":"ratioale",
         "fitCriterion":"fitCriterion",
         "originator":"originator",
         "type":"1"
      }
   ];

   $scope.selectfRequirementD = function(fRequirement){

    switch (fRequirement.id) {
      case 1:
        $scope.sbbMap = [   
          { "id":1, "name":"3DScan_Get3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] }
          ];
        break;
      case 2:
        $scope.sbbMap = [   
          { "id":1, "name":"3DScan_Get3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] },
          { "id":2, "name":"3DScan_update3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] }
          ];
        break;
      case 3:
        $scope.sbbMap = [   
          { "id":1, "name":"3DScan_Get3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] },
          { "id":2, "name":"3DScan_update3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] },
          { "id":3, "name":"3DScan_delete3DObject_SBB", "uri":"FitmanGL/rest/get_id_canvas/{imageObjectId}", "input_parameters":[ { "name": "imageObjectId", "type": "int" } ], "output_parameters":[ { "name": "object", "type": "file" } ], "platforms": [ { "platform_name": "Tomcat", "owner": { "name": "Apache Software Foundation", "street": "", "city": "", "zip": "", "state": "", "country": "", "comment": "License Under the Apache License, Version 2.0" }, "certification":"No", "support": "Yes", "security_properties":"N/A", "network_properties": "N/A", "storage_properties": "N/A", "memory_properties":"N/A", "cpu_properties":"N/A" } ] , "environment": [ { "name" : "jersey-json", "version": "1.9.1" }, { "name" : "jackson-jaxrs", "version": "1.8.3" }, { "name" : "mysql-connector-java", "version": "5.1.30" } ], "technicalRequirement": { "name": "TR1_3DScan_get3DObject", "description": "The get3DObject is exposed over a REST endpoint. The return data is a JavaScript code which could be integrated in any web page to display the 3D file. ", "rational": "To have the possibility to display the Object in the visualizer taking as input the 3D Object File based on JavaScript" }, "technologyConstraints": [ { "name": "TC_3DScan_get3DObject ", "description": "The 3Dscan ME must run in a servlet container such as Tomcat, and should not depend on a particular operating system ", "rational": "To have the possibility to deploy this ME in any java-based technology stack" }, { "name": "TC2_3DScan_get3DObject ", "description": " The 3D File with stl extension must be serialized using text/JavaScript serialization and based on three.js library", "rational": "To have the possibility to display the 3D File in any web page using <script> tag" } ], "exceptions": [ { "name": "Exception2_3DScan_get3DObject ", "type": "IOException" }, { "name": "Exception1_3DScan_get3DObject ", "type": "MalformedURLException" } ], "Performance": [ { "name": "Web Application Capacity Metric", "description": "measurable characteristics of Web application capacity", "unit": "requests per minute", "value": "10,000 " }, { "name": " Average Instance Starting Time Metric ", "description": " average time required to initialize a new instance ", "unit": "minutes", "value": "1 " }, { "name": " Maximum Instance Starting Time Metric ", "description": " Maximum time required to initialize a new instance ", "unit": "minutes", "value": "2 " }, { "name": " Response Time Metric ", "description": " Measure how long it took for a service to process a request ", "unit": "Average time in ms", "value": "14.7 " } ], "Availability": [ { "name": " Availability Rate Metric ", "description": " percentage of service up-time", "unit": "%", "value": "100" } ], "Reliability": [{ "name": " Availability Rate Metric ", "description": " percentage of successful service outcomes ", "unit": "%", "value": "100" }] }
          ];
        break;
      default:
        break;
    }

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

    $scope.applicationNameD = application.applicationName;
    $scope.applicationOwnerD = application.owner;
  }




  }

}]);
'use strict';

angular.module('myApp.phaseB', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseB', {
    templateUrl: 'phaseB/phaseB.html',
    controller: 'PhaseBCtrl'
  });
}])

.controller('PhaseBCtrl', ['$scope', function($scope) {

  $scope.imgName = "implementationPhaseB1.png";

  $scope.progressValue = "40%";
  document.getElementById('progressBarid').style.width = $scope.progressValue;

  $scope.userOptionMap = "";

  $scope.volereTemplatesEakrB = [];
  
  

  $scope.templateB = new function() {
    this.currentSituation = "";
    this.eventMap = [];
    this.functionalRMaps = [];
    this.constraintMap = [];
  }

  $scope.userMapB = "";

  $scope.userOptionMap = "";
  $scope.actorsMapB = [];


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


  $scope.addActorCatalog = function(){

    for (var i = 0; i < $scope.userOptionMap.length; i++) {
      $scope.actorsMapB.push($scope.userMapB[$scope.userOptionMap[i]]);
    }
  }
  $scope.clearActorCatalog = function(){
    $scope.actorsMapB = [];
  }

  $scope.constraintTypeB1 = "";
  $scope.constraintsMapB1 = [];

  $scope.addConstraintB1 = function(){

    var newConstraint = new function() {
      this.id = $scope.constraintsMapB1.length == undefined ? 0 : $scope.constraintsMapB1.length+1;
      this.type    = $scope.constraintTypeB1;
      this.description    = $scope.constraintDescriptionB1;
      this.rationale    = $scope.constraintRationaleB1;
      this.fitCriterion    = $scope.constraintFitCriterionB1;
      this.originator    = $scope.constraintOriginatorB1;
    }
    $scope.constraintsMapB1.push(newConstraint);
  }

  $scope.clearConstraintB1 = function(){

    $scope.constraintsMapB1 = [];
  }

  $scope.fetchTemplateBEAKR = function(){

    $scope.imgName = "implementationPhaseB2.png";
    $scope.progressValue = "50%";
    document.getElementById('progressBarid').style.width = $scope.progressValue;
    $scope.volereTemplatesEakrB = {"volereTemplate":[{"id":0,"currentSituation":" Situation description ...","eventMap":[{"id":1,"name":"event name content","description":"objective description"},{"id":2,"name":"event name content 2","description":"event description 2"}],"functionalRMaps":[{"id":1,"useCase":"first use case ","description":" description Functional requirement","rationale":"Keep_Satisfied","fitCriterion":" fit criterion","originator":"originator name","type":"service"},{"id":2,"useCase":"Second use case","description":" description Functional requirement","rationale":"Keep_Satisfied","fitCriterion":" fit criterion","originator":"originator name","type":"service"}],"constraintMap":[{"id":1,"description":" description Functional requirement","rationale":"Keep_Satisfied","fitCriterion":" fit criterion","originator":"originator name","type":"solution"},{"id":2,"description":" description Functional requirement","rationale":"Keep_Satisfied","fitCriterion":" fit criterion","originator":"originator name","type":"Interoperability Constraint"}]}]};
   
  }

  $scope.selectVolereTemplateBEAKR = function(volereTemplate){
    $scope.templateB = $scope.volereTemplatesEakrB.volereTemplate[volereTemplate.id];
  }

  $scope.addEvent = function(){

    var newEvent = new function() {
      this.id = $scope.templateB.eventMap.length+1;
      this.name    = $scope.eventNameB;
      this.description    = $scope.eventDescriptionB;
    }

    $scope.templateB.eventMap.push(newEvent);
    $scope.eventNameB = "";
    $scope.eventDescriptionB = "";
  }

  $scope.clearEvent = function(){
    $scope.templateB.eventMap = [];
  }

  $scope.addFunctionalRequirementB = function(){

    
    var newFR = new function() {
      this.id = $scope.templateB.functionalRMaps.length+1;
      this.useCase = $scope.FRUseCaseB;
      this.description    = $scope.FRDescriptionB;
      this.rationale    = $scope.FRRationaleB;
      this.fitCriterion    = $scope.FRFitCriterionB;
      this.originator    = $scope.FROriginatorB;
      this.type    = $scope.FRComponentTypeB;
    }

    $scope.templateB.functionalRMaps.push(newFR);

    $scope.FRUseCaseB = "";
    $scope.FRDescriptionB = "";
    $scope.FRRationaleB = "";
    $scope.FRFitCriterionB = "";
    $scope.FROriginatorB = "";
    $scope.FRComponentTypeB = "";
  
  }

  $scope.clearFunctionalRequirementB = function(){
    $scope.templateB.functionalRMaps = [];
  }

  $scope.addConstraintB2 = function(){

    var newConstraint = new function() {
      this.id = $scope.templateB.constraintMap.length+1;
      this.type    = $scope.constraintTypeB2;
      this.description    = $scope.constraintDescriptionB2;
      this.rationale    = $scope.constraintRationaleB2;
      this.fitCriterion    = $scope.constraintFitCriterionB2;
      this.originator    = $scope.constraintOriginatorB2;
    }
    $scope.templateB.constraintMap.push(newConstraint);

  
    $scope.constraintTypeB2 = "";
    $scope.constraintDescriptionB2 = "";
    $scope.constraintRationaleB2 = "";
    $scope.constraintFitCriterionB2 = "";
    $scope.constraintOriginatorB2 = "";

  }


  $scope.clearConstraintB2 = function(){
    $scope.templateB.constraintMap = [];
  }

  $scope.selectVolereTemplateConstraint = function(constraint){
    
    $scope.constraintDescriptionB2 = constraint.description;
    $scope.constraintRationaleB2 = constraint.rationale;
    $scope.constraintFitCriterionB2 = constraint.fitCriterion;
    $scope.constraintOriginatorB2 = constraint.originator;
    $scope.constraintTypeB2 = constraint.type;

  }
}]);
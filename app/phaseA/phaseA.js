'use strict';

angular.module('myApp.phaseA', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/phaseA', {
    templateUrl: 'phaseA/phaseA.html',
    controller: 'PhaseACtrl'
  });
}])

.controller('PhaseACtrl', ['$scope',function($scope) {
  
  $scope.imgName = "implementationPhaseA1.png";
  $scope.progressValue = "10%";

  $scope.goals =  "";
  
  $scope.objectives = "";

  $scope.stakeholders = {"stakeholders":[
    {"id": 0, "name":"Bob","groupe":"CEO","class":"Keep_Satisfied","power":"1"},
    {"id": 1, "name":"Mike","groupe":"CEO","class":"Keep_Satisfied","power":"1"},
    {"id": 2, "name":"Alice","groupe":"Production_Operator","class":"Key_Player","power":"2"},
    {"id": 3, "name":"Rob","groupe":"Production_Operator","class":"Key_Player","power":"2"}
  ]};

  $scope.volereTemplatesEAKR = "";
  
  $scope.volereTemplates = {"volereTemplate":[{"id":0,"projectDriver":"Project Driver EAKR 1","userBusiness":"user business content","projectGoal":"business goal content","objectives":[{"id":1,"description":"objective description","source":"stakeholder source"},{"id":2,"description":"objective description 2","source":"stakeholder source 2"}],"client":"client","customer":"costumer","":{},"stakeholders":[{"id":1,"name":"Bob","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":2,"name":"Alice","groupe":"production_operator","class":"Key_player","power":2},{"id":3,"name":"Bob 2","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":4,"name":"Alice","groupe":"production_operator","class":"Key_player","power":2}],"users":[{"id":0,"name":"Alice","category":"production_operator","role":"production_operator","priority":2}]}]};

  $scope.stakeholderName = "";
  $scope.stakeholderClass = "";
  $scope.stakeholderPower = "";
  $scope.stakeholderGroupe = "";


  $scope.motivationExtensionUpload = function(){

    
    $scope.objectives = {"objectives":[
      {"id":"1", "goal":"1","description":" Industrialize products from common customer projects ","source":"COO"},
      {"id":"2", "goal":"1","description":" Industrialize products from common customer projects ","source":"COO"}
    ]};

  }

  
  $scope.selectBusinessObjective = function(bobjective){

    $scope.goals =  {"goals":[
      {"id":"1","description":" Enable a collaboration channel with an SME in a complementary business domain ","source":"CEO"},
    ]};
  
    }

    
  $scope.addStakeholder = function() {
    
    var newstakeholder = new function() {
      this.id = $scope.stakeholders.stakeholders.length+1;
      this.name    = $scope.stakeholderName;
      this.groupe  = $scope.stakeholderGroupe;
      this.class   = $scope.stakeholderClass;
      this.power   = $scope.stakeholderPower;
    }

    $scope.stakeholders.stakeholders.push(newstakeholder);
    
  };

  $scope.addUserTemplate = function() {
    
    var newUser = new function() {
      this.id = $scope.templateA.users.length+1;
      this.name    = $scope.templateUserName;
      this.category    = $scope.templateUserCategory;
      this.role  = $scope.templateUserRole;
      this.priority   = $scope.templateUserPriority;
    }

    $scope.templateA.users.push(newUser);
    $scope.templateUserName = '';
    $scope.templateUserCategory = '';
    $scope.templateUserRole = '';
    $scope.templateUserPriority = '';
    
    
  };
  

  $scope.fetchTemplateAEAKR = function(){

    $scope.progressValue = "20%";
    document.getElementById('progressBarid').style.width = $scope.progressValue;
    $scope.imgName = "implementationPhaseA2.png";
    $scope.volereTemplatesEAKR = {"volereTemplate":[{"id":0,"projectDriver":"Project Driver EAKR 1","userBusiness":"The company proposes an advanced technical solutions to transform and compose plastics for several application domains","projectGoal":"Improve the responsiveness regarding the commercial proposals","objectives":[{"id":1,"description":"Virtualize company's resources","source":"CEO"}],"client":"APR S.A.S","customer":"APR S.A.S","stakeholders":[{"id":1,"name":"Bob","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":2,"name":"Alice","groupe":"production_operator","class":"Key_player","power":2},{"id":3,"name":"Bob 2","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":4,"name":"Alice 2","groupe":"production_operator","class":"Key_player","power":2}],"users":[{"id":0,"name":"Alice","category":"production_operator","role":"production_operator","priority":2}]},{"id":1,"projectDriver":"Project Driver EAKR 2","userBusiness":"user business content 2","projectGoal":"business goal content 2","objectives":[{"id":1,"description":"objective description second time","source":"stakeholder source"},{"id":2,"description":"objective description also","source":"stakeholder source 2"}],"client":"APR","customer":"APR","":{},"stakeholders":[{"id":1,"name":"Bob Template Example","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":2,"name":"Alice","groupe":"production_operator","class":"Key_player","power":2},{"id":3,"name":"Bob Template 2","groupe":"CEO","class":"Keep_Satisfied","power":1},{"id":4,"name":"Alice Template 22","groupe":"production_operator","class":"Key_player","power":2}],"users":[{"id":0,"name":"Alice Template 2","category":"production_operator","role":"production_operator","priority":2}]}]};
   
  }

  $scope.selectVolereTemplateEAKR = function(templateA){
    
    //var volereTemplate = $scope.volereTemplatesEAKR.volereTemplate[$event.target.value];
    
    $scope.templateA = $scope.volereTemplatesEAKR.volereTemplate[templateA.id]


  }


}]);
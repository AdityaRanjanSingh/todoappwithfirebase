angular.module('myApp.notes',['ui.router'])
.config(['$stateProvider',function($stateProvider){
	$stateProvider.state('notes',{
    url:'/notes',
		templateUrl:'notes/notes.html',
		controller:'notesCtrl'
	})
}])
.controller('notesCtrl',['$state','$scope',function($state,$scope){
  function onAuthStateChanged(user) {
    // body...
    if(!user){
        $state.go('login');
    }
  }
firebase.auth().onAuthStateChanged(onAuthStateChanged);
  $scope.notesDelete = false;
  function getData(userId) {
    firebase.database().ref("/notes").once("value").then(function(snapshot) {
      // body...
    })

    // body...

  }
  $scope.saveNewNote = function(){
         var user  = firebase.auth().currentUser;
          var title = $scope.dialogNotesTitle;
          var msg   = $scope.dialogNotesBody;
          var postData = {
                          
                          body: msg,
                          title: title,
                          
                        };
         /* var newPostKey = firebase.database().ref().child('notes').push().key;
          var updates = {};
  updates['/notes/' + newPostKey] = postData;*/
  /*updates['/user-posts/' + uid + '/' + newPostKey] = postData;*/
          
          firebase.database().ref("/notes").push(postData);

  };
$scope.signOuttoggle = function(){
  getData()
       /*if (firebase.auth().currentUser) {
            // [START signout]
            firebase.auth().signOut();
            // [END signout]
        } else {


        }*/
        /*document.getElementById('quickstart-sign-in').disabled = true;*/
  }
}]);
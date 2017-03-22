'use-strict';
angular.module("myApp.login", ['ui.router'])

    .config(['$stateProvider', function($stateProvider) {
        $stateProvider.state('login', {
            url: '/login',
            templateUrl: 'login/login.html',
            controller: 'loginCtrl'
        });
    }])

    .controller('loginCtrl', ['$scope', '$state', function($scope, $state) {
        var _self = this;
        $scope.init = function() {

        };

        this.signInToggle = function() {

            var email = $scope.user.Email;
            var password = $scope.user.Password;
          
            if (!this.signUp) {
                /*$location.path('/');*/
              
                firebase.auth().signInWithEmailAndPassword(email, password).then(function() {
                    $state.go('notes');

                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    _self.error = errorCode + " " + errorMessage;
                   
                    // ...
                });

            } else {
                if (email.length < 4) {
                    alert('Please enter an email address.');
                    return;
                }
                if (password.length < 4) {
                    alert('Please enter a password.');
                    return;
                }
                // Sign in with email and pass.
                // [START authwithemail]
                firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {
                    $state.go('notes');
                }).catch(function(error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    // ...
                });
                // [END authwithemail]
            }
        }

    }]);
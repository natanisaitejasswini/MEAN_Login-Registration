app.controller('dashaboardController',
  ['$scope', 'usersFactory', '$location', '$cookies',
  function ($scope, usersFactory, $location, $cookies){

  var username = $cookies.get('username');
  if (username){
    $scope.username = username;
  } else {
    $location.url('/');
  }

  $scope.goBack = function(){
    $location.url('/');
  }
  $scope.logout = function(){
    $cookies.remove('username');
    $cookies.remove('userId');
    $location.url('/');
  }
}])
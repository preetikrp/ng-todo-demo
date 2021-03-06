"use strict";

app.controller('NavCtrl', function ($scope, AuthFactory, $window, SearchTermData) {
  
  // Log Button Function

  $scope.isLoggedIn = false;
  $scope.searchText = SearchTermData;

  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      $scope.isLoggedIn = true;
      console.log("currentUser logged in", user, $scope.isLoggedIn);
      $scope.$apply();
    } else {
      $scope.isLoggedIn = false;
      console.log("currentUser logged in", $scope.isLoggedIn);
      $window.location.href = "#!/login";
    }
  });
  
});
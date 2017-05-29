angular.module('LunchCheck',[])
.controller('LunchCheckController', function($scope)
{
  $scope.colour = "";
  $scope.message = "";
  $scope.lunchItems = "";
  $scope.CheckIfTooMuch = function()
  {
    if($scope.lunchItems === "" || $scope.lunchItems.length === 0)
    {
      $scope.message = "Please enter data first";
      $scope.colour = "red";
    }
    else
    {
      var items = $scope.lunchItems.split(",");
      for(var i = 0; i < items.length; i++)
      {
        if(items[i] == "" || items[i] == " ")
        {
          $scope.message = "Please enter the valid data.";
          $scope.colour = "red";
        }
        else if(items.length <= 3)
        {
          $scope.message = "Enjoy!";
          $scope.colour = "green";
        }
        else if(items.length > 3)
        {
          $scope.message = "Too much!";
        }
      }
    }
  }
});

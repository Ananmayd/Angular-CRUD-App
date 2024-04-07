
angular.module('crudApp', [])
  .controller('MainController', function($scope) {
    $scope.items = mockData;

    $scope.addItem = function() {
        if ($scope.newItemName && $scope.newItemDescription) {
          $scope.items.push({ name: $scope.newItemName, description: $scope.newItemDescription });
          $scope.newItemName = '';
          $scope.newItemDescription = '';
          $scope.error = ''; // Clear any previous errors
        } else {
          $scope.error = 'Please provide both name and description.';
        }
      };

      
    $scope.saveItem = function(item) {
        item.name = item.updatedName;
        item.description = item.updatedDescription;
        item.editing = false;
    };
    
    // $scope.deleteItem = function(index) {
    //     $scope.items.splice(index, 1);
    // };
    $scope.showDeleteConfirmation = function(item) {
        item.showConfirmation = true;
    };
    
    $scope.cancelDelete = function(item) {
        item.showConfirmation = false;
    };
    
    $scope.deleteItem = function(item) {
        if (!item.editing) { // Check if the item is not being edited
            var index = $scope.items.indexOf(item);
            $scope.items.splice(index, 1);
            item.showConfirmation = false; // Hide confirmation dialog
        }
    };
    $scope.editItem = function(item) {
      item.editing = true;
      item.updatedName = item.name;
      item.updatedDescription = item.description;
    };
    });

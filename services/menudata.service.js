(function (){
    angular.module('data')
    .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['MenuDataService'];
    function MenuDataService(){
        var service = this;
        service.getAllCategories = function(){

        }
        service.getItemsForCategory = function(categoryShortName){
                return $http({                                                              // Use ajax to get data from the server
                    method: "GET",
                    url: ('https://davids-restaurant.herokuapp.com/menu_items.json') 
                }).then(function(response) {
                    var foundItems = [];
    
                    // for(var i = 0; i < response.data['menu_items'].length;i++){
                    //     if(categoryShortName.length > 0 && response.data['menu_items'][i]['description'] // seraches the response from server for matched term
                    //     .toLowerCase().indexOf(searchTerm) !== -1){
                    //         foundItems.push(response.data['menu_items'][i]);
                    //     }
                    // }
                    return foundItems;
                });
        }
    }
})();
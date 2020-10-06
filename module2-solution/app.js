(function () {
    'use-strict';

    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var list1 = this;
        list1.toBuy = ShoppingListCheckOffService.getToBuyList();
        list1.buy = function (itemIndex) {
            ShoppingListCheckOffService.buy(itemIndex);
        }
    }
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var list2 = this;
        list2.Bought = ShoppingListCheckOffService.getBoughtList();
    }
    function ShoppingListCheckOffService() {
        var service = this;
        var toBuy = [];
        var Bought = [];
        for (let index = 0; index < 5; index++) {
            var item = { name: "cookies", quantity: index };
            toBuy.push(item);
        }
        service.buy = function (itemIndex) {
            Bought.push(toBuy[itemIndex]);
            toBuy.splice(itemIndex, 1);
        };
        service.getToBuyList = function () {
            return toBuy;
        };
        service.getBoughtList = function () {
            return Bought;
        };
    }

})();
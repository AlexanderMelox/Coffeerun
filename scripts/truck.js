(function(window) {
  'use strict';

  const App = window.App || {};

  // Truck constructor
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  // Create order
  Truck.prototype.createOrder = function(order) {
    console.log('Adding order for ' + order.emailAddress);
    this.db.add(order.emailAddress, order);
  };

  App.Truck = Truck;
  window.App = App;

})(window);
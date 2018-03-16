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

  // Deliver order
  Truck.prototype.deliverOrder = function(customerId) {
    console.log('Delivering order for ' + customerId);
    this.db.remove(customerId);
  }

  App.Truck = Truck;
  window.App = App;

})(window);
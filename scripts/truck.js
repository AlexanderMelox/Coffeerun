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

  // Print orders
  Truck.prototype.printOrders = function() {
    // Returns an array containing only the keys
    const customerIdArray = Object.keys(this.db.getAll());
    let self = this;

    console.log('Truck #' + this.truckId + ' has pending orders:');
    // Loops and prints out the trucks orders
    customerIdArray.forEach(function(id) {
      console.log(self.db.get(id));
    });
  }

  App.Truck = Truck;
  window.App = App;

})(window);
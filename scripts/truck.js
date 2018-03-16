(function(window) {
  'use strict';

  const App = window.App || {};

  // Truck constructor
  function Truck(truckId, db) {
    this.truckId = truckId;
    this.db = db;
  }

  App.Truck = Truck;
  window.App = App;

})(window);
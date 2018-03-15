(function(window) {
  'use strict';
  const App = window.app || {};

  // DataStore constuctor
  function DataStore() {
    this.data = {};
  }

  // Add a new value to the data
  DataStore.prototype.add = function(key, val) {
    this.data[key] = val;
  }

  DataStore.prototype.get = function(val) {
    return this.data[val];
  }

  DataStore.prototype.getAll = function() {
    return this.data;
  }

  DataStore.prototype.remove = function(key) {
    delete this.data[key];
  }

  App.DataStore = DataStore;
  window.App = App;
})(window);
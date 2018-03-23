(function(window) {
  'use strict';
  const formSelector = '[data-coffee-order="form"]';
  const App = window.App;
  const Truck = App.Truck;
  const DataStore = App.DataStore;
  const FormHandler = App.FormHandler;
  const myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  const formHandler = new FormHandler(formSelector);
  
  FormHandler.addSubmitHandler();
  console.log(formHandler);
})(window);
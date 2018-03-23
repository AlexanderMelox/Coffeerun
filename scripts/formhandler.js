(function(window){
  'use strict';
  const App = window.App || {};
  const $ = window.jQuery;

  function FormHandler(selector) {
    // If no selector was chosen throws an error
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    // Throw error if selector is not found in the DOM
    if(this.$formElement.length === 0) {
      throw new Error('Could not find element with selector ' + selector);
    }
  }

  FormHandler.prototype.addSubmitHandler = function() {
    console.log('Setting submit handler for form');
    this.$formElement.on('submit', function(event) {
      event.preventDefault();

      const data = {};
      $(this).serializeArray().forEach(function (item) {
        data[item.name] = item.value;
        console.log(item.name + ' is ' + item.value);
      });
      console.log(data);

    });
  }

  App.FormHandler = FormHandler;
  window.App = App;

})(window);
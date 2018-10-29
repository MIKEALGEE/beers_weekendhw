const PubSub = require("../helpers/pub_sub.js");

const SelectView = function(selectElement) {
  this.selectElement = selectElement;
};

SelectView.prototype.bindEvents = function() {
  PubSub.subscribe('Beers:beers-ready', (event) => {
    this.populateSelect(event.detail);
  });

  this.selectElement.addEventListener('change', (event) => {
    const selectedIndex = event.target.value;
    PubSub.publish('SelectView:change', selectedIndex);
  });
};

SelectView.prototype.populateSelect = function(beers) {
  beers.forEach((beer, index) => {
    const option = this.createBeerOption(beer, index);
    this.selectElement.appendChild(option);
  })
};

SelectView.prototype.createBeerOption = function(beer, index) {
  const option = document.createElement('option');
  option.textContent = beer.name;
  option.value = index;
  return option;
};

module.exports = SelectView;

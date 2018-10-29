const Request = require('../helpers/request.js');
const PubSub = require('../helpers/pub_sub.js');

const Beers = function() {
  this.beersData = [];
  this.beerName = [];
};

Beers.prototype.bindEvents = function() {
  PubSub.subscribe("SelectView:change", (event) => {
    const beer = event.detail;
    this.getData(beer);
    this.publishBeers(beer);
  })
}

Beers.prototype.getData = function() {
  const url = `https://api.punkapi.com/v2/beers/`;
  const request = new Request(url);
  request.get()
    .then((data) => {
      this.beersData = data;
      PubSub.publish('Beers:beers-ready', this.beersData);
    })
    .catch((error) => {
      PubSub.publish("Beers:error", error);
    });
};

Beers.prototype.publishBeers = function(data) {
  this.beerName = this.uniqueBeerList();
  PubSub.publish('Beers:beers-ready', this.beerName)
};

Beers.prototype.beerList = function() {
  console.log(this);
  const fullList = this.beersData.map(beer => beer.name);
  return fullList;

};

Beers.prototype.uniqueBeerList = function() {
  return this.beerList().filter((beer, index, array) => {
    return array.indexOf(beer) === index;
  });
};

module.exports = Beers;

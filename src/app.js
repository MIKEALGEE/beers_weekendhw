const Beers = require('./models/beers.js');
const ErrorView = require('./views/error_view.js');
const BeerListView = require('./views/beer_list_view.js');
const BeerDetailView = require('./views/beer_detail_view.js');
const SelectView = require('./views/select_view.js');


document.addEventListener('DOMContentLoaded', () => {
const selectElement = document.querySelector('select#beer-select');
const selectView = new SelectView(selectElement);
selectView.bindEvents();

const listContainer = document.querySelector('#beer-list');
const beerListView  = new BeerListView(listContainer);
beerListView.bindEvents();


  const beers = new Beers();
  beers.bindEvents();
  beers.getData();

console.log(beers);

});

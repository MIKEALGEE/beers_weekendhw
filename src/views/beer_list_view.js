const PubSub = require ('../helpers/pub_sub.js');
const BeerDetailView = require ('./beer_detail_view.js');

const BeerListView = function (container) {
  this.container = container;
};

BeerListView.prototype.bindEvents = function () {
  PubSub.subscribe('Beers:beers-ready', (event) =>{
    this.clearList();
    this.renderBeerDetailView(event.detail);
  });
};

BeerListView.prototype.clearList = function () {
  this.container.innerHTML ='';
};

BeerListView.prototype.renderBeerDetailView = function(beers) {
  beers.forEach((beer) => {
    const beerItem = this.createBeerListItem(beer);
    this.container.appendChild(beerItem);
  });
};

BeerListView.prototype.createBeerListItem = function(beer) {
  const beerDetailView = new BeerDetailView();
  const beerDetail = beerDetailView.createBeerDetail(beer);
  return beerDetail;
};


module.exports = BeerListView;

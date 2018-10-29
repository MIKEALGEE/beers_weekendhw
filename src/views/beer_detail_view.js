const BeerDetailView = function () {

};

BeerDetailView.prototype.createBeerDetail = function (beer) {
  const beerDetail = document.createElement('div');
  beerDetail.classList.add('beer-detail');

  const name = document.createElement('h3');
  name.textContent = beer.name;
  beerDetail.appendChild(name);

  const detailsList = document.createElement('ul');
  const tagline = this.createDetailListItem('Tagline', beer.tagline)
  detailsList.appendChild(tagline);

  const description = this.createDetailListItem("Description", beer.description)
  detailsList.appendChild(description);

  const firstBrewed = this.createDetailListItem("First Brewed:", beer.first_brewed)
  detailsList.appendChild(firstBrewed);

  const image = document.createElement('IMG');
  image.setAttribute('src',`${beer.image_url}`)
  image.setAttribute('width', 60);
  image.setAttribute('height', 150);

  // image.textContent = `src`,`${beer.image_url}`;
  detailsList.appendChild(image);

  beerDetail.appendChild(detailsList)
  return beerDetail;

};

BeerDetailView.prototype.createDetailListItem = function (label, property){
  const element = document.createElement('li');
  element.textContent = `${label}: ${property}`;
  return element;

};

module.exports = BeerDetailView;

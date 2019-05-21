/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/
//localStorage interaction function
//get item
var getItem = function(key) {
  return window.localStorage.getItem(key);
}

//create
var createItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//update
var updateItem = function(key, value) {
  return window.localStorage.setItem(key, value);
}

//delete
var deleteItem = function(key) {
  return window.localStorage.removeItem(key);
}

//clear everything
var clearEverything = function() {
  return window.localStorage.clear();
}

var keyExists = function(key) {
  var currentValue = getItem(key);
  return currentValue !== null;
}



//updateBeer
//getBeer

//newBeer function
// var Beer = function(name, brewery, rating){
//   this.db = localStorage.beers
//   this.beer = {
//     name: name,
//     brewery: brewery,
//     rating: rating 
//   }
//   this.save = function(){
//     this.db.append(this.beer)
//   }
//   this.delete = function(){
//     for(let i in this.db){
//       if(this.db[i].beer.name == this.beer.name){
//         this.db[i] = null
//       }
//     }
//   }
// }

//renderBeerList
var renderBeerList = function(brewery){
  localStorage.beers.forEach(function(beer){
    if (beer.beer.brewery === brewery){
      return beer;
    }
  })
}

var getDataBase = function(dbkey){
  return JSON.parse(localStorage.getItem(dbkey))
}
console.log(getDataBase('beers'));

var updateDatabase = function(dbkey, db){ 
  localStorage.setItem(dbkey,JSON.stringify(db))
}
updateDatabase('beers', [{name: 'coors', brewery: 'Coors', rating: 4}])
console.log(getDataBase('beers'));

//deleteBeer
var deleteBeer = function(name){
  var y = getDataBase('beers')
  var filtered = y.filter(function(el) { return el.name != name; }); 
  updateDatabase('beers', filtered)      
}
var getBeer = function(name){
  var y = getDataBase(name)
  for (let i in y){
    if(y[i].name === name){
      return y[i];
    }
  }
}
var addBeer = function(name,brewery,rating){
  var y = getBeer(name)
  var x = {name: name, brewery: brewery, rating: rating};
  // if (x.name !== y.name && x.brewery !== y.brewery){
    var beers = getDataBase('beers')
    beers.push(x);
    updateDatabase('beers', beers)
  //}
}

var updateBeer = function(name,brewery,rating){
  deleteBeer(name)
  var x = {name: name, brewery: brewery, rating: rating};
  var beers = getDataBase('beers')
  beers.push(x);
  updateDatabase('beers', beers)
}

var filterBrewery = function(brewery){
  var y = getDataBase('beers')
  var filtered = y.filter(function(el) { return el.brewery = brewery; }); 
  return filtered 
}
var sorter = function(array){
  array.sort(function(a, b){return b.rating-a.rating})
  return array; 
}
var filterBeers = function(name){
  var y = getDataBase('beers')
  var filtered = y.filter(function(el) { return el.rating = rating; }); 
  return filtered 
}
updateBeer('coors', 'Coors', 3)
console.log(getDataBase('beers'));
addBeer('MilkStout', 'LeftHand', 4)
console.log(getDataBase('beers'));
addBeer('MilkStout', 'LeftHand', 3)
addBeer('MilkStout', 'LeftHand', 2)
addBeer('MilkStout', 'LeftHand', 1)
addBeer('MilkStout', 'LeftHand', 2)
console.log(sorter(getDataBase('beers')))




///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  
});

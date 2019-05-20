/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/



//updateBeer
//getBeer

//newBeer function
var Beer = function(name, brewery, rating){
  this.db = localStorage.beers
  this.beer = {
    name: name,
    brewery: brewery,
    rating: rating 
  }
  this.save = function(){
    this.db.append(this.beer)
  }
  this.delete = function(){
    for(let i in this.db){
      if(this.db[i].beer.name == this.beer.name){
        this.db[i] = null
      }
    }
  }
}
//renderBeerList
var renderBeerList = function(brewery){
  localStorage.beers.forEach(function(beer){
    if (beer.beer.brewery === brewery){
      return beer;
    }
  })
}
//deleteBeer
var deleteBeer = function(beer){
  localStorage.beers.forEach(function(beer){
    if (beer.beer.name === beer){
      beer.delete;
    }
  })
}

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


///////////////////////////////////////////
//event handlers for the buttons and ... possibly the inputboxes
  //preventdefault on button clicks
$(document).ready(function() {
  $('#createButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      //current key exists, do something error-handle-y
    } else {
      createItem(currentKey, currentValue);
    }
  });

  $('#updateButton').click(function(event) {
    event.preventDefault();

    var currentKey = $("#keyInput").val();
    var currentValue = $("#valueInput").val();
    if (keyExists(currentKey)) {
      updateItem(currentKey, currentValue);
    } else {
      //current key doesnt exist, do stuff
    }
  });
});

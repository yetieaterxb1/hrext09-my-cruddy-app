/*

 ### Basic Reqs
- [ ] Where to store data? (localstorage)
- [ ] How to caputure data? (web form)
- [ ] How to modify data? (update action, delete action)
- [ ] How to view data? (style?)
- [ ] UI/UX considerations (how are we going to use this)

*/

function seedDataBase(dbkey, seed) {
  db = getDataBase(dbkey)
  if(db === null || db.length === 0){
    db = seed
    updateDataBase('beers', db)
    return true
   }else{
    return false
   }
}

function getDataBase(dbkey){
  return JSON.parse(localStorage.getItem(dbkey))
}

function clearDataBase(dbkey){
  localStorage.removeItem(dbkey)
}

function updateDataBase(dbkey, db){ 
  localStorage.setItem(dbkey,JSON.stringify(db))
}

function sortDataBase(by, order, array){
  if(by === 'rating'){
    array.sort(function(a,b){
      if(order === 0){
        // Descending
        return b[by]-a[by]
      }else{
        // Ascending
        return a[by] - b[by]
      }
    })
  }else if(by === 'brewery' || by === 'name'){
    array.sort(function(a,b){
      a[by] = a[by].toLower()
      b[by] = b[by].toLower()
      // Ascending
      if(a[by] < b[by]) { return -1 }
      // Descending
      if(a[by] > b[by]) { return 1 }
      return 0
    })
  }
  return array; 
}


var deleteBeer = function(name){
  var db = getDataBase('beers')
  var filtered = db.filter(function(el) { return el.name !== name }); 
  updateDataBase('beers', filtered)      
}

var getBeer = function(name){
  var db = getDataBase(name)
  for (let i in db){
    if(db[i].name === name){
      return db[i];
    }
  }
}

var addBeer = function(name,brewery,rating){
  var y = getBeer(name)
  var x = {name: name, brewery: brewery, rating: rating};
  var beers = getDataBase('beers')
  beers.push(x);
  updateDataBase('beers', beers)
}

var updateBeer = function(name,brewery,rating){
  console.log('update', name, brewery, rating)
  deleteBeer(name)
  var x = {name: name, brewery: brewery, rating: rating};
  var beers = getDataBase('beers')
  beers.push(x);
  updateDataBase('beers', beers)
}

var filterBrewery = function(brewery){
  var db = getDataBase('beers')
  var filtered = db.filter(function(el) { return el.brewery = brewery; }); 
  return filtered 
}

var filterBeers = function(name){
  var db = getDataBase('beers')
  var filtered = db.filter(function(el) { return el.rating = rating; }); 
  return filtered 
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


var updateDatabase = function(dbkey, db){ 
  localStorage.setItem(dbkey,JSON.stringify(db))
}


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
// updateBeer('coors', 'Coors', 3)
// console.log(getDataBase('beers'));
// addBeer('MilkStout', 'LeftHand', 4)
// console.log(getDataBase('beers'));
// addBeer('MilkStout', 'LeftHand', 3)
// addBeer('MilkStout', 'LeftHand', 2)
// addBeer('MilkStout', 'LeftHand', 1)
// addBeer('MilkStout', 'LeftHand', 2)
// console.log(sorter(getDataBase('beers')))






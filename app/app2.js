$(document).ready(function(){
    seedDataBase('beers', [{name:'example', rating:5, brewery:'example'}])
    renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
    $('#submitButton').click(handleSubmitForm)
    $('#exampleModal').keypress(handleEnterKey);

      
    $('#beertable').DataTable({
    "ordering": true // false to disable sorting (or any other option)
    });
    $('.dataTables_length').addClass('bs-select');

})

    
  
  
  function renderBeers(container, beers){
    container.empty()
    beers.forEach(function(beer){
      var deleteButton = $('<button> &#215; </button>').attr('class', 'deleteBeerButton').click(handleDeleteBeerButton)
      var cells = [
        $('<td>').attr('class', 'name-cell').text(beer.name),
        $('<td>').attr('class', 'brewery-cell').text(beer.brewery),
        $('<td>').attr('class', 'rating-cell').text(beer.rating),
       
      ]
      container.append(
        $('<tr></tr>')
          .attr('id', beer.name + beer.brewery)
          .append(cells)
          .click(handleUpdateBeer)
      )
    })
  }
  
  function handleSubmitForm(event){
    event.preventDefault()
    var beer = {
      name: $('input#nameInput').val(),
      brewery: $('input#breweryInput').val(),
      rating: $('input#ratingInput').val()
    }
    addBeer(beer.name, beer.brewery, beer.rating)
    renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
  }
  
  function handleEnterKey(event){
    var keycode = (event.keyCode ? event.keyCode : event.which);
    if(keycode == '13'){
      console.log('ENTER')
      $(this).find('#submitButton').click()
    }
  }
  
  function handleDeleteBeerButton(event){
    event.preventDefault()
    var $beer = $(this).parent().siblings('td.name-cell')
    var beerName = $beer.text()
    // var breweryName = $(this).parent().siblings('td.brewery-cell').text()
    deleteBeer(beerName)
    renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
  }
  
  function handleUpdateBeer(event){
    var beer = $(this).children('td.name-cell').text()
    var brewery = $(this).children('td.brewery-cell').text()
    var rating = $(this).children('td.rating-cell').text()
    var modalClone = $('#exampleModal').clone()
    modalClone.find('#nameInput').remove()
    modalClone.find('#breweryInput').remove()
    modalClone.modal()
    modalClone
      .find('#submitButton')
      .click(function(event){
        var ratingEdit = modalClone.find('#ratingInput').val()
        updateBeer(beer, brewery, ratingEdit)
        renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
        console.log(this)
      }) 
    modalClone
      .find('#deleteBeerButton')
      .click(function(event){
        deleteBeer(beer)
        renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
     })
    modalClone.keypress(handleEnterKey)
}
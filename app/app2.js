$(document).ready(function(){
    seedDataBase('beers', [{name:'example', rating:5, brewery:'example'}])
    renderBeers($('#beer-table-body'), sortDataBase('rating', 0, getDataBase('beers')))
    $('#submitButton').click(handleSubmitForm)
    $('#exampleModal').keypress(handleEnterKey);


    $('#beertable').DataTable({
    "ordering": true, // false to disable sorting (or any other option)
    "scrollY": "1000px",
    "scrollCollapse": true,
    'paging':false
    });
    $('.dataTables_length').addClass('bs-select')
    var abbClone = $('<button type="button" id="addBeerButton" class="btn btn-primary col-col-sm-6 col-md-6 col-lg-4 " id="addBeerButton" data-toggle="modal" data-target="#exampleModal">Add a Beer</button>')
    $('div.col-sm-12.col-md-6').first().append(abbClone)
    // $('#beertable_wrapper').children('row').children()[0].append(aBBClone) 


})


  function makeStars(rating){
     var container = $('<span class= "starRating"></span>').click(function(){
     $(this).children('.checked').length
    })
    for(let i = 1; i<=5; i++){
      var star = $('<span class="fa fa-star">').attr('star',i)
      // star.mouseenter(function(){
      //   var position = $(this).attr('star')
      //   var stars = $(this).parent().find('.fa-star')
      //   console.log(stars)
      //   stars.forEach(function(star1){
      //     star1.addClass('checked')
      //   })
      // })
      // star.mouseout()
      if (i <= rating){
        star.addClass('checked')
      }
      container.append(star)
    }
    return container
  }
  // <span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star"></span><span class="fa fa-star"></span>

  function renderBeers(container, beers){
    container.empty()
    beers.forEach(function(beer){
      var hiddenNumber = $('<span>'+ beer.rating + '</span>').css('visibility', 'hidden')
      var deleteButton = $('<button> &#215; </button>').attr('class', 'deleteBeerButton').click(handleDeleteBeerButton)
      var cells = [
        $('<td>').attr('class', 'name-cell').text(beer.name),
        $('<td>').attr('class', 'brewery-cell').text(beer.brewery),
        $('<td>').attr('class', 'rating-cell').html([hiddenNumber ,makeStars(beer.rating)]),
        $('<td>').attr('class', 'delete-cell').html(deleteButton)
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
    modalClone.find('.modal-title').text('Edit rating')
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
    modalClone.keypress(handleEnterKey)
  }


document.addEventListener("DOMContentLoaded", function() {

  var addCat = document.querySelector('.summon-cats')

  addCat.addEventListener('click', function() {
    console.log('adding cat button works')
  $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
      // Creates a new <img> tag
      var image = document.createElement('img')
      var divBox = document.querySelectorAll('.cat-box')
      // Sets the src attribute of the <img> to the cat's photo
      image.setAttribute('src', responseData.cats[0].photo)
      // Inserts that <img> into one of the empty .cat-box divs
      divBox[0].appendChild(image)
      image.alt = 'Photo of' + responseData.cats[0].name



// Sets the alt attribute of the <img> to "Photo of (insert cat name here)"

    })
  })
});

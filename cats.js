document.addEventListener("DOMContentLoaded", function() {

  var addCat = document.querySelector('.summon-cats');

  addCat.addEventListener('click', function() {
    console.log('adding cat button works')
  $.ajax({
      url: 'http://bitkittens.herokuapp.com/cats.json',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
        for(i = 0; i < responseData.cats.length; i++) {
        var image = document.createElement('img');
        var divBox = document.querySelectorAll('.cat-box');
        image.setAttribute('src', responseData.cats[0].photo)
        image.alt = 'Photo of ' + responseData.cats[0].name;
        divBox[i].appendChild(image);
      };
    });
  });
});

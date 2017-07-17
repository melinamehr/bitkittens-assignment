document.addEventListener("DOMContentLoaded", function() {

  var addCat = document.querySelector('.summon-cats')

  addCat.addEventListener('click', function() {
    console.log('adding cat button works')
  $.ajax({
      url: '',
      method: 'GET',
      dataType: 'json'
    }).done(function(responseData) {
    })
  })
});

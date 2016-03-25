$(document).ready(function(){
  $("form").submit(function(event){
    event.preventDefault;
    var userAgeInput = ($("#userAge").val());
    alert (userAgeInput);
    var userFavoritePetInput = ($("#userFavoritePet").val());
    alert (userFavoritePetInput);
    var userFavoriteCountryInput = ($("#userFavoriteCountry").val());
    alert (userFavoriteCountryInput);
    var userFavoriteIceCreamFlavorInput = ($("#userFavoriteIceCreamFlavor").val());
    alert (userFavoriteIceCreamFlavorInput);
    var userFavoriteSportInput = ($("#userFavoriteSport").val());
    alert (userFavoriteSportInput);
  })
})

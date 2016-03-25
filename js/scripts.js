var userAgeInput ;
var userFavoritePetInput ;
var userFavoriteCountryInput ;
var userFavoriteIceCreamFlavorInput ;
var userFavoriteSportInput ;
var userExtraQuestionInput ="" ;
var numberOfSelected_A_Counter = 0;
var numberOfSelected_B_Counter = 0;
var numberOfSelected_C_Counter = 0;
var userNameInput = "";

$(document).ready(function(){
  $("#mainForm").submit(function(event){
    event.preventDefault();

    userNameInput = $("#userName").val();
    $(".userNameOutput").text(userNameInput);
    userAgeInput = ($("#userAge").val());
    userFavoritePetInput = ($("#userFavoritePet").val());
    userFavoriteCountryInput = ($("#userFavoriteCountry").val());
    userFavoriteIceCreamFlavorInput = ($("#userFavoriteIceCreamFlavor").val());
    userFavoriteSportInput = ($("#userFavoriteSport").val());

    // alert (userAgeInput + " " + userFavoritePetInput + " " + userFavoriteCountryInput + " " + userFavoriteIceCreamFlavorInput + " " + userFavoriteSportInput);

    // $("#answerStarWars").show() ; con questo comando visualizzo la selezione dell-utente

    if (userAgeInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userAgeInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userAgeInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoritePetInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoritePetInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoritePetInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteCountryInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteCountryInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteCountryInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteIceCreamFlavorInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteIceCreamFlavorInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteIceCreamFlavorInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    if (userFavoriteSportInput === "a"){
      numberOfSelected_A_Counter += 1;
    } else if (userFavoriteSportInput === "b") {
      numberOfSelected_B_Counter += 1;
    } else if (userFavoriteSportInput === "c") {
      numberOfSelected_C_Counter += 1;
    }

    // alert ("A" + numberOfSelected_A_Counter + "B" + numberOfSelected_B_Counter + "C" + numberOfSelected_C_Counter) ;
    if (numberOfSelected_A_Counter > numberOfSelected_B_Counter && numberOfSelected_A_Counter > numberOfSelected_C_Counter) {
      // alert ("You should visit Games Of thrones");
      $("#answerGamesOfThrones, #openingAnswerMessage").show();
    } else if (numberOfSelected_B_Counter > numberOfSelected_A_Counter && numberOfSelected_B_Counter > numberOfSelected_C_Counter) {
      // alert ("You should visit Star wars");
      $("#answerStarWars, #openingAnswerMessage").show();
    } else if (numberOfSelected_C_Counter > numberOfSelected_A_Counter && numberOfSelected_C_Counter > numberOfSelected_B_Counter) {
      // alert ("You should visit Lord of the rings");
      $("#answerTheLordOfTheRings, #openingAnswerMessage").show();
    } else if (numberOfSelected_A_Counter === numberOfSelected_B_Counter || numberOfSelected_A_Counter === numberOfSelected_C_Counter || numberOfSelected_B_Counter === numberOfSelected_C_Counter) {
      $("#extraFormForEquivalentAnswers").show();
    }
  })
  $("#extraFormForEquivalentAnswers").submit(function(event){
    event.preventDefault();
    userExtraQuestionInput = $("#extraQuestion").val();
    if (userExtraQuestionInput === "apple"){
      $("#answerGamesOfThrones").show();
    } else if (userExtraQuestionInput === "orange") {
      $("#answerStarWars").show();
    } else if (userExtraQuestionInput === "pear") {
      $("#answerTheLordOfTheRings").show();
    }
  })
})

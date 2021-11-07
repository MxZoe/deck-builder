$(document).ready(function(){
const cards = [];
const sideCards = ["SIDEBOARD"];

  $("#formOne").submit(function(event){
    currentCard = $("#cardName").val();
    radioButtonValue = $("input[name='deckCheck']:checked").val();
    if(radioButtonValue == "main"){
      cards.push(currentCard);
      $("#mainDisplay").append("<li>" + currentCard + "</li>");
    }
    else if(radioButtonValue == "side"){
      sideCards.push(currentCard);
      $("#sideDisplay").append("<li>" + currentCard + "</li>");
    }
    else{
      alert("Please check either maindeck or sideboard.");
    };
    $("#cardName").val("");
    event.preventDefault();
  });

});
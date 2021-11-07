$(document).ready(function(){
const cardNumbers = ["ace", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "kings"];
const cardSuits = ["clubs", "diamonds", "hearts", "spades"];

  $("#generateButton").click(function(event){
    cardSuits.forEach(function(element){
      cardNumbers.forEach(function(element2){
        let cardNames = element2.toString().concat(" of " + element);
        $("#deck").append("<li>" + cardNames + "</li>");
      })
    })  
  });

});
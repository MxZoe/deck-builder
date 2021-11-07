/* function is depreciated and needs updating 11/7/21
function copyText(id){
  $(id).select();
  document.execCommand('copy');
}
*/

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

  /*copy button does not work as of 11/7/21
  $("#copyButton").click(function(event){
    alert("Your deck has been copied to your clipboard.");
    copyText("'#mainDisplay'")
    event.preventDefault();
  });
  */
});
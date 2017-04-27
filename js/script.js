$(function() {
  //variables
var scorePlayer1 = 0;
var scorePlayer2 = 0;

var game1player1 = "";
var game2player1 = "";
var game3player1 = "";
var game1player2 = "";
var game2player2 = "";
var game3player2 = "";
var review1player1 = 0;
var review2player1 = 0;
var review3player1 = 0;
var review1player2 = 0;
var review2player2 = 0;
var review3player2 = 0;

var player1Hand = [];
var player2Hand = [];
var player1card1;
var player1card2;
var player1card3;
var player2card1;
var player2card2;
var player2card3;

//show hand
// once click select card
//click again to play card
//new card from deck
//used card goes to bottom of the deck

//scores
$('.scorePlayer1').text(scorePlayer1);
$('.scorePlayer2').text(scorePlayer2);

//games
$('.game1player1').text(game1player1);
$('.game2player1').text(game2player1);
$('.game3player1').text(game3player1);
$('.game1player2').text(game1player2);
$('.game2player2').text(game2player2);
$('.game3player2').text(game3player2);


//reviews
$('.review1player1').text(review1player1);
$('.review2player1').text(review2player1);
$('.review3player1').text(review3player1);
$('.review1player2').text(review1player2);
$('.review2player2').text(review2player2);
$('.review3player2').text(review3player2);

//cards


// cards
var deck = [
  {card:0, Name:"MockCard0", Type:"", Description:"Add 0", Value:"0"},
  {card:1, Name:"MockCard1", Type:"", Description:"Add 1", Value:"1"},
  {card:2, Name:"MockCard2", Type:"Rumor", Description:"Add 2", Value:"2"},
  {card:3, Name:"MockCard3", Type:"Rumor", Description:"Add 3", Value:"3"},
  {card:4, Name:"MockCard4", Type:"Rumor", Description:"Add 4", Value:"4"},
  {card:5, Name:"MockCard5", Type:"Rumor", Description:"Add 5", Value:"5"},
  {card:5, Name:"MockCard6", Type:"Rumor", Description:"Add 6", Value:"6"},
];
var shuffledDeck = [];

console.log(deck);
//count number of plays (confirms in this case)
//Fisher-Yates to shuffledDeck
function shuffleDeck(array){
  for(var i = array.length -1; i >0; i--){
    var j = Math.floor(Math.random() * (i +1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}
shuffledDeck = shuffleDeck(deck);
//console.log(shuffledDeck);
//same right now but can adjust later

function dealCards(array){
  player1Hand[0] = shuffledDeck.shift();
  player1Hand[1] = shuffledDeck.shift();
  player1Hand[2] = shuffledDeck.shift();
  //Update values
  $('.player1card1').html(
    '<span class="name">'+player1Hand[0].Name +'</div>'
    +'<span class="type">'+player1Hand[0].Type +'</div>'
    +'<span class="description">'+player1Hand[0].Description +'</div>'
    +'<span class="value hidden">'+player1Hand[0].Value +'</div>'
);
$('.player1card2').html(
  '<span class="name">'+player1Hand[1].Name +'</div>'
  +'<span class="type">'+player1Hand[1].Type +'</div>'
  +'<span class="description">'+player1Hand[1].Description +'</div>'
  +'<span class="value hidden">'+player1Hand[1].Value +'</div>'
);
$('.player1card3').html(
  '<span class="name">'+player1Hand[2].Name +'</div>'
  +'<span class="type">'+player1Hand[2].Type +'</div>'
  +'<span class="description">'+player1Hand[2].Description +'</div>'
  +'<span class="value hidden">'+player1Hand[2].Value +'</div>'
);
}
dealCards(shuffledDeck);


$('.cards').click('on', function(){
  //highlight what should be clickable not yet avaliable

  $(this).toggleClass('selected');
  var original = $(this);
  console.log(original[0].innerText);
  original = original.split(' ');
  console.log(original);
  //$('.inactivePlayer .games').toggleClass('potentialTarget');
  $('.games').click('on', function(){
      $(this).toggleClass('selected');

       //if cards with selected, remove class
    });

});

$('.endTurn').click('on', function() {
  if ($('.player1container').hasClass("activePlayer")){
    $('.player1container').switchClass( "activePlayer", "inactivePlayer", 1000, "easeInOutQuad" );
    $('.player2container').switchClass( "inactivePlayer", "activePlayer", 1000, "easeInOutQuad" );
    // hide cards
    $('.player1Cards').toggleClass('hidden');
  }
    else {
      $('.player1container').switchClass( "inactivePlayer", "activePlayer", 1000, "easeInOutQuad" );
      $('.player2container').switchClass( "activePlayer", "inactivePlayer", 1000, "easeInOutQuad" );
      $('.player1Cards').toggleClass('hidden');
    };
});



});

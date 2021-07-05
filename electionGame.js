//No-To-Vote-Buying Game
game();

function game() {

var hole_a = 0;
var hole_b = 0;
var hole_c = 0;
$('#score').data('score', 0);
$('#missed').data('missed', 0);
var hand_a;
var hand_b;
var hand_c;
var pop_timeout_a;
var pop_timeout_b;
var pop_timeout_c;
var wacked_timeout_a;
var wacked_timeout_b;
var wacked_timeout_c;
var score;
var level;
var round_2_started = false;
var round_3_started = false;

round_1();

function round_1(){
  score = $('#score').data('score');
  if(score <= 15 && !won() && $('#missed').data('missed') < 3){
    if(score >= 0 ) {
      level = 1;
      randomizer_a(hole_a);
    }
  }
  if(score >= 5 && round_2_started == false){
    round_2_started = true;
    round_2();
  }
}

function round_2(){
  score = $('#score').data('score');
  if(score <= 15 && !won() && $('#missed').data('missed') < 3){
    if(score == 5){
      level = 2;
      $('#level').html(level);
    }
    randomizer_b(hole_b);
  }
  if(score >= 10 && round_3_started == false){
    round_3_started = true;
    round_3();
  }
}

function round_3(){
  score = $('#score').data('score');
  if(score <= 15 && !won() && $('#missed').data('missed') < 3){
    if(score== 10){
      level = 3;
      $('#level').html(level);
     } 
    randomizer_c(hole_c);
    
  }
}

function won(){
  if($('#score').data('score') >= 15 ) {
    $(".row-a").css('display','none')
    $(".row-b").css('display','none')
    $(".row-c").css('display','none')
    $('#end').html("Winner");
    $('#score').html("15");

    return true;
  }
  return false;
}

function missed(){
  var miss = $('#missed').data('missed');
  miss++;
  $('#missed').data('missed', miss);
  $('#missed').html(miss);
  if(miss>=3) {
    $(".row-a").css('display','none')
    $(".row-b").css('display','none')
    $(".row-c").css('display','none')
    $('#missed').html("3");
    $('#end').html("Game Over");
  }
}




//level 1
function motion_a(hole_a){

  if(hole_a == 1) {
    hand_a = $("#hand-a-1");
  }
  if(hole_a == 2) {
    hand_a = $("#hand-a-2");
  }
  if(hole_a == 3) {
    hand_a = $("#hand-a-3");
  }

  $(".row-a").css('display','none');  

//animation with interval

    hand_a
      .css({
        top: 0, marginTop: 0, borderColor: 'blue', display: 'block'
        })
      .animate({
        top : -50} //moves up
        , 1000
        )
      .animate({
        'Opacity' : 1} //delay
        , 2000
        )
      .animate({
        top : 0} //moves down
        , 1000
        )
      .queue(function(){
        missed();
        round_1();
      })  
      ;
    //randomizer(hole_a);

    pop_timeout_a = setTimeout(function() { 
      
    }, 4000);


// When hand_a is clicked
  hand_a.one( "click", function() {
    hand_a
      .clearQueue()
      .css({
        borderColor: 'red'
      })
      .animate({marginTop : 50}, 500) //moves down fast
      .queue(function(){
        console.log( "Clicked: " + $(this).attr('id') );
        score = $('#score').data('score');
        if (score <= 15) {
          score++;
        }
        $('#score').data('score', score);
        $('#score').html(score);
      ;})
      ;

    wacked_timeout_a = setTimeout(function() {
      hand_a
        .queue(function(){
          won();
          round_1();
        });
    }, 500);
  });
}

//level 2
function motion_b(hole_b){

  if(hole_b == 4) {
    hand_b = $("#hand-b-1");

  }
  if(hole_b == 5) {
    hand_b = $("#hand-b-2");
  }
  if(hole_b == 6) {
    hand_b = $("#hand-b-3");
  }

  $(".row-b").css('display','none');
  

//animation with interval

    hand_b
      .css({
        top: 0, marginTop: 0, borderColor: 'blue', display: 'block'
        })
      .animate({
        top : -50} //moves up
        , 1000
        )
      .animate({
        'Opacity' : 1} //delay
        , 2000
        )
      .animate({
        top : 0} //moves down
        , 1000
        )
      .queue(function(){
        missed();
        round_2();
      })  
      ;
    //randomizer(hole_a);

    pop_timeout_b = setTimeout(function() { 
      
  }, 4000);


// When hand is clicked
  hand_b.one( "click", function() {
  hand_b
      .clearQueue()
      .css({
        borderColor: 'red'
      })
      .animate({marginTop : 50}, 500) //moves down fast
      .queue(function(){
        console.log( "Clicked: " + $(this).attr('id') );
        score = $('#score').data('score');
        if (score <= 15) {
          score++;
        }
        $('#score').data('score', score);
        $('#score').html(score);
      ;})
      ;

  wacked_timeout_b = setTimeout(function() {
    hand_b
      .queue(function(){
        won();
        round_2();
      });
  }, 500);
  });
}

//level 3
function motion_c(hole_c){

  if(hole_c == 7) {
    hand_c = $("#hand-c-1");
  }
  if(hole_c == 8) {
    hand_c = $("#hand-c-2");
  }
  if(hole_c == 9) {
    hand_c = $("#hand-c-3");
  }

  $(".row-c").css('display','none');
  

//animation with interval

    hand_c
      .css({
        top: 0, marginTop: 0, borderColor: 'blue', display: 'block'
        })
      .animate({
        top : -50} //moves up
        , 1000
        )
      .animate({
        'Opacity' : 1} //delay
        , 2000
        )
      .animate({
        top : 0} //moves down
        , 1000
        )
      .queue(function(){
        missed();
        round_3();
      })  
      ;
    //randomizer(hole_a);

    pop_timeout_c = setTimeout(function() { 
      
  }, 4000);


// When hand is clicked
  hand_c.one( "click", function() {
  hand_c
      .clearQueue()
      .css({
        borderColor: 'red'
      })
      .animate({marginTop : 50}, 500) //moves down fast
      .queue(function(){
        console.log( "Clicked: " + $(this).attr('id') );
        score = $('#score').data('score');
        if (score <= 15) {
          score++;
        }
        $('#score').html(score);
      ;})
      ;

  wacked_timeout_c = setTimeout(function() {
    hand_c
      .queue(function(){
        won();
        round_3();
      });
  }, 500);
  });
}

// Level 1
var random_local_a;
var random_local_b;
var random_local_c;
function randomizer_a(random_local_a){
  clearTimeout(pop_timeout_a);
  clearTimeout(wacked_timeout_a);
  if(hand_a) {
    hand_a.clearQueue();
  }
  do{
    random_local_a = Math.floor((Math.random() * 3) + 1);
    }
  while(random_local_a == hole_a)
  
  hole_a = random_local_a;
  console.log( "Random hand_a is " + hole_a );
  motion_a(hole_a);
}

//Level 2
function randomizer_b(random_local_b){
  clearTimeout(pop_timeout_b);
  clearTimeout(wacked_timeout_b);
  if(hand_b) {
    hand_b.clearQueue();
  }
  do{
    random_local_b = Math.floor((Math.random() * 3) + 4);
    }
  while(random_local_b == hole_b)
  
  hole_b = random_local_b;
  console.log( "Random hand_b is " + hole_b );
  motion_b(hole_b);
}

//Level 3
function randomizer_c(random_local_c){
  clearTimeout(pop_timeout_c);
  clearTimeout(wacked_timeout_c);
  if(hand_c) {
    hand_c.clearQueue();
  }
  do{
    random_local_c = Math.floor((Math.random() * 3) + 7);
    }
  while(random_local_c == hole_c)
  
  hole_c = random_local_c;
  console.log( "Random hand_c is " + hole_c );
  motion_c(hole_c);
}

}

function click_a() {
	$( "#click-zone-c" ).finish();
	$("#click-zone-c").data('clicked', 'yes');
	$("#click-zone-c").data('clicked', 'yes') + 1;
	$("points").append(points);
	randomizer(1);
}

function click_b() {
	$( "#click-zone-b" ).finish();
	$("#click-zone-c").data('clicked', 'yes');
	$("#click-zone-c").data('clicked', 'yes') + 1;
	$("points").append(points);
	randomizer(2); 
}

function click_c() {
	$("#click-zone-c").finish();
	$("#click-zone-c").data('clicked', 'yes');
	$("#click-zone-c").data('clicked', 'yes') + 1;
	$("points").append(points);
	randomizer(3);
}

var random_global = 1;

function randomizer(random_global){
	do{
		random_local = Math.floor((Math.random() * 3) + 1);
		}
	while(random_global== random_local)
	
	random_global = random_local;
	
	if(random_global==1){
		document.getElementById('click-zone-a').style.display = "inline";
		document.getElementById('click-zone-b').style.display = "none";
		document.getElementById('click-zone-c').style.display = "none";
		
		$('#click-zone-a').animate({
        'marginTop' : "-=50px" //moves up
        })
		
		$('#click-zone-a').delay(1500).animate({
        'marginTop' : "+=50px" //moves down
        },
		{complete : restart_a}
		)
	}
	if(random_global==2){
		document.getElementById('click-zone-a').style.display = "none";
		document.getElementById('click-zone-b').style.display = "inline";
		document.getElementById('click-zone-c').style.display = "none";
		
		$('#click-zone-b').animate({
        'marginTop' : "-=50px" //moves up
        })
		
		$('#click-zone-b').delay(1500).animate({
        'marginTop' : "+=50px" //moves down
        },
		{complete : restart_b}
		)
	}
	if(random_global==3){
		document.getElementById('click-zone-a').style.display = "none";
		document.getElementById('click-zone-b').style.display = "none";
		document.getElementById('click-zone-c').style.display = "inline";
		
		$('#click-zone-c').animate({
        'marginTop' : "-=50px" //moves up
        }) 
		
		$('#click-zone-c').delay(1500).animate({
        'marginTop' : "+=50px" //moves down
        },
		{complete : restart_c}
		)
		
	}
}

randomizer();

function restart_a(){
	randomizer(1);
}

function restart_b(){
	randomizer(2);
}

function restart_c(){
	randomizer(3);
}






var clickZoneB = document.getElementById('click-zone-b');
var clickZoneC = document.getElementById('click-zone-c');











/*
document.getElementsByClassName('click-zone-b').addEventListener('click', click_b);
document.getElementsByClassName('click-zone-c').addEventListener('click', click_c);
*/




function game (){
    var clickZoneA = document.getElementsByClassName('click-zone-a');
	var x = document.getElementsByClassName("clickZoneA").length;
		
    for (var i=0;i<clickZoneA.length;i++){
		alert('Clicked: Zone A');
        clickZoneA.addEventListener('click', click_a);
    }
}

game();







function show_pres() {
 document.getElementById("div_pres").style.display = 'inline';
 document.getElementById("div_vp").style.display = 'none';
 document.getElementById("div_sen").style.display = 'none';
}

function show_vp() {
 document.getElementById("div_pres").style.display = 'none';
 document.getElementById("div_vp").style.display = 'inline';
 document.getElementById("div_sen").style.display = 'none';
}

function show_sen() {
 document.getElementById("div_pres").style.display = 'none';
 document.getElementById("div_vp").style.display = 'none';
 document.getElementById("div_sen").style.display = 'inline';
}


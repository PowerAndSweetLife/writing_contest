var message = "Lorem" ; // alaina avy any anaty serveur
var message_copy = message ;
var longueur_mot = message.length ;
var traitement_to_span = "" ;

for(var i = 0; i < message.length; i++) {
	traitement_to_span += "<span class='text_span'>"+message[i]+"</span>" ;
}




var anchor_message = document.getElementById('message') ;
var btn_start = document.getElementById('start') ;
var message_length = document.getElementById('message_length') ;
var remain = document.getElementById('remain') ;
var message_length_for_score = document.getElementById('message_length_for_score') ;
var success = document.getElementById('success') ;
var counter = 0 ;
var score = 0 ;
var start_signal = false ;

btn_start.addEventListener('click', function() {
	message_length.innerText = longueur_mot ;
	message_length_for_score.innerText = longueur_mot ;
	success.innerText = 0 ;
	remain.innerText = 0 ;
	anchor_message.innerHTML = traitement_to_span ;
	btn_start.style.display = 'none' ;
	start_signal = true ;
}) ;







document.body.addEventListener("keyup", function(e) {
	var element_on_span = document.getElementsByClassName('text_span') ;
	if(start_signal) {
		if(longueur_mot > 0) {
			if(e.key != "Shift") {

				var value = e.key ;
				if(value == message[counter]) {
					score++ ;
					success.innerText = score ;
					element_on_span[counter].style.color = 'green' ;

				}
				else {
					element_on_span[counter].style.color = 'red' ;
					element_on_span[counter].style.textDecoration = 'line-through' ;
				}
				counter++ ;
				longueur_mot-- ;
				remain.innerText = counter ;
			}
			
		}
		else {
			// alert("Done !") ;
		}
	}
	

})
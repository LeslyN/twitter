window.addEventListener('load', function() {
	/* Vr.1 */
	var btn = document.querySelector('.btn-tweet');
	var textAreaPress= document.querySelector('.text-task');

	/* Eventos */
	btn.addEventListener('click', twittear);
	textAreaPress.addEventListener('keyup', validar);
	validar();
	textAreaPress.addEventListener('keyup', countString);

	/* función twittear - Obteniendo el texto del textArea */
	function twittear(event){
	  event.preventDefault();
	  var textArea = document.querySelector('.text-task').value;
	  var textPublished = document.createElement('p');
	  textPublished.textContent = textArea;

	  var containerText = document.createElement('div');
	  containerText.setAttribute('class', 'tweets-published');
	  document.querySelector('.panel-two').appendChild(containerText);
	  document.querySelector('.tweets-published').appendChild(textPublished);

	  document.querySelector('.text-task').value = '';
	  countString();
	}

	/* Validadndo boton */
	function validar(){
	  if(document.querySelector('.text-task').value === ''){
	    btn.disabled = true;
	  } else {
	    btn.disabled = false;
	  }
	}

	/* Contando caracteres */
	function countString(){
	  var quantity = 140 - (document.querySelector('.text-task').value.length);
	  document.querySelector('.count').textContent = quantity;

		if(quantity > 140) { 
	 		validar();
	 		document.querySelector('.count') = '-';
	 	} else {
			if(quantity > 130) {
	  		document.querySelector('.count').style.color = 'orange';
		 	}else {
		 		if(quantity > 120) { 
		 			document.querySelector('.count').style.color = 'blue';																				
		 		}
		 	}
	 	}
	}
	

	/*Vr 3 - Cambiando color*/

})
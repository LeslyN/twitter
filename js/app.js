window.addEventListener('load', function() {
	/* V1 */
	var btn = document.querySelector('.btn-tweet');
	var textAreaPress= document.querySelector('.text-task');
	var total = document.querySelector('.count');
	var MAXC = 140;

	/* Function expression */ 
	/* Función twittear - Obteniendo el texto del textArea */
	var twittear = function(event){
	  event.preventDefault();
		var textArea = textAreaPress.value;
		/* Agrega el texto al HTML */ 
	  var textPublished = document.createElement('p');
	  textPublished.textContent = textArea;

	  var containerText = document.createElement('div');
	  containerText.setAttribute('class', 'tweets-published');
	  document.querySelector('.panel-two').appendChild(containerText);
	  document.querySelector('.tweets-published').appendChild(textPublished);

		/* Reseteo de textarea a estado inicial */ 
		textAreaPress.focus();
		textAreaPress.value = '';
		textAreaPress.style.height = '';
	  countString();
	}

	/* V2 - Validadndo boton */
	var validateTweets = function(){
	  if(textAreaPress.value === '' || textAreaPress.value.length > MAXC || textAreaPress.value == false){
	    btn.disabled = true;
	  } else {
	    btn.disabled = false;
	  }
	}

	/* V2 y V3 - Contando caracteres */
	var countString = function(){
		var quantityCount = textAreaPress.value.length;
	  var quantity = MAXC - quantityCount;
		total.textContent = quantity;

	  /*V3 - Cambiando color*/
	 	switch (true) {
			case (quantityCount > MAXC):
				validateTweets();
				total.style.color = 'red';
				break;
			case (quantityCount > 130):
				total.style.color = 'orange';
				break;
			case (quantityCount > 120):
				total.style.color = 'blue';
				break;
			default:
				total.style.color = 'black';
		}
	}

	/* V4 - Crece textarea */
	var textareaAutosize = function() {
	  var writeBox = this;
	  setTimeout(function() {
			writeBox.style.cssText = 'height: auto; padding: 0';
	    writeBox.style.cssText = 'height:' + writeBox.scrollHeight + 'px';
	  },0);
	}

	/* Eventos */
	btn.addEventListener('click', twittear);
	textAreaPress.addEventListener('keyup', validateTweets);
	validateTweets();
	textAreaPress.addEventListener('keydown', countString);
	textAreaPress.addEventListener('keydown', textareaAutosize);
})
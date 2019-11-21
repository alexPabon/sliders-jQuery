$(document).ready(function()
	{
		var flechas = $(".laterales");
		var tamaño = parseFloat($("#contenedor").width())*$(".marco").length;
		var pos = 0;

		$("#tira").css("width",tamaño+"px");
		$(".marco").css("width",$("#contenedor").width());
		
		//hacer la tira de mini imagenes.
		 var imagenes = $(".marco");		 

		 $.each(imagenes,function(index)
		 	{
		 		$(".min_img").append('<div class="miniBoton0'+index+'"></div>');
		 	});
		 //-----------------------------------------

		//Cambia el borde del bullet en la poscion de la var pos.
		$(".min_img div").eq(pos).css({background:"black",border:"blue solid 1.5px"});

		/*Cambia la posicion de las imagenes pulsando las flechas, ademas se implementa la
		el efecto animate({},tiempo).*/
		flechas.click(function()
			{
				var divTira = parseInt($("div#tira").css("left"));
				var divConten = Math.round($("#contenedor").width());
				var desplaza_max = ($(".marco").length-1)*divConten;
				//Oculta los botones para no crear errores al pulsarlos muy seguido.
				$(".laterales").hide();
				var inicio = 0;			
				

				if($(this).attr("id")=="regr"){
					if(divTira!=inicio){
						$("div#tira").animate({left:divTira+divConten+"px"},"slow");
						pos--;
					}else{
						$("div#tira").animate({left:"-"+desplaza_max+"px"},"fast");
						pos = $(".min_img div").length-1;
					}
				}else{
					if((divTira*-1)!=desplaza_max){
						$("div#tira").animate({left:divTira-divConten+"px"},"slow");
						pos++;					
					}else{
						$("div#tira").animate({left: inicio+"px"},"fast");
						pos=0;
					}
				}

				$(".min_img div").css({background:"lightgrey",border:"blue solid 1px"})
				$(".min_img div").eq(pos).css({background:"black",border:"blue solid 1.5px"});

				//Despues de .5 seg se ejecuta para mostrar los botones.
				setTimeout(function() {$(".laterales").show("fast");}, 500);
			});


		/*Funcion para recoger la posicion de los bullets y cambiar la posicion
		de las imagenes.*/
		$(".min_img div").click(function(){
				var divConten = Math.round($("#contenedor").width());
				var posicion = $(this).attr("class");
				var num_pos = parseInt(posicion.substr(posicion.length-2,posicion.length-1));
				var desplazar = num_pos * -divConten;

				$("div#tira").css("left",desplazar+"px");				
				pos=num_pos;
				$(".min_img div").css({background:"lightgrey",border:"blue solid 1px"})
				$(".min_img div").eq(pos).css({background:"black",border:"blue solid 1.5px"});
				// alert(num_pos);
			});

	});
function faseUno()
{	
	 /*L’exercici consisteix en mostrar per consola diferents noms de ciutats partint d’un array i modificar els noms canviant lletres.
		FASE 1 (2 punts)
		Crea sis variables tipu string buides. (0,5 punts)
		Demana per consola que s’introdueixin els noms. (0,5 punts)
		Introdueix els següents noms de ciutats (Barcelona, Madrid, Valencia, Malaga, Cadis, Santander) per teclat. (0,5 punts)
		Mostra per consola el nom de les 6 ciutats. (0,5 punts*/

	var v1, v2, v3, v4, v5, v6;
	var contador=1;

	while (contador != 7) {
		
		switch (contador) {
			case 1:
				v1 = prompt("Por favor ingrese el nombre de la ciudad " + contador +" : ");
				break;
			case 2:
				v2 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				break;
			case 3:
				v3 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				break;
			case 4:
				v4 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				break;
			case 5:
				v5 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				break;
			case 6:
				v6 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				break;
			default:
		}
		contador++;
	}

	console.log("Ciudad: " + v1);
	console.log("Ciudad: " + v2);
	console.log("Ciudad: " + v3);
	console.log("Ciudad: " + v4);
	console.log("Ciudad: " + v5);
	console.log("Ciudad: " + v6);

}
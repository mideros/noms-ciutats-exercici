function faseTres()
{
/*FASE 3 (3 punts)
	 * cambieu les vocals “a” dels noms de les ciutats per el numero 4 i guardeu els noms modificats en un nou array(ArrayCiutatsModificades). (2 punts)
	 * Mostreu per consola l’array modificat i ordenat per ordre alfabetic. (1 punt)*/

	var v1, v2, v3, v4, v5, v6;
	var contador = 1;
	var arrayCity = [6];
	var arrayCityMod = [6];
	
	while (contador != 7) {

		switch (contador) {
			case 1:
				v1 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[0] = v1;
				break;
			case 2:
				v2 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[1] = v2;
				break;
			case 3:
				v3 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[2] = v3;
				break;
			case 4:
				v4 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[3] = v4;
				break;
			case 5:
				v5 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[4] = v5;
				break;
			case 6:
				v6 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
				arrayCity[5] = v6;
				break;
			default:
		}
		contador++;
	}

	arrayCity.sort();

	for (var i = 0; i < arrayCity.length; i++)
	{
		arrayCityMod[i] = arrayCity[i].replace(/a/ig, '4');
		console.log("Ciudad: " + arrayCityMod[i]);
	}
}	
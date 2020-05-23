function faseDos()
{
/*FASE 2 (2 punts) 
Un cop tenim els noms de les ciutats guardats en variables haurem de pasar l’informacio a un array (arrayCiutats). (1 punt)
Quan tinguem l’array ple, haurem de mostrar per consola el nom de les ciutats ordenadas per ordre alfabetic. (1 punt)*/

	var v1, v2, v3, v4, v5, v6;
	var contador = 1;
	var arrayCity = [6];
	var ciudad="";

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

	for (var i = 0; i < arrayCity.length; i++) {
		ciudad +="<p>" + "Ciudad: " + arrayCity[i] + "</p>";
		document.getElementById("lista").innerHTML = ciudad;
	}
}
function faseCuatro()
{ 
/*FASE 4 (3 punts)
	 * Creeu un nou array per cada una de les ciutats que tenim. La mida dels nous arrays sera la llargada de cada string
	 * ( string nomCiutat.Length). (0,5 punts)
	 * Ompliu els nous arrays lletra per lletra.(2 punts)
	 * Mostreu per consola els nous arrays amb els noms invertits (Ex: Barcelona - anolecraB). (0,5 punts)*/
	var v1, v2, v3, v4, v5, v6;
	var contador = 1;
	var array1,array2,array3,array4,array5,array6 =[];	

	while (contador != 7) {

		switch (contador) {
			case 1:
				v1 = prompt("Por favor ingrese el nombre de la ciudad " + contador + " : ");
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

	/*--------------------------------------*/
	array1 = [v1.length];
	array1 = v1.split("");
	array1.reverse();
	console.log(array1);	
	/*--------------------------------------*/	
	array2 = [v2.length];
	array2 = v2.split("");
	array2.reverse();
	console.log(array2);
	/*--------------------------------------*/
	array3 = [v3.length];
	array3 = v3.split("");
	array3.reverse();
	console.log(array3);
	/*--------------------------------------*/
	array4 = [v4.length];
	array4 = v4.split("");
	array4.reverse();
	console.log(array4);
	/*--------------------------------------*/
	array5 = [v5.length];
	array5 = v5.split("");
	array5.reverse();
	console.log(array5);
	/*--------------------------------------*/
	array6 = [v6.length];
	array6 = v6.split("");
	array6.reverse();
	console.log(array6);
	/*--------------------------------------*/
}
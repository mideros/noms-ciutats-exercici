package com.mideros.fase1;

import java.util.Scanner;

public class FaseUno {

	public static void main(String[] args) {
		/*L’exercici consisteix en mostrar per consola diferents noms de ciutats partint d’un array i modificar els noms 
		 * canviant lletres.
		 * FASE 1 (2 punts) 
		 * Crea sis variables tipu string buides. (0,5 punts)
		 * Demana per consola que s’introdueixin els noms. (0,5 punts)
		 * Introdueix els següents noms de ciutats (Barcelona, Madrid, Valencia, Malaga, Cadis, Santander) per teclat. (0,5 punts)
		 * Mostra per consola el nom de les 6 ciutats. (0,5 punts*/
		
		Scanner lector = new Scanner(System.in);
		String v1,v2,v3,v4,v5,v6; 
		v1="";
		v2="";
		v3="";
		v4="";
		v5="";
		v6="";
		int contador=1;
				
		while(contador!=7)
		{
			System.out.println("Por favor ingrese el nombre de la ciudad:");
			
			switch(contador) {
			  case 1:
				  v1 = lector.nextLine();				  
			    break;
			  case 2:
				  v2 = lector.nextLine();				
			    break;
			  case 3:
				  v3 = lector.nextLine();				 
				break;
			  case 4:
				  v4 = lector.nextLine();			
				    break;
			  case 5:
				  v5 = lector.nextLine();				  
				    break;
			  case 6:
				  v6 = lector.nextLine();				  
				    break;
			  default:				  
			}
			contador++;
		}
		
		System.out.println("Ciudad: " + v1);
		System.out.println("Ciudad: " + v2);
		System.out.println("Ciudad: " + v3);
		System.out.println("Ciudad: " + v4);
		System.out.println("Ciudad: " + v5);
		System.out.println("Ciudad: " + v6);
		
		lector.close();		
  }
}

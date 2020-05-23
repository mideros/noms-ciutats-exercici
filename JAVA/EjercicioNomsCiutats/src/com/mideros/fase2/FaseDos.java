package com.mideros.fase2;

import java.util.Arrays;
import java.util.Scanner;

public class FaseDos {

	public static void main(String[] args) {
		/*FASE 2 (2 punts)
		 * Un cop tenim els noms de les ciutats guardats en variables haurem de pasar l’informacio a un array (arrayCiutats). (1 punt)
		 * Quan tinguem l’array ple, haurem de mostrar per consola el nom de les ciutats ordenadas per ordre alfabetic. (1 punt)*/
		
		Scanner lector = new Scanner(System.in);
		String v1,v2,v3,v4,v5,v6; 
		v1="";
		v2="";
		v3="";
		v4="";
		v5="";
		v6="";
		int contador=1;
		String[] arrayCity = new String[6];
				 
		while(contador!=7)
		{
			System.out.println("Por favor ingrese el nombre de la ciudad:");
			
			switch(contador) {
			  case 1:
				  v1 = lector.nextLine();
				  arrayCity[0]=v1;
			    break;
			  case 2:
				  v2 = lector.nextLine();
				  arrayCity[1]=v2;
			    break;
			  case 3:
				  v3 = lector.nextLine();
				  arrayCity[2]=v3;
				break;
			  case 4:
				  v4 = lector.nextLine();
				  arrayCity[3]=v4;
				    break;
			  case 5:
				  v5 = lector.nextLine();
				  arrayCity[4]=v5;
				    break;
			  case 6:
				  v6 = lector.nextLine();
				  arrayCity[5]=v6;
				    break;
			  default:				  
			}
			contador++;
		}
		
		lector.close();	
		Arrays.sort(arrayCity);
		
		for(int i=0;i<arrayCity.length;i++)
		{
			System.out.println("Ciudad: " + arrayCity[i]);
		}				
	}
}

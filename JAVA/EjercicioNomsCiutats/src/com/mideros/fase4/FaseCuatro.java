package com.mideros.fase4;

import java.util.Scanner;

public class FaseCuatro {

	public static void main(String[] args) {
		/*FASE 4 (3 punts)
		 * Creeu un nou array per cada una de les ciutats que tenim. La mida dels nous arrays sera la llargada de cada string 
		 * ( string nomCiutat.Length). (0,5 punts)
		 * Ompliu els nous arrays lletra per lletra.(2 punts)
		 * Mostreu per consola els nous arrays amb els noms invertits (Ex: Barcelona - anolecraB). (0,5 punts)*/
		
		Scanner lector = new Scanner(System.in);
		String v1,v2,v3,v4,v5,v6; 
		v1="";
		v2="";
		v3="";
		v4="";
		v5="";
		v6="";
		int contador=1;
		char [] array1,array2,array3,array4,array5,array6;
		
						 
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
		
		/*--------------------------------------*/
		array1= new char [v1.length()];
		array1=v1.toCharArray();
		System.out.print("[");
		for(int i=array1.length-1;i>=0;i--)
		{
			System.out.print(" "+array1[i]+" ");			
		} 
		System.out.println("]");
			
		/*-------------------------------------*/
		
		array2= new char [v2.length()];
		array2=v2.toCharArray();
		System.out.print("[");
		for(int i=array2.length-1;i>=0;i--)
		{
			System.out.print(" "+array2[i]+" ");			
		} 
		System.out.println("]");
		
		
		/*-------------------------------------*/
		
		array3= new char [v3.length()];
		array3=v3.toCharArray();
		System.out.print("[");
		for(int i=array3.length-1;i>=0;i--)
		{
			System.out.print(" "+array3[i]+" ");			
		} 
		System.out.println("]");	
		
		/*-------------------------------------*/
		
		array4= new char [v4.length()];
		array4=v4.toCharArray();
		System.out.print("[");
		for(int i=array4.length-1;i>=0;i--)
		{
			System.out.print(" "+array4[i]+" ");			
		} 
		System.out.println("]");		
		
		/*-------------------------------------*/
		
		array5= new char [v5.length()];
		array5=v5.toCharArray();
		System.out.print("[");
		for(int i=array5.length-1;i>=0;i--)
		{
			System.out.print(" "+array5[i]+" ");			
		} 
		System.out.println("]");	
		
		/*-------------------------------------*/
		
		array6= new char [v6.length()];
		array6=v6.toCharArray();
		
		System.out.print("[");
		for(int i=array6.length-1;i>=0;i--)
		{
			System.out.print(" "+array6[i]+" ");			
		} 
		System.out.print("]");
		
		lector.close();	
	}
}

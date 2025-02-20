/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuProjetoJava;

/**
 *
 * @author Aluno
 */
public class Pessoa {
    String nome;
    int idade;
    
    public void caminhar(){System.out.println(nome+" está caminhando");}
    
    public Pessoa(String nomeNew,int idade){
    nome=nomeNew;
    this.idade=idade;
    }
}

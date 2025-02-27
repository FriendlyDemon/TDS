/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
abstract public class Clan {

    String nomeDoClan;
    String lider;

    public abstract void habilidadeEspecial();

    public abstract void ataqueEspecial();
    
    public void exibirDetalhes() {
        System.out.println("Clan " + this.nomeDoClan + " tem como lider " + this.lider);
    }
}

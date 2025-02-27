/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
public class ClanNara extends Clan {

    public ClanNara() {
        nomeDoClan = "Nara";
        lider = "Shikamaru";
    }

    @Override
    public void habilidadeEspecial() {
        System.out.println("manipulacao de sombras");
    }
    
    @Override
    public void ataqueEspecial() {
        System.out.println("prefiro evitar a fadiga");
    }
}

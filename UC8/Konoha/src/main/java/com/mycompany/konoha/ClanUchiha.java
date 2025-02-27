/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
public class ClanUchiha extends Clan {

    public ClanUchiha() {
        nomeDoClan = "Uchiha";
        lider = "Sasuke";
    }

    @Override
    public void habilidadeEspecial() {
        System.out.println("Sharingan");
    }

    @Override
    public void ataqueEspecial() {
        System.out.println("chorar");
    }
}

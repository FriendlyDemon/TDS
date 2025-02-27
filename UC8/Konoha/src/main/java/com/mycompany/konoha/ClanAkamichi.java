/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
public class ClanAkamichi extends Clan {

    public ClanAkamichi() {
        nomeDoClan = "Akamichi";
        lider = "Chouza";
    }

    @Override
    public void habilidadeEspecial() {
        System.out.println("Ampliacao comporal");
    }

    @Override
    public void ataqueEspecial() {
        System.out.println("comer");
    }
}

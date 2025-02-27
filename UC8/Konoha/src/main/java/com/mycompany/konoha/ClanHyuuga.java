/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
public class ClanHyuuga extends Clan {

    public ClanHyuuga() {
        nomeDoClan = "Hyuuga";
        lider = "Hiashi";
    }

    @Override
    public void habilidadeEspecial() {
        System.out.println("Byakugan");
    }

    @Override
    public void ataqueEspecial() {
        System.out.println("olhar para traz");
    }
}

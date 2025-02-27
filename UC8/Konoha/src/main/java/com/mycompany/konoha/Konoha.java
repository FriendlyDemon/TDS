/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.konoha;

/**
 *
 * @author Aluno
 */
public class Konoha {

    public static void main(String[] args) {
        ClanUchiha uchiha = new ClanUchiha();
        ClanHyuuga hyuuga = new ClanHyuuga();
        ClanNara nara = new ClanNara();
        ClanAkamichi akamichi = new ClanAkamichi();

        uchiha.habilidadeEspecial();
        uchiha.exibirDetalhes();

        hyuuga.habilidadeEspecial();
        hyuuga.exibirDetalhes();

        nara.habilidadeEspecial();
        nara.exibirDetalhes();

        akamichi.habilidadeEspecial();
        akamichi.exibirDetalhes();
    }
}

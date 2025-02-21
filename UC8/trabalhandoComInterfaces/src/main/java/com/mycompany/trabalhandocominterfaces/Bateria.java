/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.trabalhandocominterfaces;

/**
 *
 * @author Aluno
 */
public class Bateria implements InstrumentoMusical {

    String marca = "da Xuxa";

    @Override
    public void tocar() {
        System.out.println("A bateria da marca " + this.marca + " está tocando xuxuxu xaxaxa");
    }

    @Override
    public void afinar() {
        System.out.println("A bateria da marca " + this.marca + " está afiada só para baixinhos");
    }

}

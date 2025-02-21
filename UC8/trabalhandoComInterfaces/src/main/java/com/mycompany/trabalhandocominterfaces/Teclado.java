/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.trabalhandocominterfaces;

/**
 *
 * @author Aluno
 */
public class Teclado implements InstrumentoMusical {

    String marca = "Red Dragon";

    @Override
    public void tocar() {
        System.out.println("O teclado da marca " + this.marca + " está tocando");
    }

    @Override
    public void afinar() {
        System.out.println("O teclado da marca " + this.marca + " está afinado");
    }
}

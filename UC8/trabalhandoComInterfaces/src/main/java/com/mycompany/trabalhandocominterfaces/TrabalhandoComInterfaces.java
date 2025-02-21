/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.trabalhandocominterfaces;

/**
 *
 * @author Aluno
 */
public class TrabalhandoComInterfaces {

    public static void main(String[] args) {
        System.out.println("Hello World!");

        Violao violao = new Violao();
        Bateria bateria = new Bateria();
        Teclado teclado = new Teclado();
        
        violao.tocar();
        bateria.tocar();
        teclado.tocar();
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.exerciciointerface;

/**
 *
 * @author Aluno
 */
public class ExercicioInterface {

    public static void main(String[] args) {
        
        Paypal paypal = new Paypal("shablau@senacrs.com");
        CartaoCredito cartao = new CartaoCredito("123456789");
        
        paypal.processarPagamento(249.99);
        cartao.processarPagamento(129.90);
        
        paypal.obterDetalhes();
        cartao.obterDetalhes();
    }
}

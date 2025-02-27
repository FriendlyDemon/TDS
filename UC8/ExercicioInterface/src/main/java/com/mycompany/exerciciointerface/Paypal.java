/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.exerciciointerface;

import java.text.DecimalFormat;

/**
 *
 * @author Aluno
 */
public class Paypal implements Pagamento {

    String email;
    DecimalFormat df = new DecimalFormat("#0.00");

    @Override
    public void processarPagamento(double valor) {
        System.out.println("Pagamento de R$" + df.format(valor) + " processado via PayPal");
    }

    @Override
    public String obterDetalhes() {
        return this.email;
    }

    Paypal(String email) {
        this.email = email;
    }
}

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
public class CartaoCredito implements Pagamento {

    String numeroCartao;
    DecimalFormat df = new DecimalFormat("#0.00");

    @Override
    public void processarPagamento(double valor) {
        System.out.println("Pagamento de R$" + df.format(valor) + " processado via Cartão de Crédito");
    }

    @Override
    public String obterDetalhes() {
        return numeroCartao.substring(numeroCartao.length() - 4);
    }

    CartaoCredito(String numeroCartao) {
        this.numeroCartao = numeroCartao;
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.aula3;

import java.util.ArrayList;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Estoque {

    ArrayList<Produto> estoque;

    /**
     * Adiciona {@code quantidade} a {@code produto} em estoque. Se não ouver
     * {@code produto} no estoque, {@code produto} será adicionado com
     * {@code quantidade} como quantidade.
     *
     * @param produto Nome do produto a ser adicionado.
     * @param quantidade Quantidade de produto a adicionar.
     * @return nova quantidade do produto.
     */
    public int adicionarProduto(String produto, int quantidade) {
        for (Produto produtoAt : estoque) {
            if (produtoAt.getNome().equals(produto.toLowerCase())) {
                return produtoAt.adicionarQuantidade(quantidade);
            }
        }
        estoque.add(new Produto(produto, quantidade));
        return quantidade;
    }

    /**
     * Remove {@code quantidade} quantidade do {@code produto}.
     *
     * @param produto protudo cuja quantidade será subtraída.
     * @param quantidade quantidade a ser subtraída. deve ser menor ou igual a
     * quantidade atual.
     * @return quantidade de produto após subtração ou -1 se {@code quantidade}
     * for maior que quantidade no estoque.
     */
    public int removerProduto(String produto, int quantidade) {
        for (Produto produtoAt : estoque) {
            if (produtoAt.getNome().equals(produto.toLowerCase())) {
                int quan = produtoAt.removerQuantidade(quantidade);
                if (quan == 0) {
                    estoque.remove(produtoAt);
                }
                return quan;
            }
        }
        System.out.println("erro: produto " + produto.toLowerCase() + " não foi encontrado.");
        return -1;
    }

    /**
     * Consulta quantidade de {@code produto} no estoque.
     *
     * @param produto nome do produto a ser consultado.
     * @return quantidade do produto.
     */
    public int consultarQuantidade(String produto) {
        for (Produto produtoAt : estoque) {
            if (produtoAt.getNome().equals(produto.toLowerCase())) {
                return produtoAt.getQuantidade();
            }
        }
        return 0;
    }

    /**
     * Encontra o produto mais estocado e retorna o nome.
     *
     * @return o nome do produto mais estocado.
     */
    public String produtoMaisEstocado() {
        if (estoque.isEmpty()) {
            return "";
        } else {
            int id = 0;
            for (int i = 0; i < estoque.size(); i++) {
                if (estoque.get(i).getQuantidade() > estoque.get(id).getQuantidade()) {
                    id = i;
                }
            }
            return estoque.get(id).getNome();
        }
    }

    /**
     * Limpa estoque.
     */
    public void limparEstoque() {
        estoque.clear();
    }

    public Estoque(ArrayList<Produto> estoque) {
        this.estoque = estoque;
    }

    public Estoque() {
        this.estoque = new ArrayList<>();
    }
}

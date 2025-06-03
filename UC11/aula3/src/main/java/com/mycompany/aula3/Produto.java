/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.aula3;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Produto {

    private String nome;
    private int quantidade;

    /**
     *
     * @return o nome do Produto.
     */
    public String getNome() {
        return nome;
    }

    /**
     *
     * @param nome novo nome do Produto.
     */
    public void setNome(String nome) {
        this.nome = nome.toLowerCase();
    }

    /**
     *
     * @return quantidade atual do Produto.
     */
    public int getQuantidade() {
        return quantidade;
    }

    /**
     *
     * @param quantidade valor novo a ser aplicado a quantidade do Produto.
     */
    public void setQuantidade(int quantidade) {
        this.quantidade = quantidade;
    }

    /**
     * Addiciona {@code quantidade} ao Produto.
     *
     * @param quantidade Valor a ser adicionado a quantidade.
     * @return Quantidade final do Produto.
     */
    public int adicionarQuantidade(int quantidade) {
        this.quantidade += quantidade;

        return this.quantidade;
    }

    /**
     * {@code quantidade} deve ser menor ou igual a quantidade atual do Produto.
     *
     * @param quantidade Valor a ser subtraido da quantidade do Produto.
     * @return Retorna a quantidade final do Produto. Se {@code quantidade} for
     * maior que a quantidade atual, retorna -1.
     */
    public int removerQuantidade(int quantidade) {
        if (this.quantidade >= quantidade) {
            this.quantidade -= quantidade;
        } else {
            System.out.println("erro: tentando remover mais do que há no estoque. quantidade em estoque: " + this.quantidade + ".");
            return -1;
        }
        return this.quantidade;
    }

    /**
     * Cria um novo Produto. Nome deve ser todo em caixa baixa.
     *
     * @param nome Nome do Produto.
     * @param quantidade Quantidade do Produto
     */
    public Produto(String nome, int quantidade) {
        this.nome = nome.toLowerCase();
        this.quantidade = quantidade;
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.listaarray;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Contato {

    private String nome;
    private String telefone;

    public String getNome() {
        return this.nome;
    }

    public void setNome(String Nome) {
        this.nome = Nome;
    }

    public String getTelefone() {
        return this.telefone;
    }

    public void setTelefone(String Telefone) {
        this.telefone = Telefone;
    }

    public String getContato() {
        return this.nome + " - " + this.telefone;
    }

    public Contato(String Nome, String Telefone) {
        nome = Nome;
        telefone = Telefone;
    }
}

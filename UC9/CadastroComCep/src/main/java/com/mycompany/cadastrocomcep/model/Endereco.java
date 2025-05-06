/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.model;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Endereco {

    private String cep;
    private String rua;
    private String bairro;
    private String cidade;
    private String estado;

    public String getCep() {
        return cep;
    }

    public void setCep(String cep) {
        this.cep = cep;
    }

    public String getRua() {
        return rua;
    }

    public void setRua(String rua) {
        this.rua = rua;
    }

    public String getBairro() {
        return bairro;
    }

    public void setBairro(String bairro) {
        this.bairro = bairro;
    }

    public String getCidade() {
        return cidade;
    }

    public void setCidade(String cidade) {
        this.cidade = cidade;
    }

    public String getEstado() {
        return estado;
    }

    public void setEstado(String estado) {
        this.estado = estado;
    }

    public String getEstadoExtenso() {
        String ref = "";
        switch (estado) {
            case "AC" -> ref = "Acre";
            case "AL" -> ref = "Alagoas";
            case "AP" -> ref = "Amapá";
            case "AM" -> ref = "Amazonas";
            case "BA" -> ref = "Bahia";
            case "CE" -> ref = "Ceará";
            case "ES" -> ref = "Espirito Santo";
            case "DF" -> ref = "Destrito Federal";
            case "GO" -> ref = "Goiás";
            case "MA" -> ref = "Maranhão";
            case "MT" -> ref = "Mato Grosso";
            case "MS" -> ref = "Mato Grosso do Sul";
            case "MG" -> ref = "Minas Gerais";
            case "PA" -> ref = "Pará";
            case "PB" -> ref = "Paraíba";
            case "PR" -> ref = "Paraná";
            case "PE" -> ref = "Pernambuco";
            case "PI" -> ref = "Piauí";
            case "RJ" -> ref = "Rio de Janeiro";
            case "RN" -> ref = "Rio Grande do Norte";
            case "RS" -> ref = "Rio Grande do Sul";
            case "RO" -> ref = "Rondônia";
            case "RR" -> ref = "Roraima";
            case "SC" -> ref = "Santa Catarina";
            case "SP" -> ref = "São Paulo";
            case "SE" -> ref = "Sergipe";
            case "TO" -> ref = "Tocantins";
        }
        return ref;
    }

    public Endereco(String cep, String rua, String bairro, String cidade, String estado) {
        this.cep = cep;
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }
}

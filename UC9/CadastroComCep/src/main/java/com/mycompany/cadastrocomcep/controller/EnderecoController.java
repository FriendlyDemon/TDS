/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.cadastrocomcep.controller;

import com.mycompany.cadastrocomcep.dao.EnderecoDAO;
import com.mycompany.cadastrocomcep.model.Endereco;
import com.mycompany.cadastrocomcep.service.CepService;
import org.json.JSONObject;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class EnderecoController {

    public static boolean registrarEndereco(String cep) {
        try {
            JSONObject enderecoJson = CepService.buscarCep(cep);

            if (enderecoJson.has("erro")) {
                System.out.println("CEP invalido");
                return false;
            }

            Endereco endereco = new Endereco(
                    cep,
                    enderecoJson.getString("logradouro"),
                    enderecoJson.getString("bairro"),
                    enderecoJson.getString("localidade"),
                    enderecoJson.getString("uf")
            );
            return EnderecoDAO.registrarEndereco(endereco);

        } catch (Exception e) {
            System.out.println(e.getMessage());
            return false;
        }
    }

    public static Endereco buscarEnderecoPorCep(String cep) {
        return EnderecoDAO.buscarEndereco(cep);
    }

    public static boolean validarCep(String cep) {
        boolean valid = false;
        try {
            JSONObject enderecoJson = CepService.buscarCep(cep);

            if (!enderecoJson.has("erro")) {
                valid = true;
            } else {
                System.out.println("CEP invalido");
            }
        } catch (Exception e) {
            System.out.println(e.getMessage());
        }

        return valid;
    }
}

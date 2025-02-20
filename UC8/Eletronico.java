/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package meuProjetoJava;

/**
 *
 * @author Aluno
 */
public class Eletronico extends Produto {

    private int tensao;

    public int getTensao() {
        return tensao;
    }

    public Eletronico(String eleNome, double elePreco, int eleTensao) {
        super(eleNome, elePreco);
        tensao = eleTensao;
    }

}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.mycompany.cadastrocomcep.view;

import com.mycompany.cadastrocomcep.controller.EnderecoController;
import com.mycompany.cadastrocomcep.controller.UsuarioController;
import java.awt.Color;
import javax.swing.JOptionPane;
import javax.swing.border.LineBorder;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Registrar extends javax.swing.JFrame {

    boolean valCep = false;

    public Registrar(String email) {
        initComponents();
        setLocationRelativeTo(null);
        emaFie.setText(email);
        valBtn.setBorder(new LineBorder(Color.BLACK));
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jPanel1 = new javax.swing.JPanel();
        regBTN = new javax.swing.JButton();
        emaFie = new javax.swing.JTextField();
        nomFie = new javax.swing.JTextField();
        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        senLab = new javax.swing.JLabel();
        senFie = new javax.swing.JPasswordField();
        cepFie = new javax.swing.JTextField();
        cepLab = new javax.swing.JLabel();
        numFie = new javax.swing.JTextField();
        NumLab = new javax.swing.JLabel();
        valBtn = new javax.swing.JButton();
        volBtn = new javax.swing.JButton();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        regBTN.setText("Registrar");
        regBTN.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                regBTNActionPerformed(evt);
            }
        });

        jLabel1.setText("Nome");

        jLabel2.setText("Email");

        senLab.setText("Senha");

        cepFie.addKeyListener(new java.awt.event.KeyAdapter() {
            public void keyTyped(java.awt.event.KeyEvent evt) {
                cepFieKeyTyped(evt);
            }
        });

        cepLab.setText("CEP");

        NumLab.setText("Numero");

        valBtn.setText("Validar");
        valBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                valBtnActionPerformed(evt);
            }
        });

        volBtn.setText("Voltar");
        volBtn.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                volBtnActionPerformed(evt);
            }
        });

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addContainerGap(180, Short.MAX_VALUE)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(regBTN)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addComponent(jLabel1)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addComponent(nomFie, javax.swing.GroupLayout.PREFERRED_SIZE, 267, javax.swing.GroupLayout.PREFERRED_SIZE))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(senLab)
                            .addComponent(jLabel2)
                            .addComponent(cepLab)
                            .addComponent(NumLab))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(numFie, javax.swing.GroupLayout.Alignment.TRAILING, javax.swing.GroupLayout.DEFAULT_SIZE, 267, Short.MAX_VALUE)
                            .addComponent(cepFie)
                            .addComponent(emaFie)
                            .addComponent(senFie))))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(valBtn)
                .addGap(69, 69, 69))
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addComponent(volBtn)
                .addGap(0, 0, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, jPanel1Layout.createSequentialGroup()
                .addComponent(volBtn)
                .addGap(161, 161, 161)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(nomFie, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel1))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(emaFie, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(jLabel2))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(senLab)
                    .addComponent(senFie, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(cepFie, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(cepLab)
                    .addComponent(valBtn))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(numFie, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                    .addComponent(NumLab))
                .addGap(24, 24, 24)
                .addComponent(regBTN)
                .addContainerGap(160, Short.MAX_VALUE))
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents

    private void regBTNActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_regBTNActionPerformed
        boolean validUser = true;
        String message = "Erro:";
        if (nomFie.getText().isBlank()) {
            message += "\nnome vazio";
            validUser = false;
        }
        if (emaFie.getText().isBlank()) {
            message += "\nemail vazio";
            validUser = false;
        } else if (!UsuarioController.emailValido(emaFie.getText())) {
            message += "\nemail inválido";
            validUser = false;
        }
        if (senFie.getPassword().length == 0) {
            message += "\nsenha vazia";
            validUser = false;
        }
        if (!valCep) {
            message += "\ncep invalido";
            validUser = false;
        }
        if (numFie.getText().isBlank()) {
            message += "\nnumero vazio";
            validUser = false;
        }
        if (validUser) {
            if (UsuarioController.registrarUsuario(nomFie.getText(), emaFie.getText(), senFie.getPassword(), cepFie.getText(), numFie.getText())) {
                new TelaUsuario(UsuarioController.validarLogin(emaFie.getText(), senFie.getPassword())).setVisible(true);
                this.dispose();
            }
        } else {
            JOptionPane.showMessageDialog(this, message);
        }
    }//GEN-LAST:event_regBTNActionPerformed

    private void valBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_valBtnActionPerformed
        if (EnderecoController.validarCep(cepFie.getText())) {

            valBtn.setBorder(new LineBorder(Color.GREEN));
            valCep = true;

        } else {

            valBtn.setBorder(new LineBorder(Color.RED));
            valCep = false;
        }
    }//GEN-LAST:event_valBtnActionPerformed

    private void cepFieKeyTyped(java.awt.event.KeyEvent evt) {//GEN-FIRST:event_cepFieKeyTyped
        valBtn.setBorder(new LineBorder(Color.BLACK));
        valCep = false;
    }//GEN-LAST:event_cepFieKeyTyped

    private void volBtnActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_volBtnActionPerformed
        new Login().setVisible(true);
        this.dispose();
    }//GEN-LAST:event_volBtnActionPerformed


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel NumLab;
    private javax.swing.JTextField cepFie;
    private javax.swing.JLabel cepLab;
    private javax.swing.JTextField emaFie;
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JTextField nomFie;
    private javax.swing.JTextField numFie;
    private javax.swing.JButton regBTN;
    private javax.swing.JPasswordField senFie;
    private javax.swing.JLabel senLab;
    private javax.swing.JButton valBtn;
    private javax.swing.JButton volBtn;
    // End of variables declaration//GEN-END:variables
}

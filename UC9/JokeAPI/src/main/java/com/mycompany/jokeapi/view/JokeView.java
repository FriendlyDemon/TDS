/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/GUIForms/JFrame.java to edit this template
 */
package com.mycompany.jokeapi.view;

import com.mycompany.jokeapi.Controller.JokeController;
import com.mycompany.jokeapi.model.Joke;

public class JokeView extends javax.swing.JFrame {

    /**
     * Creates new form JokeView
     */
    public JokeView() {
        initComponents();
        catAny.setSelected(true);
        typSin.setSelected(true);
        typTwo.setSelected(true);
        setLocationRelativeTo(null);
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
        catAny = new javax.swing.JCheckBox();
        catPro = new javax.swing.JCheckBox();
        catMis = new javax.swing.JCheckBox();
        catDar = new javax.swing.JCheckBox();
        catPun = new javax.swing.JCheckBox();
        catSpo = new javax.swing.JCheckBox();
        catChr = new javax.swing.JCheckBox();
        categoriesLabel = new javax.swing.JLabel();
        blacklistedLabel = new javax.swing.JLabel();
        flaNSF = new javax.swing.JCheckBox();
        flaRel = new javax.swing.JCheckBox();
        flaPol = new javax.swing.JCheckBox();
        flaRac = new javax.swing.JCheckBox();
        flaSex = new javax.swing.JCheckBox();
        flaExp = new javax.swing.JCheckBox();
        jokeTypeLabel = new javax.swing.JLabel();
        typSin = new javax.swing.JCheckBox();
        typTwo = new javax.swing.JCheckBox();
        RequestBTN = new javax.swing.JButton();
        jScrollPane1 = new javax.swing.JScrollPane();
        jTextArea1 = new javax.swing.JTextArea();
        queryField = new javax.swing.JTextField();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        catAny.setText("Any");
        catAny.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catAnyActionPerformed(evt);
            }
        });

        catPro.setText("Programming");
        catPro.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catProActionPerformed(evt);
            }
        });

        catMis.setText("Misc");
        catMis.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catMisActionPerformed(evt);
            }
        });

        catDar.setText("Dark");
        catDar.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catDarActionPerformed(evt);
            }
        });

        catPun.setText("Pun");
        catPun.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catPunActionPerformed(evt);
            }
        });

        catSpo.setText("Spooky");
        catSpo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catSpoActionPerformed(evt);
            }
        });

        catChr.setText("Christmas");
        catChr.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                catChrActionPerformed(evt);
            }
        });

        categoriesLabel.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        categoriesLabel.setText("Categories");

        blacklistedLabel.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        blacklistedLabel.setText("Blacklisted Flags");

        flaNSF.setText("NSFW");
        flaNSF.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaNSFActionPerformed(evt);
            }
        });

        flaRel.setText("Religious");
        flaRel.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaRelActionPerformed(evt);
            }
        });

        flaPol.setText("Political");
        flaPol.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaPolActionPerformed(evt);
            }
        });

        flaRac.setText("Racist");
        flaRac.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaRacActionPerformed(evt);
            }
        });

        flaSex.setText("Sexist");
        flaSex.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaSexActionPerformed(evt);
            }
        });

        flaExp.setText("Explicist");
        flaExp.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                flaExpActionPerformed(evt);
            }
        });

        jokeTypeLabel.setFont(new java.awt.Font("Segoe UI", 0, 18)); // NOI18N
        jokeTypeLabel.setText("Joke Type");

        typSin.setText("Single");
        typSin.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                typSinActionPerformed(evt);
            }
        });

        typTwo.setText("Two Part");
        typTwo.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                typTwoActionPerformed(evt);
            }
        });

        RequestBTN.setText("Request Joke");
        RequestBTN.addActionListener(new java.awt.event.ActionListener() {
            public void actionPerformed(java.awt.event.ActionEvent evt) {
                RequestBTNActionPerformed(evt);
            }
        });

        jTextArea1.setColumns(20);
        jTextArea1.setRows(5);
        jScrollPane1.setViewportView(jTextArea1);

        queryField.setText("https://v2.jokeapi.dev/joke/");
        queryField.setEnabled(false);

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(50, 50, 50)
                        .addComponent(categoriesLabel)
                        .addGap(18, 18, 18)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(catPro)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(catMis)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(catDar)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(catPun)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(catSpo)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(catChr))
                            .addComponent(catAny)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addContainerGap()
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.TRAILING)
                            .addComponent(jokeTypeLabel)
                            .addComponent(blacklistedLabel))
                        .addGap(18, 18, 18)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(flaNSF)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(flaRel)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(flaPol)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(flaRac)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(flaSex)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(flaExp))
                            .addGroup(jPanel1Layout.createSequentialGroup()
                                .addComponent(typSin)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(typTwo))
                            .addComponent(RequestBTN)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(30, 30, 30)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                            .addComponent(jScrollPane1, javax.swing.GroupLayout.DEFAULT_SIZE, 637, Short.MAX_VALUE)
                            .addComponent(queryField))))
                .addContainerGap(31, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(50, 50, 50)
                        .addComponent(categoriesLabel)
                        .addGap(49, 49, 49)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(blacklistedLabel)
                            .addComponent(flaNSF)
                            .addComponent(flaRel)
                            .addComponent(flaPol)
                            .addComponent(flaRac)
                            .addComponent(flaSex)
                            .addComponent(flaExp)))
                    .addGroup(jPanel1Layout.createSequentialGroup()
                        .addGap(36, 36, 36)
                        .addComponent(catAny)
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                        .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                            .addComponent(catPro)
                            .addComponent(catMis)
                            .addComponent(catDar)
                            .addComponent(catPun)
                            .addComponent(catSpo)
                            .addComponent(catChr))))
                .addGap(35, 35, 35)
                .addGroup(jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jokeTypeLabel)
                    .addComponent(typSin)
                    .addComponent(typTwo))
                .addGap(51, 51, 51)
                .addComponent(RequestBTN)
                .addGap(32, 32, 32)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 164, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 25, Short.MAX_VALUE)
                .addComponent(queryField, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addContainerGap())
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

    private void catAnyActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catAnyActionPerformed
        catPro.setSelected(false);
        catMis.setSelected(false);
        catPun.setSelected(false);
        catDar.setSelected(false);
        catSpo.setSelected(false);
        catChr.setSelected(false);
        catAny.setSelected(true);
        query();
    }//GEN-LAST:event_catAnyActionPerformed

    private void catProActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catProActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catProActionPerformed

    private void catMisActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catMisActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catMisActionPerformed

    private void catDarActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catDarActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catDarActionPerformed

    private void catPunActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catPunActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catPunActionPerformed

    private void catSpoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catSpoActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catSpoActionPerformed

    private void catChrActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_catChrActionPerformed
        if (!catPro.isSelected()
                && !catMis.isSelected()
                && !catPun.isSelected()
                && !catDar.isSelected()
                && !catSpo.isSelected()
                && !catChr.isSelected()) {

            catAny.setSelected(true);
        } else {
            catAny.setSelected(false);
        }
        query();
    }//GEN-LAST:event_catChrActionPerformed

    private void RequestBTNActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_RequestBTNActionPerformed
        String filters = JokeController.buildString(catAny.isSelected(), catPro.isSelected(),
                catMis.isSelected(), catDar.isSelected(), catPun.isSelected(), catSpo.isSelected(),
                catChr.isSelected(), flaNSF.isSelected(), flaRel.isSelected(), flaPol.isSelected(),
                flaRac.isSelected(), flaSex.isSelected(), flaExp.isSelected(), typSin.isSelected(),
                typTwo.isSelected());
        try {
            Joke joke = JokeController.getJoke(filters);
            jTextArea1.setText(joke.toString());
        } catch (Exception e) {
            System.out.println("error:"+e);
        }
    }//GEN-LAST:event_RequestBTNActionPerformed

    private void flaNSFActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaNSFActionPerformed
        query();
    }//GEN-LAST:event_flaNSFActionPerformed

    private void flaRelActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaRelActionPerformed
        query();
    }//GEN-LAST:event_flaRelActionPerformed

    private void flaPolActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaPolActionPerformed
        query();
    }//GEN-LAST:event_flaPolActionPerformed

    private void flaRacActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaRacActionPerformed
        query();
    }//GEN-LAST:event_flaRacActionPerformed

    private void flaSexActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaSexActionPerformed
        query();
    }//GEN-LAST:event_flaSexActionPerformed

    private void flaExpActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_flaExpActionPerformed
        query();
    }//GEN-LAST:event_flaExpActionPerformed

    private void typSinActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_typSinActionPerformed
        if (!typSin.isSelected() && !typTwo.isSelected()) {
            typTwo.setSelected(true);
        }
        query();
    }//GEN-LAST:event_typSinActionPerformed

    private void typTwoActionPerformed(java.awt.event.ActionEvent evt) {//GEN-FIRST:event_typTwoActionPerformed
        if (!typSin.isSelected() && !typTwo.isSelected()) {
            typSin.setSelected(true);
        }
        query();
    }//GEN-LAST:event_typTwoActionPerformed

    private void query() {
        String filters = JokeController.buildString(catAny.isSelected(), catPro.isSelected(),
                catMis.isSelected(), catDar.isSelected(), catPun.isSelected(), catSpo.isSelected(),
                catChr.isSelected(), flaNSF.isSelected(), flaRel.isSelected(), flaPol.isSelected(),
                flaRac.isSelected(), flaSex.isSelected(), flaExp.isSelected(), typSin.isSelected(),
                typTwo.isSelected());
        queryField.setText("https://v2.jokeapi.dev/joke/" + filters);
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JButton RequestBTN;
    private javax.swing.JLabel blacklistedLabel;
    private javax.swing.JCheckBox catAny;
    private javax.swing.JCheckBox catChr;
    private javax.swing.JCheckBox catDar;
    private javax.swing.JCheckBox catMis;
    private javax.swing.JCheckBox catPro;
    private javax.swing.JCheckBox catPun;
    private javax.swing.JCheckBox catSpo;
    private javax.swing.JLabel categoriesLabel;
    private javax.swing.JCheckBox flaExp;
    private javax.swing.JCheckBox flaNSF;
    private javax.swing.JCheckBox flaPol;
    private javax.swing.JCheckBox flaRac;
    private javax.swing.JCheckBox flaRel;
    private javax.swing.JCheckBox flaSex;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JTextArea jTextArea1;
    private javax.swing.JLabel jokeTypeLabel;
    private javax.swing.JTextField queryField;
    private javax.swing.JCheckBox typSin;
    private javax.swing.JCheckBox typTwo;
    // End of variables declaration//GEN-END:variables
}

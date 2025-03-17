/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.filetest;

import java.io.File;

/**
 *
 * @author henri
 */
public class FileTest {

    public static void main(String[] args) {

        WriteObject.writeToFile(new File("save1.save"), new Character("Jessie", 12));
        Character readObject = WriteObject.readFromFile(new File("save1.save"));

        System.out.println(readObject.getName());

    }
}

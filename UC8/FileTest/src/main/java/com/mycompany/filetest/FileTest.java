/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 */
package com.mycompany.filetest;

import java.io.File;
import java.io.FileOutputStream;
import java.io.FileWriter;
import java.io.IOException;
import java.io.ObjectOutputStream;

/**
 *
 * @author henri
 */
public class FileTest {
    public static void main(String[] args) {
    /*
        WriteObject.writeToFile(new File("save1.save"),new Character("James",5));
    }
    */
    Object readObject = WriteObject.readFromFile(new File("save1.save"));
    
}

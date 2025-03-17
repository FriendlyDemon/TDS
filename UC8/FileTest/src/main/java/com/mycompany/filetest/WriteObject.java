/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.filetest;

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.NotSerializableException;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;

/**
 *
 * @author henri
 */
public class WriteObject {

    public static void writeToFile(File path, Character data) {
        try (var write = new ObjectOutputStream(new FileOutputStream(path))) {
            write.writeObject(data);
            System.out.println("Saved!");
            write.close();
        } catch (NotSerializableException nse) {
            System.out.println(nse);
        } catch (IOException eio) {
            System.out.println(eio);
        }
    }

    public static Character readFromFile(File path) {
        Character data = null;

        try (ObjectInputStream inFile = new ObjectInputStream(new FileInputStream(path))) {
            data = (Character) inFile.readObject();
        } catch (ClassNotFoundException cnfe) {
            System.out.println(cnfe);
        } catch (FileNotFoundException fnfe) {
            System.out.println(fnfe);
        } catch (IOException e) {
            System.out.println(e);
        }
        return data;
    }
}

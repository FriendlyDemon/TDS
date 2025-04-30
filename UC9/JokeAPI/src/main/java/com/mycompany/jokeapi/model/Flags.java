/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.jokeapi.model;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class Flags {

    private boolean nsfw;
    private boolean religious;
    private boolean political;
    private boolean racist;
    private boolean sexist;
    private boolean explicit;

    public boolean isNsfw() {
        return nsfw;
    }

    public void setNsfw(boolean nsfw) {
        this.nsfw = nsfw;
    }

    public boolean isReligious() {
        return religious;
    }

    public void setReligious(boolean religious) {
        this.religious = religious;
    }

    public boolean isPolitical() {
        return political;
    }

    public void setPolitical(boolean political) {
        this.political = political;
    }

    public boolean isRacist() {
        return racist;
    }

    public void setRacist(boolean racist) {
        this.racist = racist;
    }

    public boolean isSexist() {
        return sexist;
    }

    public void setSexist(boolean sexist) {
        this.sexist = sexist;
    }

    public boolean isExplicit() {
        return explicit;
    }

    public void setExplicit(boolean explicit) {
        this.explicit = explicit;
    }

    public Flags(boolean nsfw, boolean religious, boolean political, boolean racist, boolean sexist, boolean explicit) {
        this.nsfw = nsfw;
        this.religious = religious;
        this.political = political;
        this.racist = racist;
        this.sexist = sexist;
        this.explicit = explicit;
    }

    public String toString() {
        String string = "nsfw: " + nsfw + " religious: " + religious + " political: " + political + " racist: " + racist + " sexist: " + sexist + " explicit: " + explicit;
        return string;
    }

}

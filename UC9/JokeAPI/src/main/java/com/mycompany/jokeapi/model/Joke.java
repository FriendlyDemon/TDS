/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.jokeapi.model;

public class Joke {

    private String category;
    private String type;
    private String setup;
    private String delivery;
    private String joke;
    private Flags flags;
    private boolean safe;
    private String language;

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSetup() {
        return setup;
    }

    public void setSetup(String setup) {
        this.setup = setup;
    }

    public String getDelivery() {
        return delivery;
    }

    public void setDelivery(String delivery) {
        this.delivery = delivery;
    }

    public String getJoke() {
        return joke;
    }

    public void setJoke(String joke) {
        this.joke = joke;
    }

    public Flags getFlags() {
        return flags;
    }

    public void setFlags(Flags flags) {
        this.flags = flags;
    }

    public boolean isSafe() {
        return safe;
    }

    public void setSafe(boolean safe) {
        this.safe = safe;
    }

    public String getLanguage() {
        return language;
    }

    public void setLanguage(String language) {
        this.language = language;
    }

    public Joke(String category, String type, String setup, String delivery, Flags flags, boolean safe, String language) {
        this.category = category;
        this.type = type;
        this.setup = setup;
        this.delivery = delivery;
        this.flags = flags;
        this.safe = safe;
        this.language = language;
    }

    public Joke(String category, String type, String joke, Flags flags, boolean safe, String language) {
        this.category = category;
        this.type = type;
        this.joke = joke;
        this.flags = flags;
        this.safe = safe;
        this.language = language;
    }

    public String toString() {
        if ("single".equals(this.type)) {
            return "Category: " + this.category + " Type: " + this.type + " safe: " + this.safe
                    + "\n" + this.flags.toString() + "\n\n" + this.joke;
        } else {
            return "Category: " + this.category + " Type: " + this.type + " safe: " + this.safe
                    + "\n" + this.flags.toString() + "\n\n" + this.setup + "\n" + this.delivery;
        }
    }
}

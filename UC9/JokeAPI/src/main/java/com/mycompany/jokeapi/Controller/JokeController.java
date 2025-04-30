/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.jokeapi.Controller;

import com.mycompany.jokeapi.model.Flags;
import com.mycompany.jokeapi.model.Joke;
import com.mycompany.jokeapi.service.JokeService;
import org.json.JSONObject;

public class JokeController {

    public static Joke getJoke(String filters) throws Exception {
        JSONObject JokeJson = JokeService.getJoke(filters);
        if (JokeJson.getBoolean("error") == true) {
            return null;
        } else if ("single".equals(JokeJson.getString("type"))) {
            return new Joke(JokeJson.getString("category"),
                    JokeJson.getString("type"),
                    JokeJson.getString("joke"),
                    new Flags(JokeJson.getJSONObject("flags").getBoolean("nsfw"),
                            JokeJson.getJSONObject("flags").getBoolean("religious"),
                            JokeJson.getJSONObject("flags").getBoolean("political"),
                            JokeJson.getJSONObject("flags").getBoolean("racist"),
                            JokeJson.getJSONObject("flags").getBoolean("sexist"),
                            JokeJson.getJSONObject("flags").getBoolean("explicit")),
                    JokeJson.getBoolean("safe"),
                    JokeJson.getString("lang"));
        } else {
            return new Joke(JokeJson.getString("category"),
                    JokeJson.getString("type"),
                    JokeJson.getString("setup"),
                    JokeJson.getString("delivery"),
                    new Flags(JokeJson.getJSONObject("flags").getBoolean("nsfw"),
                            JokeJson.getJSONObject("flags").getBoolean("religious"),
                            JokeJson.getJSONObject("flags").getBoolean("political"),
                            JokeJson.getJSONObject("flags").getBoolean("racist"),
                            JokeJson.getJSONObject("flags").getBoolean("sexist"),
                            JokeJson.getJSONObject("flags").getBoolean("explicit")),
                    JokeJson.getBoolean("safe"),
                    JokeJson.getString("lang"));
        }
    }

    public static String buildString(boolean any, boolean programming,
            boolean misc, boolean dark, boolean pun, boolean spooky,
            boolean christmas, boolean nsfw, boolean religious,
            boolean political, boolean racist, boolean sexist,
            boolean explicit, boolean single, boolean twopart) {
        String category = "";
        String flag = "";
        String type = "";
        if (any) {
            category = "Any";
        } else {

            if (programming) {
                category = "programming";
            }
            if (misc) {
                if (category.isBlank()) {
                    category = "Misc";
                } else {
                    category += ",Misc";
                }
            }
            if (dark) {
                if (category.isBlank()) {
                    category = "Dark";
                } else {
                    category += ",Dark";
                }
            }
            if (pun) {
                if (category.isBlank()) {
                    category = "Pun";
                } else {
                    category += ",Pun";
                }
            }
            if (spooky) {
                if (category.isBlank()) {
                    category = "Spooky";
                } else {
                    category += ",Spooky";
                }
            }
            if (christmas) {
                if (category.isBlank()) {
                    category = "Christmas";
                } else {
                    category += ",Christmas";
                }
            }
        }
        if (nsfw) {
            flag = "nsfw";
        }
        if (religious) {
            if (flag.isBlank()) {
                flag = "religious";
            } else {
                flag += ",religious";
            }
        }
        if (political) {
            if (flag.isBlank()) {
                flag = "political";
            } else {
                flag += ",political";
            }
        }
        if (racist) {
            if (flag.isBlank()) {
                flag = "racist";
            } else {
                flag += ",racist";
            }
        }
        if (sexist) {
            if (flag.isBlank()) {
                flag = "sexist";
            } else {
                flag += ",sexist";
            }
        }
        if (explicit) {
            if (flag.isBlank()) {
                flag = "explicit";
            } else {
                flag += ",explicit";
            }
        }

        if (single && !twopart) {
            type = "single";
        } else if (!single && twopart) {
            type = "twopart";
        }
        String filter = category;
        if (!flag.isBlank()) {
            filter += "?blacklistFlags=" + flag;
        }
        if (!type.isBlank() && flag.isBlank()) {
            filter += "?type=" + type;
        } else if (!type.isBlank() && !flag.isBlank()) {
            filter += "&type=" + type;
        }
        return filter;
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.snake;

import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class MovementAndCollision implements KeyListener {

    private final SnakeGame snakeGame;

    public void move() {
        if (snakeGame.collision(snakeGame.snakeHead, snakeGame.food)) {
            snakeGame.snakeBody.add(new Tile(snakeGame.food.x, snakeGame.food.y));
            snakeGame.placeFood();
        }
        for (int i = snakeGame.snakeBody.size() - 1; i >= 0; i--) {
            Tile snakePart = snakeGame.snakeBody.get(i);
            if (i == 0) {
                snakePart.x = snakeGame.snakeHead.x;
                snakePart.y = snakeGame.snakeHead.y;
            } else {
                Tile prevSnakePart = snakeGame.snakeBody.get(i - 1);

                snakePart.x = prevSnakePart.x;
                snakePart.y = prevSnakePart.y;
            }
        }
        snakeGame.snakeHead.x += snakeGame.velocityX;
        snakeGame.snakeHead.y += snakeGame.velocityY;
        //
    }

    public boolean collision(Tile tile1, Tile tile2) {
        return true;
    }

    public MovementAndCollision(SnakeGame game) {
        this.snakeGame = game;
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {

    }

    @Override
    public void keyReleased(KeyEvent e) {

    }
}

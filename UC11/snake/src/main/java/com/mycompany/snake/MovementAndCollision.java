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

        for (int i = 0; i < snakeGame.snakeBody.size(); i++) {
            Tile snakePart = snakeGame.snakeBody.get(i);
            if (snakeGame.collision(snakeGame.snakeHead, snakePart)) {
                snakeGame.gameOver = true;
            }
        }

        if (snakeGame.snakeHead.x * snakeGame.tileSize < 0
                || snakeGame.snakeHead.x * snakeGame.tileSize >= snakeGame.boardWidth
                || snakeGame.snakeHead.y * snakeGame.tileSize < 0
                || snakeGame.snakeHead.y * snakeGame.tileSize >= snakeGame.boardHeight) {
            snakeGame.gameOver = true;
        }
    }

    public boolean collision(Tile tile1, Tile tile2) {
        return tile1.x == tile2.x && tile1.y == tile2.y;
    }

    public MovementAndCollision(SnakeGame game) {
        this.snakeGame = game;
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyPressed(KeyEvent e) {
        switch (e.getKeyCode()) {
            case KeyEvent.VK_UP -> {
                if (snakeGame.velocityY != 1) {
                    snakeGame.velocityX = 0;
                    snakeGame.velocityY = -1;
                }
            }
            case KeyEvent.VK_W -> {
                if (snakeGame.velocityY != 1) {
                    snakeGame.velocityX = 0;
                    snakeGame.velocityY = -1;
                }
            }
            case KeyEvent.VK_DOWN -> {
                if (snakeGame.velocityY != -1) {
                    snakeGame.velocityX = 0;
                    snakeGame.velocityY = 1;
                }
            }
            case KeyEvent.VK_S -> {
                if (snakeGame.velocityY != -1) {
                    snakeGame.velocityX = 0;
                    snakeGame.velocityY = 1;
                }
            }
            case KeyEvent.VK_LEFT -> {
                if (snakeGame.velocityX != 1) {
                    snakeGame.velocityX = -1;
                    snakeGame.velocityY = 0;
                }
            }
            case KeyEvent.VK_A -> {
                if (snakeGame.velocityX != 1) {
                    snakeGame.velocityX = -1;
                    snakeGame.velocityY = 0;
                }
            }
            case KeyEvent.VK_RIGHT -> {
                if (snakeGame.velocityX != -1) {
                    snakeGame.velocityX = 1;
                    snakeGame.velocityY = 0;
                }
            }
            case KeyEvent.VK_D -> {
                if (snakeGame.velocityX != -1) {
                    snakeGame.velocityX = 1;
                    snakeGame.velocityY = 0;
                }
            }
            case KeyEvent.VK_SPACE -> {
                if (snakeGame.gameLoop.isRunning()) {
                    snakeGame.gameLoop.stop();
                } else if (!snakeGame.gameOver) {
                    snakeGame.gameLoop.restart();
                }
            }
        }
    }

    @Override
    public void keyReleased(KeyEvent e
    ) {

    }
}

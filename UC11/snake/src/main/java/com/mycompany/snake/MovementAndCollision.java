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
        //sair da tela
        if ((snakeGame.snakeHead.x + snakeGame.velocityX) * snakeGame.tileSize < 0
                || (snakeGame.snakeHead.x + snakeGame.velocityX) * snakeGame.tileSize > snakeGame.boardWidth - snakeGame.tileSize
                || (snakeGame.snakeHead.y + snakeGame.velocityY) * snakeGame.tileSize < 0
                || (snakeGame.snakeHead.y + snakeGame.velocityY) * snakeGame.tileSize > snakeGame.boardHeight - snakeGame.tileSize) {
            snakeGame.gameOver = true;
            return;
        }

        //comer
        if (snakeGame.collision(snakeGame.snakeHead, snakeGame.food)) {
            snakeGame.snakeBody.add(new Tile(snakeGame.food.x, snakeGame.food.y));
            snakeGame.placeFood();
        }

        //mover corpo
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

        //mover cabeça
        snakeGame.snakeHead.x += snakeGame.velocityX;
        snakeGame.snakeHead.y += snakeGame.velocityY;

        //bater no corpo
        for (int i = 0; i < snakeGame.snakeBody.size(); i++) {
            Tile snakePart = snakeGame.snakeBody.get(i);
            if (snakeGame.collision(snakeGame.snakeHead, snakePart)) {
                snakeGame.gameOver = true;
            }
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

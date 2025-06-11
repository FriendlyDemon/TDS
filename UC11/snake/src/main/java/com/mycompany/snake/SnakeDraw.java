/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.snake;

import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import javax.swing.JPanel;

/**
 *
 * @author HENRIQUEMICHEL
 */
public class SnakeDraw extends JPanel {

    private final SnakeGame snakeGame;

    public void paintComponent(Graphics g, Tile food) {
        super.paintComponent(g);
        draw(g, food);
    }

    public void draw(Graphics g, Tile food) {
        for (int i = 0; i < snakeGame.boardWidth / snakeGame.tileSize; i++) {
            g.drawLine(i * snakeGame.tileSize, 0, i * snakeGame.tileSize, snakeGame.boardHeight);
            g.drawLine(0, i * snakeGame.tileSize, snakeGame.boardWidth, i * snakeGame.tileSize);
        }

        g.setColor(Color.red);
        g.fillRect(
                snakeGame.food.x * snakeGame.tileSize,
                snakeGame.food.y * snakeGame.tileSize,
                snakeGame.tileSize,
                snakeGame.tileSize
        );

        g.setColor(Color.green);
        g.fillRect(
                snakeGame.snakeHead.x * snakeGame.tileSize,
                snakeGame.snakeHead.y * snakeGame.tileSize,
                snakeGame.tileSize,
                snakeGame.tileSize
        );

        for (int i = 0; i < snakeGame.snakeBody.size(); i++) {
            Tile snakePart = snakeGame.snakeBody.get(i);
            g.fillRect(
                    snakePart.x * snakeGame.tileSize,
                    snakePart.y * snakeGame.tileSize,
                    (snakeGame.tileSize - 1),
                    (snakeGame.tileSize - 1));
        }

        g.setFont(new Font("Arial", Font.PLAIN, 16));
        if (snakeGame.gameOver) {
            g.setColor(Color.red);
            g.drawString("Game Over: " + String.valueOf(snakeGame.snakeBody.size()), snakeGame.tileSize - 16, snakeGame.tileSize);
        } else {
            g.setColor(Color.white);
            g.drawString("Score: " + String.valueOf(snakeGame.snakeBody.size()), snakeGame.tileSize - 16, snakeGame.tileSize);
        }
    }

    public SnakeDraw(SnakeGame game) {
        snakeGame = game;
    }
}

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.mycompany.snake;

import java.awt.Color;
import java.awt.Dimension;
import java.awt.Graphics;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.util.ArrayList;
import java.util.Random;
import javax.swing.*;

/**
 *
 * @author HENRIQUEMICHEL
 */
public final class SnakeGame extends JPanel implements ActionListener, KeyListener {

    public int boardWidth;
    public int boardHeight;
    public int tileSize = 25;

    public Tile snakeHead;
    public ArrayList<Tile> snakeBody;
    public Tile food;
    public Random random;

    public int velocityX;
    public int velocityY;
    public Timer gameLoop;
    public boolean gameOver = false;
    public MovementAndCollision movementAndCollision;
    public SnakeDraw snakeDraw;

    public ArrayList<Tile> getAvailableTiles() {
        ArrayList<Tile> availableTiles = new ArrayList<>();
        for (int x = 0; x < boardWidth / tileSize; x++) {
            for (int y = 0; y < boardHeight / tileSize; y++) {
                Tile tile = new Tile(x, y);
                boolean isOccupied = false;
                for (Tile bodyPart : snakeBody) {
                    if (collision(tile, bodyPart)) {
                        isOccupied = true;
                        break;
                    }
                }
                if (collision(tile, snakeHead)) {
                    isOccupied = true;
                }
                if (!isOccupied) {
                    availableTiles.add(tile);
                }
            }
        }
        return availableTiles;
    }

    public void placeFood() {
        ArrayList<Tile> livre = getAvailableTiles();
        int pos = random.nextInt(livre.size());
        food = livre.get(pos);
    }

    public void placeFood(int x, int y) {
        food.x = x;
        food.y = y;
    }

    public void move() {
        movementAndCollision.move();
    }

    public boolean collision(Tile tile1, Tile tile2) {
        return movementAndCollision.collision(tile1, tile2);
    }

    @Override
    public void actionPerformed(ActionEvent e) {
        move();
        repaint();
        if (gameOver) {
            gameLoop.stop();
        }
    }

    @Override
    public void keyPressed(KeyEvent tecla) {
        movementAndCollision.keyPressed(tecla);
    }

    @Override
    public void paintComponent(Graphics g) {
        super.paintComponent(g);
        snakeDraw.paintComponent(g, this.food);
    }

    @Override
    public void keyTyped(KeyEvent e) {

    }

    @Override
    public void keyReleased(KeyEvent e) {

    }

    public SnakeGame(int width, int height) {
        boardWidth = width;
        boardHeight = height;

        setPreferredSize(new Dimension(this.boardWidth, this.boardHeight));
        setBackground(Color.black);

        addKeyListener(this);
        setFocusable(true);

        snakeHead = new Tile((boardWidth / tileSize) / 2, (boardHeight / tileSize) / 2);
        snakeBody = new ArrayList<>();
        food = new Tile(0, 0);
        random = new Random();

        velocityX = 1;
        velocityY = 0;

        movementAndCollision = new MovementAndCollision(this);
        snakeBody.add(new Tile(snakeHead.x - 1, snakeHead.y));
        placeFood();

        snakeDraw = new SnakeDraw(this);

        gameLoop = new Timer(150, this);
        gameLoop.start();
    }
}

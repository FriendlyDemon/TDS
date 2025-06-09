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
public class SnakeGame extends JPanel implements ActionListener, KeyListener {

    int boardWidth;
    int boardHeight;
    int tileSize = 25;

    Tile snakeHead;
    ArrayList<Tile> snakeBody;
    Tile food;
    Random random;

    int velocityX;
    int velocityY;
    Timer gameLoop;
    boolean gameOver = false;
    MovementAndCollision movementAndCollision;
    SnakeDraw snakeDraw;

    public void placeFood() {
        int posX = random.nextInt(boardWidth / tileSize);
        while (posX == 10) {
            posX = random.nextInt(boardWidth / tileSize);
        }
        food.x = posX;
        int posY = random.nextInt(boardHeight / tileSize);
        while (posY == 10) {
            posY = random.nextInt(boardHeight / tileSize);
        }
        food.y = posY;
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
        snakeDraw.paintComponent(g);
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

        snakeHead = new Tile(5, 5);
        snakeBody = new ArrayList<>();
        food = new Tile(10, 10);
        random = new Random();

        placeFood();

        velocityX = 1;
        velocityY = 0;

        movementAndCollision = new MovementAndCollision(this);
        snakeDraw = new SnakeDraw(this);

        gameLoop = new Timer(100, this);
        gameLoop.start();

    }
}


import com.mycompany.snake.SnakeGame;
import com.mycompany.snake.Tile;
import java.awt.event.KeyEvent;
import javax.swing.JFrame;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author HENRIQUEMICHEL
 */
public class SnakeGameTest {

    JFrame frame;
    SnakeGame snakeGame;

    @BeforeEach
    public void before() {
        int boardWidth = 600;
        int boardHeight = 600;

        frame = new JFrame("Snake");
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        snakeGame = new SnakeGame(boardWidth, boardHeight);
        frame.add(snakeGame);
        frame.pack();
        snakeGame.requestFocus();
    }

    @Test
    public void testBoardSizeX() {
        int boardWidth = 500;
        int boardHeight = 500;

        JFrame frame = new JFrame("Snake");
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        SnakeGame snakeGame = new SnakeGame(boardWidth, boardHeight);
        frame.add(snakeGame);
        frame.pack();
        snakeGame.requestFocus();
        assertEquals((double) boardWidth, snakeGame.getSize().getWidth());
    }

    @Test
    public void testBoardSizeY() {
        int boardWidth = 500;
        int boardHeight = 500;

        JFrame frame = new JFrame("Snake");
        frame.setVisible(true);
        frame.setSize(boardWidth, boardHeight);
        frame.setLocationRelativeTo(null);
        frame.setResizable(false);
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        SnakeGame snakeGame = new SnakeGame(boardWidth, boardHeight);
        frame.add(snakeGame);
        frame.pack();
        snakeGame.requestFocus();
        assertEquals((double) boardHeight, snakeGame.getSize().getHeight());
    }

    @Test
    public void testSnakeHeadPosition() {
        assertEquals(snakeGame.snakeHead.x + "x" + snakeGame.snakeHead.y,
                snakeGame.getSize().width / snakeGame.tileSize / 2 + "x" + snakeGame.getSize().height / snakeGame.tileSize / 2);
    }

    @Test
    public void testFoodPosition() {
        snakeGame.placeFood(1, 1);
        assertEquals("1x1", snakeGame.food.x + "x" + snakeGame.food.y);
    }

    @Test
    public void testGameOver() {
        snakeGame.gameOver = true;
        assertTrue(snakeGame.gameOver);
    }

    @Test
    public void testPlaceFood() {
        String foodPos = snakeGame.food.x + "x" + snakeGame.food.y;
        snakeGame.placeFood();
        assertNotEquals(foodPos, snakeGame.food.x + "x" + snakeGame.food.y);
    }

    @Test
    public void testMove() {
        int X = snakeGame.velocityX;
        int Y = snakeGame.velocityY;
        int headX = X + snakeGame.snakeHead.x;
        int headY = Y + snakeGame.snakeHead.y;
        snakeGame.movementAndCollision.move();
        assertEquals(headX + "x" + headY, snakeGame.snakeHead.x + "x" + snakeGame.snakeHead.y);
    }

    @Test
    public void testKeyPressedUP() {
        snakeGame.velocityX = 0;
        snakeGame.velocityY = 0;
        snakeGame.keyPressed(new KeyEvent(snakeGame, 0, 0, 0, KeyEvent.VK_W, 'w'));
        assertEquals(0, snakeGame.velocityX);
        assertEquals(-1, snakeGame.velocityY);
    }

    @Test
    public void testKeyPressedDOWN() {
        snakeGame.velocityX = 0;
        snakeGame.velocityY = 0;
        snakeGame.keyPressed(new KeyEvent(snakeGame, 0, 0, 0, KeyEvent.VK_S, 's'));
        assertEquals(0, snakeGame.velocityX);
        assertEquals(1, snakeGame.velocityY);
    }

    @Test
    public void testKeyPressedLEFT() {
        snakeGame.velocityX = 0;
        snakeGame.velocityY = 0;
        snakeGame.keyPressed(new KeyEvent(snakeGame, 0, 0, 0, KeyEvent.VK_A, 'a'));
        assertEquals(-1, snakeGame.velocityX);
        assertEquals(0, snakeGame.velocityY);
    }

    @Test
    public void testKeyPressedRIGHT() {
        snakeGame.velocityX = 0;
        snakeGame.velocityY = 0;
        snakeGame.keyPressed(new KeyEvent(snakeGame, 0, 0, 0, KeyEvent.VK_D, 'd'));
        assertEquals(1, snakeGame.velocityX);
        assertEquals(0, snakeGame.velocityY);
    }

    @Test
    public void testCollisionWithBody() {
        boolean collision = false;
        for (Tile body : snakeGame.snakeBody) {
            if (snakeGame.movementAndCollision.collision(body, snakeGame.snakeHead)) {
                collision = true;
            }
        }
        assertFalse(collision, "não deve haver colisao");
        snakeGame.snakeBody.add(snakeGame.snakeHead);
        for (Tile body : snakeGame.snakeBody) {
            if (snakeGame.movementAndCollision.collision(body, snakeGame.snakeHead)) {
                collision = true;
            }
        }
        assertTrue(collision, "deve haver collisao");
    }
}

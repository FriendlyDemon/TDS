
import com.mycompany.calculadora.Calculadora;
import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

public class CalculadoraTest {

    Calculadora calc;

    @BeforeEach
    void setup() {
        calc = new Calculadora();
    }

    @Test
    public void testSomar1() {
        assertEquals(5, calc.somar(2, 3), "2+3=5");
    }

    @Test
    public void testSomar2() {
        assertEquals(13, calc.somar(7, 6), "7+6=13");
    }

    @Test
    public void testSubtrair1() {
        assertEquals(2, calc.subtrair(5, 3), "5-3=2");
    }

    @Test
    public void testSubtrair2() {
        assertEquals(3, calc.subtrair(7, 4), "7-4=3");
    }

    @Test
    public void testMultiplicacao1() {
        assertEquals(10, calc.multiplicacao(5, 2), "5*2=10");
    }

    @Test
    public void testMultiplicacao2() {
        assertEquals(21, calc.multiplicacao(3, 7), "3*7=21");
    }

    @Test
    public void testDivisao1() {
        assertEquals(2, calc.divisao(4, 2), "4/2=2");
    }

    @Test
    public void testDivisao2() {
        assertEquals(1, calc.divisao(5, 5), "5/5=1");
    }

    @Test
    public void testDivisaoFrac() {
        assertEquals(1.25, calc.divisao(10, 8), "10/8=1.25");
    }

    @Test
    public void testDivisao0() {
        assertEquals(0, calc.divisao(0, 0), "x/0=erro->0");
    }

    @Test
    public void testPow1() {
        assertEquals(1, calc.potencia(5, 0), "5^0=1");
    }

    @Test
    public void testPow2() {
        assertEquals(9, calc.potencia(3, 2), "3^2=9");
    }

    @Test
    public void testRaiz1() {
        assertEquals(3, calc.raizQuadrada(9), "raiz de 9=3");
    }

    @Test
    public void testRaiz2() {
        assertEquals(7, calc.raizQuadrada(49), "raiz de 49=7");
    }
}

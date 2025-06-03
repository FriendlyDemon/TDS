
import com.mycompany.aula3.Produto;
import static org.junit.jupiter.api.Assertions.assertEquals;
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
public class ProdutoTest {

    Produto produto;

    @BeforeEach
    public void before() {
        produto = new Produto("produto1", 5);
    }

    //add
    @Test
    public void adicionar1() {
        assertEquals(10, produto.adicionarQuantidade(5));
    }

    @Test
    public void adicionar2() {
        int newValue = produto.adicionarQuantidade(3);
        assertEquals(produto.getQuantidade(), newValue);
    }

    @Test
    public void adicionar3() {
        produto.adicionarQuantidade(2);
        assertEquals(7, produto.getQuantidade());
    }

    //rem
    @Test
    public void remover1() {
        assertEquals(2, produto.removerQuantidade(3));
    }

    @Test
    public void remover2() {
        int newValue = produto.removerQuantidade(1);
        assertEquals(produto.getQuantidade(), newValue);
    }

    @Test
    public void remover3() {
        produto.removerQuantidade(2);
        assertEquals(3, produto.getQuantidade());
    }

    @Test
    public void remover4() {
        assertEquals(-1, produto.removerQuantidade(8));
    }

    @Test
    public void remover5() {
        produto.removerQuantidade(8);
        assertEquals(5, produto.getQuantidade());
    }
}


import com.mycompany.aula3.Estoque;
import com.mycompany.aula3.Produto;
import java.util.ArrayList;
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
public class EstoqueTest {

    Estoque estoque = new Estoque();

    @BeforeEach
    public void estoque() {
        ArrayList<Produto> lista = new ArrayList<>();
        lista.add(new Produto("produto1", 5));
        lista.add(new Produto("produto2", 6));
        lista.add(new Produto("produto3", 7));
        estoque = new Estoque(lista);
    }

    // add
    @Test
    public void adicionarProduto1() {
        assertEquals(8, estoque.adicionarProduto("produto4", 8));
    }

    @Test
    public void adicionarProduto2() {
        assertEquals(8, estoque.adicionarProduto("produto3", 1));
    }

    @Test
    public void adicionarProduto3() {
        assertEquals(9, estoque.adicionarProduto("produto1", 4));
    }

    // rem
    @Test
    public void removerProduto1() {
        assertEquals(4, estoque.removerProduto("produto1", 1));
    }

    @Test
    public void removerProduto2() {
        assertEquals(3, estoque.removerProduto("produto2", 3));
    }

    @Test
    public void removerProduto3() {
        assertEquals(-1, estoque.removerProduto("produto4", 1));
    }

    @Test
    public void removerProduto5() {
        assertEquals(-1, estoque.removerProduto("produto1", 6));
    }

    // con
    @Test
    public void consultarQuantidade1() {
        assertEquals(5, estoque.consultarQuantidade("produto1"));
    }

    @Test
    public void consultarQuantidade2() {
        assertEquals(6, estoque.consultarQuantidade("produto2"));
    }

    @Test
    public void consultarQuantidade3() {
        assertEquals(0, estoque.consultarQuantidade("produto4"));
    }

    // +es
    @Test
    public void maisEstocado1() {
        assertEquals("produto3", estoque.produtoMaisEstocado());
    }

    @Test
    public void maisEstocado2() {
        estoque.adicionarProduto("produto1", 3);
        assertEquals("produto1", estoque.produtoMaisEstocado());
    }

    //cle
    @Test
    public void limparEstoque1() {
        estoque.limparEstoque();
        assertEquals("", estoque.produtoMaisEstocado());
    }
}

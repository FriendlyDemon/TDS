
import com.mycompany.projeto_test.dao.UsuarioDAO;
import com.mycompany.projeto_test.model.Usuario;
import java.sql.SQLException;
import static org.junit.jupiter.api.Assertions.*;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;

/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
/**
 *
 * @author HENRIQUEMICHEL
 */
public class UsuarioDAOTest {

    @BeforeAll
    static void setup() throws SQLException {
        UsuarioDAO.criarTabela();
    }

    @Test
    void deveInserirUsuarioNoBanco() throws SQLException {
        Usuario usuario = new Usuario("Ana Silva", "ana@email.com");
        UsuarioDAO.inserir(usuario);
        assertTrue(usuario.getId() > 0, "ID deve ser gerado");
    }

    @Test
    void deveBuscarUsuarioPorId() throws SQLException {
        Usuario usuario = new Usuario("Carlos Lima", "carlos@mail.com");
        UsuarioDAO.inserir(usuario);

        Usuario encontrado = UsuarioDAO.buscarUsuario(usuario.getId());
        assertNotNull(encontrado);
        assertEquals(usuario.getName(), encontrado.getName());
        assertEquals(usuario.getEmail(), encontrado.getEmail());
    }

    @Test
    void atualizarNome() throws SQLException {
        Usuario usuario = new Usuario("Emerithus", "papa@clergy.com");
        UsuarioDAO.inserir(usuario);
        int test = UsuarioDAO.updateNome(usuario.getId(), "Papa Emerithus");
        assertEquals(1, test);
    }

    @Test
    void atualizarEmail() throws SQLException {
        Usuario usuario = new Usuario("Xonas", "xonasi@mail.com");
        UsuarioDAO.inserir(usuario);
        int test = UsuarioDAO.updateEmail(usuario.getId(), "xonas@mail.com");
        assertEquals(1, test);
    }

    @Test
    void deletarUsuario() throws SQLException {
        Usuario usuario = new Usuario("Jão", "joao@mail.com");
        UsuarioDAO.inserir(usuario);
        boolean test = UsuarioDAO.apagar(usuario.getId());
        assertTrue(test);
    }
}

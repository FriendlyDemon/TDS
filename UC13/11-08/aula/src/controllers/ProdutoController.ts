import { Request, Response } from "express";
import { Produto, produtos } from "../models/Produto";

export class ProdutoController {
  createProduto(req: Request, res: Response): Response {
    const { id, nome, preco } = req.body;

    if (!id || !nome || !preco) {
      return res
        .status(400)
        .json({ mensagem: "Id, nome, preco precisam ser informados!" });
    }

    const usuario = new Produto(id, nome, preco);
    produtos.push(usuario);

    return res
      .status(201)
      .json({ mensagem: "Produto criado com sucesso!", usuario: usuario });
  }

  listAllProdutos(req: Request, res: Response): Response {
    return res.status(200).json({ Produtos: produtos });
  }

  updateProduto(req: Request, res: Response): Response {
    const id: number = Number(req.params.id);
    const { nome, preco } = req.body;

    if (!nome || !preco) {
      return res
        .status(400)
        .json({ mensagem: "Nome e e-mail são obrigatórios!" });
    }

    let usuario = produtos.find((Produto) => Produto.id === id);

    if (!usuario)
      return res.status(404).json({ mensagem: "Produto não encontrado!" });

    usuario.nome = nome;
    usuario.preco = preco;

    return res.status(200).json({
      mensagem: "Produto atualizado com sucesso!",
      usuario_atualizado: usuario,
    });
  }

  deleteProduto(req: Request, res: Response): Response {
    const id: number = Number(req.params.id);

    let index = produtos.findIndex((Produto) => Produto.id === id);

    if (index === -1) {
      return res.status(404).json({ mensagem: "Produto não encontrado" });
    }

    produtos.splice(index, 1);
    return res.status(204).send();
  }
}

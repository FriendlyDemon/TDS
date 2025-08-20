import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Product } from "../models/Product";
import { Category } from "../models/Category";

export class ProductController {
  private productRepository = AppDataSource.getRepository(Product);
  private categoryRepository = AppDataSource.getRepository(Category);

  async create(req: Request, res: Response) {
    const { name, price, categoryId } = req.body;

    if (!name || !price || !categoryId) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const category = await this.categoryRepository.findOneBy({
      id: categoryId,
    });
    if (!category)
      return res.status(404).json({ message: "Category not found" });

    const product = this.productRepository.create({ name, price, category });

    await this.productRepository.save(product);
    return res.status(201).json(product);
  }

  async findAll(req: Request, res: Response) {
    const products = await this.productRepository.find({
      relations: ["category"],
    });
    return res.status(200).json(products);
  }
}

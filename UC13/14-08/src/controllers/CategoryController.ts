import { Request, Response } from "express";
import { AppDataSource } from "../config/data-source";
import { Category } from "../models/Category";

export class CategoryController {
  private categoryRepository = AppDataSource.getRepository(Category);

  async create(req: Request, res: Response) {
    const { name } = req.body;
    
    if (!name) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const category = this.categoryRepository.create({ name });

    await this.categoryRepository.save(category);
    return res.status(201).json(category);
  }

  async list(req: Request, res: Response) {
    const categories = await this.categoryRepository.find();
    return res.status(200).json(categories);
  }
}

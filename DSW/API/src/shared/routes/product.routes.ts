import { Router } from "express";
import ProductController from "src/modules/products/controllers/ProductController";

const productRouter = Router();
const productController = new ProductController;
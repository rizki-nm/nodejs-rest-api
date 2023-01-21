import http from "http";
import {ProductService} from "./product-service.mjs";

const productService = new ProductService();

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    if (req.method === "GET") {
        productService.getProducts(req, res);
    } else if (req.method === "POST") {
        productService.createProduct(req, res);
    } else if (req.method === "PUT") {
        productService.updateProduct(req, res);
    } else if (req.method === "DELETE") {
        productService.deleteProduct(req, res);
    }
})

server.listen(3000);
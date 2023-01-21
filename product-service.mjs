export class ProductService {
    products = ["Kemaja", "Tas", "Sepatu"];

    getJsonProduct() {
        return JSON.stringify({
            code: 200,
            status: "OK",
            data: this.products.map((value, index) => {
                return {
                    id: index,
                    product: value
                }
            })
        })
    }

    getProducts(req, res) {
        res.write(this.getJsonProduct());
        res.end();
    }

    createProduct(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            this.products.push(body.product);

            res.write(this.getJsonProduct())
            res.end();
        })
    }

    updateProduct(req, res) {
        req.addListener("data", (data) => {
            const body = JSON.parse(data.toString());
            if (this.products[body.id]) {
                this.products[body.id] = body.product;
            }

            res.write(this.getJsonProduct())
            res.end();
        })
    }
}
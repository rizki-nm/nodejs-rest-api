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
}
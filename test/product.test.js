import Product from "../src/model/product";
import sellProduct from "../src/service/sellProduct";

test('deve validar baixa de estoque da venda de uma unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    sellProduct(produto, 1);
    expect(produto.stock).toBe(9);
})

test('deve aceita a venda de mais de uma  unidade', () => {
    let produto = new Product('Celular', 500.00, 900.00, 10);
    sellProduct(produto, 3);
    expect(produto.stock).toBe(7);
})
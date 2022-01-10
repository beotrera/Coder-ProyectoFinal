"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProduct = exports.updateProduct = exports.findProductById = exports.getProducts = exports.createProduct = void 0;
const product_1 = require("../dao/product");
const createProduct = async (name, price, stock, description, category) => {
    const Product = await (0, product_1.create)(name, price, stock, description, category);
    return Product;
};
exports.createProduct = createProduct;
const getProducts = async (category) => {
    const Products = await (0, product_1.find)(category);
    return Products;
};
exports.getProducts = getProducts;
const findProductById = async (id) => {
    const Product = await (0, product_1.findById)(id);
    return Product;
};
exports.findProductById = findProductById;
const updateProduct = async (id, data) => {
    await (0, product_1.update)(id, data);
    const ProductUpdate = await (0, product_1.findById)(id);
    return ProductUpdate;
};
exports.updateProduct = updateProduct;
const deleteProduct = async (id) => {
    const Product = await (0, product_1.deleteById)(id);
    return Product;
};
exports.deleteProduct = deleteProduct;

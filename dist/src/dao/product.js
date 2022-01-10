"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteById = exports.update = exports.findById = exports.find = exports.create = void 0;
const product_1 = require("../models/product");
const create = async (name, price, stock, description, category) => {
    const Product = await product_1.ProductModel.create({ name, price, stock, description, category });
    return Product;
};
exports.create = create;
const find = async (category) => {
    const Products = product_1.ProductModel.find(category ? { category: category } : {});
    return Products;
};
exports.find = find;
const findById = async (id) => {
    const Product = await product_1.ProductModel.findById(id);
    return Product;
};
exports.findById = findById;
const update = async (id, data) => {
    const { name, price, stock, description, category } = data;
    const Product = await product_1.ProductModel.findByIdAndUpdate(id, { name, price, stock, description, category });
    return Product;
};
exports.update = update;
const deleteById = async (id) => {
    const Product = await product_1.ProductModel.findByIdAndDelete(id);
    return Product;
};
exports.deleteById = deleteById;

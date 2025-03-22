import { Injectable } from '@nestjs/common';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
    private products: Product[] = [
        {id: "1", title: "Iphone 15", price: 1075},
        {id: "2", title: "The Lord of the Rings", price: 15},
        {id: "3", title: "Tv 55'", price: 12500},
    ]

    findAll(): Product[] {
        return this.products;
    }

    createProduct(title: string, price: number): Product {
        const newProduct: Product = {id: (this.products.length + 1).toString(), title, price};
        this.products.push(newProduct);
        return newProduct;
    }
}
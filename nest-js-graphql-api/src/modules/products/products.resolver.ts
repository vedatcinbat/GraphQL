import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { Product } from './products.model';

@Resolver(() => Product)
export class ProductsResolver {
  constructor(private productsService: ProductsService) {}

  @Query(() => [Product])
  products(): Product[] {
    return this.productsService.findAll();
  }

  @Mutation(() => Product)
  addProduct(
    @Args('title') title: string,
    @Args('price') price: number,
  ): Product {
    return this.productsService.createProduct(title, price);
  }
}

import { Product } from './product.entity';

describe('Product', () => {
  let product: Product;

  beforeEach(() => {
    product = new Product('Test Product', 10.99, '12345');
  });

  it('should create a new product instance', () => {
    expect(product).toBeInstanceOf(Product);
  });

  it('should have the correct id', () => {
    expect(product.getId()).toBe('12345');
  });

  it('should have the correct name', () => {
    expect(product.getName()).toBe('Test Product');
  });

  it('should have the correct price', () => {
    expect(product.getPrice()).toBe(10.99);
  });

  it('should update the name', () => {
    product.setName('Updated Product');
    expect(product.getName()).toBe('Updated Product');
  });

  it('should update the price', () => {
    product.setPrice(20.99);
    expect(product.getPrice()).toBe(20.99);
  });
});

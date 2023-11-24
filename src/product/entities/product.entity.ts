import { randomUUID } from 'crypto';

export class Product {
  private id: string;
  private name: string;
  private price: number;

  constructor(name: string, price: number, id?: string) {
    this.id = id ?? randomUUID();
    this.name = name;
    this.price = price;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public getPrice(): number {
    return this.price;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public setPrice(price: number): void {
    this.price = price;
  }
}

export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
// class Car {
//   name: string;
//   price: number;
//   model: string;
//   constructor(name: string, price: number, model: string) {
//     this.name = name;
//     this.price = price;
//     this.model = model;
//   }
//   printCar(): string {
//     return `The name of this car is ${this.name} and it costs $${this.price}`;
//   }
// }
// export { Invoice };

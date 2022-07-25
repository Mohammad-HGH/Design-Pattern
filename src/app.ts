// interface Product {
//     doSomething(): void;
// }

// interface Factory {
//     createProduct(name: string): Product;
// }

// class ConcreteProductA implements Product {
//     doSomething(): void {
//         console.log('Product A do this');
//     }
// }

// class ConcreteProductB implements Product {
//     doSomething(): void {
//         console.log('Product B do this');
//     }
// }

// class ConcreteProductC implements Product {
//     doSomething(): void {
//         console.log('Product C do this');
//     }
// }

// class ProductFactory implements Factory {
//     createProduct(name: string): Product {
//         switch (name) {
//             case 'product-a':
//                 return new ConcreteProductA();
//             case 'product-b':
//                 return new ConcreteProductB();
//             case 'product-c':
//                 return new ConcreteProductC();
//             default:
//                 return null!;
//         }
//     }
// }

// (function main() {
//     const factory = new ProductFactory();
//     const productA = factory.createProduct('product-a');
//     productA.doSomething();

//     const productB = factory.createProduct('product-b');
//     productB.doSomething();

//     const productC = factory.createProduct('product-c');
//     productC.doSomething();
// })()
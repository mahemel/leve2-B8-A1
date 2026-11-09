# Access Modifiers in TypeScript OOP

## Introduction

Access modifiers control how class members can be accessed from inside or outside a class. TypeScript supports `public`, `private`, `protected`, and `readonly`.

## Public and Private

By default, class members are `public`, meaning they can be accessed anywhere. The `private` modifier restricts access to the class where the member is declared.

```ts
class BankAccount {
    private balance = 0;

    deposit(amount: number) {
        this.balance += amount;
    }

    getBalance() {
        return this.balance;
    }
}

const account = new BankAccount();
account.deposit(100);
console.log(account.getBalance()); // 100
```

Here, `balance` cannot be accessed directly as `account.balance`, it must be accessed through class methods.

## Protected and Readonly

The `protected` modifier allows access within the class and its subclasses, but not from outside. This is useful for inheritance.

```ts
class Animal {
    protected name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Dog extends Animal {
    introduce() {
        return `I am ${this.name}`;
    }
}
```

The `readonly` modifier prevents a property from being changed after initialization.

```ts
class User {
    readonly id: number;

    constructor(id: number) {
        this.id = id;
    }
}
```

## Conclusion

Use `public` for accessible members, `private` for internal details, `protected` for inheritance, and `readonly` for immutable values. These modifiers improve encapsulation and make object-oriented code safer and easier to maintain.

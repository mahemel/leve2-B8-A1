# Type Aliases vs. Interfaces in TypeScript

## Introduction

TypeScript provides two main ways to name and describe types: `type` aliases and `interface`. They often look interchangeable when defining object shapes, but they behave differently in important cases.

## Type Aliases

A type alias creates a new name for any TypeScript type. It can describe primitives, unions, tuples, functions, and intersections.

```ts
type ID = string | number;

type Status = "active" | "inactive";
```

Once Type aliases are declared, they cannot be reopened to add more members. To combine types, we use intersection (`&`) or union (`|`) operators.

```ts
type Employee = {
    name: string;
};

type Manager = Employee & {
    teamSize: number;
};
```

## Interfaces

An `interface` is primarily designed to describe the shape of an object. It can be extended with `extends`, and it supports declaration merging.

```ts
interface User {
    id: number;
    name: string;
}

interface User {
    email: string;
}

const user: User = {
    id: 1,
    name: "Ayesha",
    email: "ayesha@example.com",
};
```

Interfaces are useful when a type may grow over time or when library consumers need to extend it. This “open” behavior is the biggest practical difference between the two.

## When to Choose Each

We can use a `interface` when modeling an object with a stable, extensible contract. It is a natural choice for component props, API responses, class contracts, and public library types.

We can use a `type` when the shape cannot be expressed with an interface, such as a union, tuple, primitive alias, conditional type, or mapped type.

## Conclusion

Type aliases and interfaces overlap, but they serve different strengths. Choose `interface` for extensible object contracts and `type` for unions, tuples, primitives, and advanced type compositions. A consistent choice makes TypeScript code easier to maintain.

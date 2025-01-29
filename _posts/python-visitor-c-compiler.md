---
layout: post
title: "Writing a C Compiler: Why Learn Compiler Basics and the Visitor Pattern"
description:  "We explore Chapter 1 of 'Writing a C compiler', focusing on why learning the fundamentals of compilers is valuable, why Python was chosen for this implementation, and why the **Visitor Pattern** was used over alternatives like trees or algebraic data types."
excerpt: "The Visitor Pattern is a powerful and widely used design pattern for traversing and operating on complex data structures like Abstract Syntax Trees (ASTs)."
date: "2025-01-29T09:35:07.322Z"
categories: programming

author:
  name: James Sullivan
  picture: "/assets/blog/authors/js.png"
coverImage: "/assets/blog/python-visitor-c-compiler/Writing-a-C-compiler.png"
ogImage:
  url: "/assets/blog/python-visitor-c-compiler/Writing-a-C-compiler.png"
---
# Writing a C Compiler: Why Learn Compiler Basics, Python, and the Visitor Pattern

In this post, I explore [Chapter 1](https://norasandler.com/2017/11/29/Write-a-Compiler.html) of [Writing a C compiler](https://nostarch.com/writing-c-compiler) by Nora Sandler, focusing on why learning the fundamentals of compilers is valuable, why I chose Python for this implementation, and why the [Visitor Pattern](https://en.wikipedia.org/wiki/Visitor_pattern) was used over alternatives like trees or algebraic data types. Writing even toy compilers and interpreters can be a daunting task. Moreover, when the first chapter of a book covers lexing, parsing an AST, and generating assembly code, albeit for a very limited set of instructions, you realize there is not going to be an excessive amount of hand holding. For those with no experience, [Crafting Interpreters](https://craftinginterpreters.com/) by Robert Nystrom, may be a better choice to start out with, particularly as the reference implementation for "Writing a C Compiler" is in OCaml, a language many people will not be familiar with.

---

## Why Learn the Basics of Compiler Construction?

Before diving into the technical details, let’s address the elephant in the room: **Why should a programmer care about building a compiler:**

1. **Understand How Code Executes**  
   Writing a compiler forces you to think about how high-level code is transformed into machine-executable instructions. This deepens your understanding of programming languages, runtime behavior, and performance optimization.

2. **Improve Problem-Solving Skills**  
   Compiler construction involves breaking down complex problems into smaller, manageable components (lexical analysis, parsing, code generation, etc.). This structured approach to problem-solving is transferable to other areas of software development.

3. **Learn About Language Design**  
   Building a compiler gives you insight into how programming languages are designed and implemented. This knowledge is invaluable if you ever want to create your own domain-specific language (DSL) or contribute to existing languages.

4. **Appreciate Tooling and Automation**  
   Compilers are the backbone of modern software development. Understanding how they work helps you appreciate tools like linters, static analyzers, and transpilers, which are essentially specialized compilers.

5. **It’s Fun and Challenging**  
   Writing a compiler is a unique blend of theory and practice. It’s a challenging yet deeply satisfying project that will stretch your programming skills and expand your knowledge.

---

## Why Use Python for a C Compiler?

At first glance, Python might seem like an unusual choice for writing a compiler. After all, C is often implemented in lower-level languages like C or Rust. However, Python has several advantages for this project:

1. **Rapid Prototyping**  
   Python’s simplicity and readability make it ideal for prototyping. You can focus on the core logic of the compiler without getting bogged down by low-level details.

2. **Rich Ecosystem**  
   Python has a wealth of libraries and tools that simplify tasks like parsing, tree traversal, and code generation. This allows you to focus on the compiler’s design rather than reinventing the wheel.

3. **Educational Value**  
   Python’s clear syntax makes it easier to explain and understand compiler concepts. This is especially important for a learning-focused project like this one.

4. **Cross-Platform Compatibility**  
   Python runs on all major platforms, making it easy to share and run the compiler on different operating systems.

While Python may not be the fastest language for production-grade compilers, it’s an excellent choice for learning and experimentation. An additional, reason for choosing Python, was to have a non-trivial project to try to convert to [Mojo](https://www.modular.com/mojo#what-is-mojo) at a later date.

---

## Why Use the Visitor Pattern?

When implementing a compiler, one of the key decisions is how to traverse and process the **Abstract Syntax Tree (AST)**. In this project, the **Visitor Pattern** was chosen over alternatives like direct tree traversal or algebraic data types. Here’s why:

### **What is the Visitor Pattern?**
The [Visitor Pattern](https://refactoring.guru/design-patterns/visitor/python/example) is a design pattern that separates the logic for traversing a data structure (like an AST) from the operations performed on it. Each "visitor" implements a `visit` method for each node type in the AST, allowing for modular and extensible code.

### **Advantages of the Visitor Pattern**
1. **Separation of Concerns**  
   The Visitor Pattern keeps the traversal logic separate from the operations performed on the AST. This makes the code cleaner and easier to maintain.

2. **Extensibility**  
   Adding new operations (e.g., type checking, optimization) is as simple as creating a new visitor. You don’t need to modify the existing AST or traversal logic.

3. **Readability**  
   By encapsulating the logic for each node type in a visitor, the code becomes more readable and easier to debug.

4. **Reusability**  
   Visitors can be reused across different parts of the compiler. For example, the same AST can be traversed by a `ParserPrinter` to print the tree and a `CodeEmitter` to generate assembly code.

## When to Use the Visitor Pattern (and When Not To)

### **Use the Visitor Pattern When**:
- You have a complex AST with many node types.
- You need to perform multiple, distinct operations on the AST.
- You want to keep the traversal logic separate from the operations.
- You need extensibility and modularity in your code.

### **Avoid the Visitor Pattern When**:
- The AST is simple and doesn’t require complex traversal logic.
- You only need to perform a single operation on the AST.
- You’re working in a functional language where pattern matching is a better fit.
- Performance is a critical concern, and the overhead of the Visitor Pattern is unacceptable.

---

## Alternatives to the Visitor Pattern

If the Visitor Pattern isn’t the right fit for your use case, consider these alternatives:

1. **Direct Tree Traversal** - While simpler, this approach tightly couples the traversal logic with the operations, making the code harder to extend and maintain.

2. **Algebraic Data Types (ADTs)** - ADTs are powerful for pattern matching and are commonly used in functional languages like Haskell or Rust. However, Python doesn’t support ADTs as well, and the Visitor Pattern is a more idiomatic choice for object-oriented languages.

3. **Interpreter Pattern** - Embed the operations directly into the AST nodes. This is simpler but less extensible.

4. **Iterator Pattern** - Use an iterator to traverse the AST and perform operations. This is useful for linearizing the tree structure.

---

## The Code

[JamesSullivan/python-visitor-c-compiler](https://github.com/JamesSullivan/python-visitor-c-compiler)



## The Compiler in Action

Let’s walk through a simple example to see how the compiler works:

### Input File (`return_2.c`):
```c
int main(void) {
    return 2;
}
```

### Lexical Analysis:
The source code is tokenized into a list of tokens:
```
Token(type='INT', value='int', line=1, column=1)
Token(type='ID', value='main', line=1, column=5)
Token(type='LPAREN', value='(', line=1, column=9)
Token(type='VOID', value='void', line=1, column=10)
Token(type='RPAREN', value=')', line=1, column=14)
...
```

### Parsing:
The tokens are parsed into an AST:
```
Program
  Function: main
    Return: 2
```

### Assembly AST Generation:
The AST is transformed into an assembly AST:
```
Program:
  Function: main
  Mov:
    Source: Immediate(2)
    Destination: Register(eax)
  Ret
```

### Code Generation:
The assembly AST is used to generate assembly code:
```assembly
.global main
main:
    movl    $2, %eax
    ret
```

### Assembly and Linking:
Finally, the assembly code is compiled and linked into an executable.

---

## Conclusion

The Visitor Pattern is a powerful tool for traversing and operating on complex data structures like ASTs. However, it’s not without its drawbacks, including tight coupling, verbosity, and performance overhead. When deciding whether to use the Visitor Pattern, consider the complexity of your AST, the number of operations you need to perform, and the programming language you’re using. For simpler use cases or functional languages, alternatives like direct tree traversal or pattern matching may be a better fit.

---


<br><br>
<img class="cc-icon css-11y11pk" width="32" height="32"  alt="Attribution 4.0 International (CC BY 4.0)" style="display: inline-block;" src="/assets/blog/cc.svg">&nbsp;<img class="cc-icon css-11y11pk" width="32" height="32" style="display: inline-block;" alt="James Sullivan" src="/assets/blog/by.svg">

This article is licensed under a <a href="https://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International</a> license.
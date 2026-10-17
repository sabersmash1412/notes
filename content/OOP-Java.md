# OOP & Java

A fast refresher on Java’s type system, object-oriented behavior, generics, and functional programming. Follow a section when you need the rule or a quick distinction.

## Compile time vs runtime

- **Compile time:** Java checks syntax, types, and language rules.
- **Runtime:** The compiled program executes.
- A variable’s **compile-time type** determines which members are accessible. For an overridden instance method, the object’s **runtime type** determines which implementation runs (dynamic dispatch).
- **Upcast** (subclass → superclass) is safe and implicit. **Downcast** (superclass → subclass) may fail; prefer polymorphism, or check with `instanceof` before casting.

| Concept | Rule |
|---|---|
| Override | Same signature in a subclass; replaces inherited instance behavior. |
| Overload | Same name, different parameter types/order/count. Return type alone cannot distinguish overloads. |
| `static` | Belongs to the class; static methods are hidden, not overridden. |
| `final` field | Cannot be reassigned after initialization. |
| `final` method / class | Cannot be overridden / subclassed. |

A method’s **signature** is its name and parameter types. A JVM descriptor also encodes the return type. Constructors have no return type.

## OOP design

- **Tell, don’t ask:** Ask an object to perform an operation instead of extracting its data and doing the work elsewhere.
- **Liskov Substitution Principle:** A subtype should preserve the behavior expected from its parent type.
- Keep state behind an abstraction barrier. Prefer immutable objects when practical: they are easier to share safely and reason about.
- Wrapper classes (e.g. `Integer`, `Double`) are immutable objects for primitive values. **Autoboxing/unboxing** converts between primitives and wrappers; unboxing `null` throws `NullPointerException`.

## Generics and variance

Java generics are **invariant**: `List<Circle>` is not a subtype of `List<Shape>`, even if `Circle extends Shape`.

```java
<T extends Shape>     // T must be Shape or a subtype
List<? extends Shape>  // read Shapes; don't add a Circle
List<? super Circle>   // add Circles; read back as Object
```

**PECS:** Producer `extends`, Consumer `super`.

- Use `? extends T` when a collection supplies values to you.
- Use `? super T` when you put `T` values into a collection.
- A type parameter can have an upper bound (`<T extends Shape>`). Java has no `T super Circle` declaration bound; `super` is used with wildcards.
- Arrays are covariant (`Circle[]` is a `Shape[]`), so storing a non-Circle `Shape` can fail at runtime. Generics are invariant and use **type erasure**: generic type arguments are mostly removed at runtime. This is why generic arrays cannot be created directly and unchecked casts can cause heap pollution.
- Keep `@SuppressWarnings` narrow and document why the cast is safe.

## Exceptions

| Kind | What to do |
|---|---|
| Checked exception | Anticipate it; catch it or declare it with `throws`. The compiler enforces this. |
| Unchecked exception (`RuntimeException`) | Usually indicates a programming error; catch only when recovery is meaningful. |

`try` contains normal work, `catch` handles a matching exception, and `finally` is for cleanup that should run whether the try succeeds or fails. `throws` declares possible propagation; `throw` raises an exception.

## Nested classes and lambdas

- **Static nested class:** Associated with the outer class; can directly access its static members.
- **Inner class:** Associated with an outer instance; can access its members.
- **Local / anonymous class:** Declared in a method / created inline. Local and anonymous classes can capture local variables only when they are `final` or **effectively final** (assigned once and not reassigned).
- A **lambda** is behavior that can be passed as a value. A lambda that uses surrounding variables also captures its environment; this is a **closure**.
- **Currying** turns a multi-argument function into a sequence of one-argument functions, enabling partial application.

## Lazy values, Maybe, and streams

- **Lazy evaluation:** Delay a computation until its result is needed. **Memoization** caches a result so it is computed once; most useful for pure functions.
- **Maybe/Option:** Represents a value that may be absent, making absence explicit instead of using `null`.
- An **InfiniteList** can generate its head and tail on demand. Combining `Lazy<T>` and `Maybe<T>` supports deferred, cached values that may be absent.
- Java streams are lazy pipelines: intermediate operations describe work; a terminal operation triggers evaluation. A stream is consumed once.

| Operation | Meaning |
|---|---|
| `map` | Transform each value, preserving the stream structure. |
| `flatMap` | Transform each value into a nested stream, then flatten the results. |
| `filter` | Keep values that match a predicate. |
| `reduce` | Combine values into one result using an identity and accumulator. |
| `anyMatch` / `allMatch` / `noneMatch` | Test whether elements satisfy a predicate. |

Some operations are **stateful** (e.g. `sorted`) and need finite input. Use a limiting operation before a terminal operation when truncating an infinite stream. Avoid side effects in stream pipelines.

A **functor** supports lawful `map`: mapping identity changes nothing; mapping `f` then `g` is equivalent to mapping their composition. A **monad** adds lawful `flatMap`; its identity and associativity laws ensure chaining behaves consistently.

## Concurrency and parallel streams

> All parallel programs are concurrent, but not all concurrent programs are parallel.

- **Concurrency:** Multiple tasks make progress over overlapping time. **Parallelism:** Tasks execute at the same time on multiple cores.
- A thread progresses through states such as **new**, **runnable**, **blocked/waiting**, and **terminated**. A Java process stays alive while non-daemon threads are still running.
- Manual threads require careful coordination, ordering, error handling, and resource management.
- `stream.parallel()` lets Java split stream work across threads; `stream.sequential()` requests sequential processing. If both are called, the last call determines the mode.
- Parallel streams help only when work can be safely split and coordination costs do not outweigh the speedup. Avoid shared mutable state.

---

*Condensed from the provided CS2030S Java cheatsheet; the original reference uses compact examples and diagrams that are omitted here.*

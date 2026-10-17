# Software Engineering

A quick refresher on the core CS2103T ideas: model the problem, keep components focused, verify behavior, and make change safe. Use the sections below to jump straight to a topic.

## OOP essentials

- **Object:** Packages state and related behavior behind an interface.
- **Class:** Defines a kind of object. **Enum:** A fixed set of valid values.
- **Association:** A relationship between objects; **multiplicity** says how many participate.
- **Dependency:** One class needs another without a direct association.
- **Composition:** Strong ownership: parts do not outlive the whole. Avoid cycles.
- **Aggregation:** A weaker container–contained relationship.
- **Override:** Replace inherited behavior. **Overload:** Same method name, different parameter lists.

**Abstraction** hides details irrelevant to the current task. Prefer **low coupling** (few dependencies) and **high cohesion** (closely related responsibilities).

## Requirements and models

- **Use case:** Interaction sequences through which an external **actor** gets an observable result. Preconditions describe the starting state; guarantees describe the result.
- **User story:** `As a <role>, I want <capability>, so that <benefit>.` Break large epics into smaller stories; add acceptance conditions to define “done.”
- Discover needs through interviews, surveys, observation, focus groups, prototypes, and existing-product research.
- Keep a glossary so stakeholders use terms consistently. Supplementary requirements often capture non-functional needs.
- **Model:** A simplified view for analysis, communication, or implementation. Use only diagrams that clarify the problem.
- **Conceptual class diagram (CCD/OODM):** Shows problem-domain classes and relationships, not solution-only classes. Use interaction diagrams to show behavior.

## Architecture and patterns

**Architecture** describes a system’s high-level structures and externally visible properties. A system can mix styles:

| Style | Main idea |
|---|---|
| Layered | Higher layers use services from lower layers. |
| Client–server | Clients request services from servers. |
| Transaction processing | A dispatcher manages queued work. |
| Service-oriented | Applications combine interoperable services. |
| Event-driven | Consumers react to events from emitters. |

A **design pattern** is a reusable approach to a recurring design problem. Know its context, problem, solution, and trade-offs.

| Pattern | Use it to… |
|---|---|
| Singleton | Ensure one instance. Watch for global coupling and difficult tests. |
| Facade | Give a simple entry point to a complex subsystem. |
| Command | Package an action so it can be queued or executed without knowing its concrete type. |
| MVC | Separate data (Model), presentation (View), and UI event handling (Controller). |
| Observer | Notify interested objects through a shared interface. |

Design may proceed **top-down**, **bottom-up**, or with a mix. Agile design evolves with requirements and feedback instead of specifying every detail up front.

## Code quality

- **Names:** Use nouns for classes/data and verbs for methods. Choose accurate, standard, readable names.
- **Control flow:** Handle the default case intentionally. Use the final `else` for genuinely remaining cases.
- **Variables:** One purpose each; keep scope small; avoid globals and parameter reuse.
- **Duplication:** Repeated code often signals a missing abstraction (DRY).
- **Comments:** Explain what a contract promises or why a decision was made; don’t narrate obvious implementation details.
- **Refactoring:** Improve internal structure in small steps while preserving external behavior. It is not bug fixing, feature work, or a rewrite.
- **Code smells** (e.g., long method, large class, shotgun surgery) are clues, not proof of a defect. Refactor when the benefit exceeds the cost; this pays down technical debt.

Use a consistent team coding standard. IDEs can enforce formatting and help with navigation, building, and debugging.

## Errors and debugging

| Mechanism | Use for |
|---|---|
| Exception | Unusual user or environment conditions (invalid input, missing file). Handle or propagate it. |
| Assertion | Programmer assumptions and invariants. Failure usually indicates a code defect. |

Don’t rely on assertions for required behavior; they may be disabled. Debug with an IDE debugger: pause, step, and inspect state. Temporary prints risk being left behind; manual tracing is slow and error-prone.

**Logging** records useful runtime context for diagnosing failures. **Defensive programming** prevents likely misuse; choose the amount based on system criticality and the cost of extra checks.

## Documentation and reuse

- **Developer-as-user docs:** API references and tutorials for using a component.
- **Developer-as-maintainer docs:** Design, implementation, and testing context not obvious from the source.
- Keep docs in version-friendly text formats such as Markdown. Aim for just enough detail, with direct explanations and useful examples.
- A **library** is called by your code; a **framework** calls your code (inversion of control). A **platform** provides a runtime environment.
- Before adopting a dependency, check fit, license, maturity, maintenance, and security. Reuse saves effort but adds dependency risk.

## Build, QA, and testing

- **Build automation** runs repeatable build steps. **CI** builds/tests changes automatically; **CD** extends automation to deployment.
- **QA** checks that required quality levels are met. Code review can find defects and style issues without running the program.
- **Static analysis** inspects code without executing it; **dynamic analysis** observes a running program. Formal verification uses mathematical methods and is most useful where high assurance justifies its cost.

A test runs the **system under test (SUT)** with input, observes output, then compares it with expected behavior. A failure may be a software defect or a faulty test.

| Test level | Focus |
|---|---|
| Unit | One component in isolation; use a **stub** to replace a dependency. |
| Integration | Interactions between components. |
| System | Whole system against its specification, including non-functional requirements. |
| Acceptance | Customer requirements, often in a deployment-like environment. |

- **Scripted testing:** Run prepared cases. **Exploratory testing:** Adapt cases based on what you learn.
- **Coverage** shows what code tests exercise; it does not prove test quality.
- **Equivalence partitioning:** Choose representative inputs from valid/invalid groups.
- **Boundary value analysis:** Test a boundary and values just below and above it.
- **TDD:** Write a test before implementing each small increment.
- GUI tests are harder to automate reliably than CLI/API tests. Moving logic out of the GUI helps.

## Agile and project planning

- **XP:** Frequent delivery, communication, simplicity, feedback, respect, and courage. Test from the start; respond to changing needs.
- **Scrum:** Work in fixed-length, timeboxed **Sprints**. The Product Owner orders work; the Scrum Master supports the process; the cross-functional Team delivers the increment.
- Sprint planning selects work for the sprint backlog. Keep scope stable; return unfinished work to the product backlog. Demonstrate the increment at sprint end.
- **Daily Scrum:** Up to 15 minutes. Each person shares yesterday, today, and blockers; solve issues afterward.
- **WBS:** Breaks work into tasks and subtasks. **Gantt chart:** Places tasks on a timeline.

## Git in 30 seconds

```text
working tree → stage chosen changes → commit snapshot
```

Staging a new file starts tracking it; staging a tracked file selects its current changes for the next commit. Git does not track empty directories. Common team workflows: fork + pull request, feature branches in a shared repository, or centralized commits.

---

*Condensed from the provided CS2103T cheatsheet. Diagrams and details delegated to separate reference sheets are omitted.*

# Differences between JPA, Hibernate, and Spring Data JPA

## Java Persistence API (JPA)
JPA is a specification (JSR 338) that defines how to map Java objects to relational database tables and manage their lifecycle. It is not a tool or library, but a standard set of interfaces and rules.

### Features of JPA
- Defines annotations like @Entity, @Table, @Id, @Column to describe mappings.
- Defines the EntityManager interface for performing database operations (persist, merge, remove, find).
- Defines the Java Persistence Query Language (JPQL) for database-independent queries.
- Cannot run on its own; it requires a provider (like Hibernate) to execute the database operations.

---

## Hibernate
Hibernate is a fully-featured Object-Relational Mapping (ORM) framework that implements the JPA specification. It provides the concrete code that performs the SQL queries and database communication.

### Features of Hibernate
- Acts as a JPA provider, meaning it implements EntityManager and all JPA annotations.
- Provides additional Hibernate-specific APIs such as SessionFactory and Session, which extend or offer alternatives to JPA's EntityManagerFactory and EntityManager.
- Includes advanced features like a native caching mechanism (first-level and second-level cache), dirty checking, and custom generator strategies.
- Handles raw SQL generation, transaction mapping, and connection pool integration.

---

## Spring Data JPA
Spring Data JPA is an abstraction layer built on top of a JPA provider (such as Hibernate). It is not an ORM itself, but a tool that simplifies the repository layer in Spring applications.

### Features of Spring Data JPA
- Eliminates repository boilerplate code by automatically generating implementations for interfaces extending JpaRepository.
- Provides built-in methods for CRUD operations (save, findById, deleteById, findAll) out of the box.
- Supports dynamic query derivation (e.g. finding records by writing method names like findByName).
- Integrates seamlessly with Spring's declarative transaction management (@Transactional).
- Uses Hibernate under the hood by default to run the queries.

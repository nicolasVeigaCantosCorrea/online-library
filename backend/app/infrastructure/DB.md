# Database Usage Guide

## Overview

This `Database` class provides:
- Connection pooling
- Simple query execution (`execute`, `execute_one`)
- Transaction management (`transaction`)



## execute()

### What it does
Runs a query and returns **all rows**.

```python
rows = database.execute("SELECT * FROM books")
```

### Return

```python
list[dict[str, Any]]
```



```python
[
  {"id": 1, "title": "Dune"},
  {"id": 2, "title": "1984"}
]
```

### When to use

Use `execute()` when:

1. You expect **multiple rows**
2. You don't care if result is empty (`[]`)
3. You're doing general SELECT queries

### Example

```python
books = database.execute(
    "SELECT * FROM books WHERE author_id = %s",
    (author_id,)
)
```

---

## execute_one()

### What it does

Runs a query and returns **only the first row**.

```python
book = database.execute_one("SELECT * FROM books WHERE id = %s", (1,))
```

### Return

```python
dict[str, Any] | None
```

Example:

```python
{"id": 1, "title": "Dune"}
```

or

```python
None
```

### When to use

Use `execute_one()` when:

1. You expect **one result max**
2. You're querying by **primary key or unique field**
3. You want `None` if not found

### Example

```python
user = database.execute_one(
    "SELECT * FROM users WHERE email = %s",
    (email,)
)

if not user:
    raise AppError(404, "User not found")
```

---

## Key Difference

| Method      | Returns      | Use case            |
| ----------- | ------------ | ------------------- |
| execute     | list[dict]   | Multiple rows       |
| execute_one | dict or None | Single row / lookup |

---

## Passing a Connection (`conn`)

Both methods accept an optional `conn`.

### Why

* Avoid opening multiple connections
* Required for transactions

### Example

```python
with database.transaction() as conn:
    user = database.execute_one("SELECT * FROM users WHERE id = %s", (1,), conn)
```

---

## Transactions

### What it solves

Ensures **multiple queries succeed or fail together**.

Without transaction:

* Partial writes can happen
* Data becomes inconsistent

---

## How to use transaction()

```python
with database.transaction() as conn:
    database.execute("INSERT INTO users (name) VALUES (%s)", ("John",), conn)
    database.execute("INSERT INTO profiles (user_id) VALUES (%s)", (1,), conn)
```

### Behavior

* `commit()` if all queries succeed
* `rollback()` if any exception occurs

---

## When to use transactions

Use `transaction()` when:

1. **Multiple writes depend on each other**

   * Create user + profile
2. **Consistency is required**

   * Bank transfer
3. **You want atomic operations**

   * All succeed or none

---

## When NOT to use transactions

Avoid it when:

* Single query
* Read-only queries (SELECT)

---

## Example: Correct vs Incorrect

### ❌ Wrong (no transaction)

```python
database.execute("INSERT INTO users (name) VALUES (%s)", ("John",))
database.execute("INSERT INTO profiles (user_id) VALUES (%s)", (1,))
```

If second query fails → inconsistent data.

---

### ✅ Correct

```python
with database.transaction() as conn:
    database.execute("INSERT INTO users (name) VALUES (%s)", ("John",), conn)
    database.execute("INSERT INTO profiles (user_id) VALUES (%s)", (1,), conn)
```

---

## Rule Summary

1. Use `execute()` → multiple rows
2. Use `execute_one()` → single row
3. Use `transaction()` → multiple dependent writes
4. Pass `conn` inside transactions
5. Never mix transactional and non-transactional queries for the same operation




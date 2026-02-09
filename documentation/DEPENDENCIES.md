# {{short description}}

This document lists the dependencies required for the **online-library** project, explains their purpose, and how to install them.  
It is meant as a reference for anyone working on the project.

---

## Backend (Python / Flask)

Backend dependencies are managed with **pip** and listed in `backend/requirements.txt`.

### Main dependencies

- **Flask**  
  Web framework. Handles routing, HTTP requests, and template rendering.

- **Flask-Login**  
  Manages user sessions (login, logout, route protection).

- **Werkzeug**  
  Used for password hashing and security utilities.

- **mysql-connector-python**  
  Enables communication with the MySQL database.

- **python-dotenv**  
  Loads environment variables from a `.env` file.

### Example `requirements.txt`

- Flask
- Flask-Login
- mysql-connector-python
- python-dotenv



### Installation

From the `backend/` directory:

```

pip install -r requirements.txt

```

---

## Frontend

The frontend relies mainly on standard web technologies and does not use a dependency manager.

### Technologies used

- **HTML5 / CSS3**
- **Jinja2** (bundled with Flask)
- **Bootstrap (CDN)**  
  Loaded via CDN in `base.html`, no local installation required.
- **Vanilla JavaScript**  
  Used for validation, search, and review logic.

No extra installation is required for the frontend beyond the Flask backend.

---

## Database

### System

- **MySQL**

### SQL files

Located in `backend/db/`:

- `init.sql` : table definitions and constraints
- `data.sql` : sample / test data
- `queries.sql` : reusable SELECT queries
- `routines.sql` : procedures, triggers, and functions

These scripts are executed manually using a MySQL client or GUI tool.

---

## Recommended development environment

- Python ≥ 3.10
- MySQL ≥ 8.0
- Modern web browser (Chrome, Firefox)
- Git

---

## Notes

- `DEPENDENCIES.md` documents **what** is used and **why**.
- `requirements.txt` is used by tools to **automatically install** Python dependencies.
- Both files are complementary, not redundant.
```

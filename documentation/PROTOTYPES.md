## Prototype 0 — Skeleton / Base (Pre-Prototype 1)

**Goal:** Prepare a minimal structure so multiple developers can work in parallel.

### Features & Folder Mapping
- **Project Structure**
  - Create folders and empty files for all main parts: (look at ARCHITECTURE.md)

- **DB Skeleton**
  - Define empty table structures with only primary keys
  - Foreign keys can be added as placeholders
  - Example:  
    ```sql
    CREATE TABLE users (id INT PRIMARY KEY);
    CREATE TABLE content (id INT PRIMARY KEY);
    CREATE TABLE authors (id INT PRIMARY KEY);
    CREATE TABLE content_author (id INT PRIMARY KEY);
    CREATE TABLE reads (id INT PRIMARY KEY);
    CREATE TABLE reviews (id INT PRIMARY KEY);
    CREATE TABLE bookmarks (id INT PRIMARY KEY);
    ```

- **Flask app stub**
  - `app.py` initializes Flask app and registers blueprints/routes, but routes return dummy responses:
    ```python
    from flask import Flask, jsonify
    app = Flask(__name__)

    @app.route("/")
    def home():
        return jsonify({"status": "ok"})
    ```

- **Templates**
  - Create empty `.html` files with basic `{% block content %}{% endblock %}` structure in `base.html`  
  - Include Bootstrap CDN in `base.html`  

- **Utils / Services**
  - Create empty classes/functions for auth, content, reviews, admin, decorators, validators  
  - Each returns dummy values or `pass`  

- **Tests**
  - Empty test files with at least one dummy test to confirm test runner works

### Why Useful
- Allows frontend, backend, and DB people to work in parallel
- All routes, templates, services, and tables exist, so real logic can be added later
- Avoids blocking Prototype 1 tasks on missing structure


## Prototype 1 — Core System (Mandatory)
**Goal:** Pass the project. Covers all required functionality.

### Features & Folder Mapping
- **Authentication**
  - Register / Login / Logout / Password hashing  
  - `backend/routes/auth.py`  
  - `backend/services/auth_service.py`  
  - `backend/db/init.sql`

- **Roles**
  - User / Admin roles, access restrictions  
  - `backend/db/init.sql`  
  - `backend/utils/decorators.py`

- **Catalog / Online Content**
  - List content, view content details  
  - `backend/routes/content.py`  
  - `backend/services/content_service.py`  
  - `frontend/templates/catalog.html`

- **Search**
  - By title / author  
  - `backend/routes/content.py`  
  - `backend/db/queries.sql`  
  - `frontend/static/js/search.js`

- **Reading Access**
  - Logged users can read full content, guests see preview only  
  - `backend/services/content_service.py`  
  - `backend/db/routines.sql`

- **Database Tables**
  - Users, Content, Authors, Content_author, Reads  
  - `backend/db/init.sql`

**Why mandatory:**  
- Implements three-tier architecture  
- ≥6 tables  
- Clear business logic  
- Advanced queries possible  

---

## Prototype 2 — Tracking & Interaction (Strong Grade)
**Goal:** Secure a higher grade. Adds user interaction & tracking.

### Features & Folder Mapping
- **Reading Progress**
  - Resume reading, track progress %  
  - `backend/services/content_service.py`  
  - `backend/db/routines.sql`

- **Reading History / User History Page**
  - `backend/routes/content.py`  
  - `frontend/templates/content_detail.html`

- **Bookmarks**
  - Add / remove bookmarks, list bookmarks  
  - `backend/routes/bookmarks.py`  
  - `backend/services/content_service.py`

- **Statistics**
  - Most read content, reads per user  
  - `backend/db/queries.sql`  
  - `backend/routes/admin.py`

**Optional Extras if Time Allows**
- Comments (lightweight alternative to reviews)  
- Basic recommendations  

---

## Prototype 3 — Reviews & Moderation (Very Strong)
**Goal:** Show maturity in data modeling and business logic.

### Features & Folder Mapping
- **Reviews**
  - One per user per content, rating + short text  
  - `backend/routes/reviews.py`  
  - `backend/services/review_service.py`  
  - `backend/db/init.sql`

- **Rating Aggregates**
  - Average rating, cached or computed  
  - `backend/db/routines.sql`  
  - `backend/db/queries.sql`

- **Admin Moderation**
  - Delete reviews, deactivate content  
  - `backend/routes/admin.py`  
  - `backend/services/admin_service.py`

- **Constraints**
  - Unique review per user/content, rating bounds 1–5  
  - `backend/db/init.sql`  
  - `backend/db/routines.sql`

---

## Prototype 4 — Bonus / Pierre-Ardouin Tier
**Goal:** Extra points, distinction-level features.

### Features & Folder Mapping
- **License Simulation**
  - Max concurrent readers per content  
  - `backend/db/routines.sql`  
  - `backend/services/content_service.py`

- **Access Limits**
  - Max active reads per user  
  - `backend/services/content_service.py`

- **Advanced Recommendations**
  - Based on tags or user history  
  - `backend/db/queries.sql`  
  - `backend/routes/content.py`

- **Email Simulation**
  - Read confirmations, due-date reminders (fake SMTP ok)  
  - `backend/services/admin_service.py`

- **Procedures & Functions Enforcing Rules**
  - `backend/db/routines.sql`

---

### Minimum to Stop Safely
- Prototype 1 + Prototype 2  
- Optional: Comments, basic recommendations, or email simulation if time allows

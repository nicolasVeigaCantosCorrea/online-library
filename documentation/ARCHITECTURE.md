# Project Architecture — Online Library

This document describes the folder structure, purpose of each folder/file, and how the components interact.

---

## Folder Structure

```text
online-library/
├── backend/
│ ├── app.py                     # Flask entry point: initializes app, registers routes
│ ├── config.py                  # Config variables (DB credentials, secrets)
│ │
│ ├── db/
│ │ ├── connection.py            # MySQL connection setup
│ │ ├── init.sql                 # CREATE TABLEs and constraints
│ │ ├── data.sql                 # Sample/fake data for testing
│ │ ├── queries.sql              # Predefined SELECT queries
│ │ └── routines.sql             # Triggers, functions, stored procedures
│ │
│ ├── routes/
│ │ ├── auth.py                  # Login, logout, register endpoints
│ │ ├── content.py               # Catalog, search, read endpoints
│ │ ├── reviews.py               # CRUD reviews endpoints
│ │ ├── bookmarks.py             # CRUD bookmarks endpoints
│ │ └── admin.py                 # Admin-only endpoints
│ │
│ ├── services/
│ │ ├── auth_service.py          # Password hashing, role validation
│ │ ├── content_service.py       # Reading logic, progress calculation
│ │ ├── review_service.py        # Validation/logic for reviews
│ │ └── admin_service.py         # Admin moderation logic
│ │
│ ├── utils/
│ │ ├── decorators.py            # login_required, role_required
│ │ ├── validators.py            # Input validation functions
│ │ └── errors.py                # Error handling helpers
│ │
│ └── requirements.txt           # Python dependencies
│
├── frontend/
│ ├── templates/                 # HTML pages rendered by Flask (Jinja2)
│ │ ├── base.html                # Main layout (head, navbar include, Bootstrap CDN)
│ │ ├── login.html               # User login page
│ │ ├── register.html            # User registration page
│ │ ├── catalog.html             # Content catalog and search results
│ │ ├── content_detail.html      # Content details, reading view, reviews
│ │ ├── bookmarks.html           # User bookmarks list
│ │ ├── admin.html               # Admin dashboard and moderation tools
│ │ ├── partials/                # Reusable template fragments
│ │ │ ├── navbar.html            # Navigation bar shared across pages
│ │ │ ├── footer.html            # Footer shared across pages
│ │ │ └── flash_messages.html    # Display success/error messages
│ │
│ ├── static/
│ │ ├── css/
│ │ │ └── main.css               # Custom styles + Bootstrap overrides
│ │ ├── js/
│ │ │ ├── validation.js          # Form input checks
│ │ │ ├── search.js              # Search logic
│ │ │ └── reviews.js             # Review form handling
│ │ └── assets/                  # Images, icons, other static files
│
├── tests/
│ ├── test_auth.py               # Tests login/register routes
│ ├── test_content.py            # Tests catalog/search/reading logic
│ └── test_reviews.py            # Tests review rules
│
├── documentation/
│ ├── ARCHITECTURE.md            # Detailed project architecture and structure
│ ├── PROTOTYPES.md              # Prototype roadmap from skeleton to bonuses
│ ├── DEPENDENCIES.md            # Required libraries and setup instructions
│ └── SECURITY.md                # Security considerations (frontend, backend, DB)
│
├── README.md                    # Project overview and setup instructions
└── .gitignore                   # Ignored files and folders
```

---

## Layered Responsibilities (simplified from three-tier)

| Tier             | Folder / Components                         | Responsibility                                                                 |
|-----------------|--------------------------------------------|-------------------------------------------------------------------------------|
| **Frontend**     | `frontend/templates/` + `frontend/static/` | UI, client-side validation, Bootstrap layout, dynamic updates                 |
| **Application**  | `backend/routes/` + `backend/services/`    | Business logic, input validation, authentication, CRUD operations            |
| **Database**     | `backend/db/`                               | Data persistence, integrity, triggers, stored procedures, queries            |
| **Utilities**    | `backend/utils/`                             | Reusable helpers, decorators, error handling                                   |
| **Tests**        | `tests/`                                    | Unit & integration tests for backend logic and endpoints                      |

---

## Notes

1. **Separation of concerns**: Frontend handles presentation, backend handles logic, DB handles storage.  
2. **Python + Flask** chosen for backend; **Bootstrap 5** for responsive frontend.  
3. **MySQL** stores relational data, with triggers/functions for constraints.  
4. **Tests** verify that services and routes behave correctly.  
5. **Scalability**: Additional features like caching, API endpoints, or more templates can be added following this structure.  

---

**End of ARCHITECTURE.md**

# 📚 Online Library

Full-stack web app to browse and manage books. Users can track progress, bookmark, and review. Admins manage content and moderate reviews.

---

## 🚀 Getting Started

### ⚙️ Requirements

* Docker Desktop installed and running

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) must be installed and running
  - [Windows](https://docs.docker.com/desktop/setup/install/windows-install/)
  - [Mac](https://docs.docker.com/desktop/setup/install/mac-install/)
  - [Linux](https://docs.docker.com/desktop/setup/install/linux/)

> Ports `80` and `8000` must be free.

---

### 1. Clone

```bash
git clone https://github.com/online-library-glo-2005/online-library.git
cd online-library
```

---

### 2. Environment

`.env` files are included (school project). No setup needed.

---

## 🏭 Production

### Run

```bash
docker compose -f docker-compose.prod.yml up --build -d
```

### Seed database (generates book PDFs)

```bash
docker compose -f docker-compose.prod.yml exec backend env PYTHONPATH=. python app/auto_populate.py
```

### Stop

```bash
docker compose -f docker-compose.prod.yml down
```

### Reset database (keeps PDFs)
We need to remove PDFs by hand if we do this command.
This is only for database reset.
```bash
docker compose -f docker-compose.prod.yml down -v
```

---

## 🔐 Access

* App: [http://localhost](http://localhost)
* Create an account to use features

**Admin**

```
email: admin@gmail.com
password: adminpassword
```

- Admin panel allows CRUD on core entities (partial).
- Admin also allows the promotion of other Users to Admin role

---

## 🏗️ Architecture

```
Frontend (React) → Backend (Flask) → Database (MySQL)
     :80              :8000               internal
```

Dev ports:

```
:3000 → :5000 → :3306
```

---

## 🛠️ Tech Stack

| Layer      | Tech                              |
| ---------- | --------------------------------- |
| Frontend   | React, TypeScript, Tailwind, Vite |
| Backend    | Python, Flask                     |
| Database   | MySQL 8                           |
| Auth       | JWT                               |
| Validation | Marshmallow                       |
| Containers | Docker, Compose                   |
| Testing    | pytest                            |

---

## 📁 Structure

```
online-library/
├── docker-compose.yml
├── docker-compose.prod.yml
├── frontend/
│   ├── Dockerfiles/
│   └── src/
└── backend/
    ├── Dockerfiles/
    ├── run.py
    ├── requirements.txt
    ├── db/
    └── app/
```

---

## 💻 Development

> Ports `3000`, `5000`, `3306` must be free.

### First run / after dependency changes

```bash
docker compose up --build
```

### Normal run

```bash
docker compose up
```

Detached mode:

```bash
docker compose up -d
```

---

### Stop

```bash
docker compose down
```

Reset (deletes DB data):

```bash
docker compose down -v
```

---

## 🌐 Services

### Dev

| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost:3000](http://localhost:3000) |
| Backend  | [http://localhost:5000](http://localhost:5000) |
| MySQL    | localhost:3306                                 |

### Prod

| Service  | URL                                            |
| -------- | ---------------------------------------------- |
| Frontend | [http://localhost](http://localhost)           |
| Backend  | [http://localhost:8000](http://localhost:8000) |

---

## 🗄️ Database

Auto-initialized from `backend/db/`.

### Access (dev)

| Field    | Value               |
| -------- | ------------------- |
| Host     | localhost           |
| Port     | 3306                |
| User     | myuser / root       |
| Password | mypassword / secret |

Depends on `.env`.

---

## 🔄 Rebuild Rules

Run rebuild if you change:

* Dockerfile
* `requirements.txt`
* `package.json`

No rebuild needed for code changes.

---

## 📡 API

| Method | Endpoint  | Description  |
| ------ | --------- | ------------ |
| GET    | `/`       | API info     |
| GET    | `/health` | Health check |

Full API: see documentation folder.

---

## 🧪 Testing

IMPORTANT - No tests were done for this release. So these are just the commands that we would have needed if we had any tests.

### Docker

```bash
docker compose exec backend pytest
```

### Local

```bash
cd backend
pip install -r requirements.txt
pytest
```

from app.infrastructure.db import database


class BaseRepo:
    def __init__(self):
        self._db = database

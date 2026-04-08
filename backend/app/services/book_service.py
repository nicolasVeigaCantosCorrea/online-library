from app.repositories.book_repo import book_repo
from .base_service import BaseService


class BookService(BaseService):
    def __init__(self):
        self._repo = book_repo

    # TO BE IMPLEMENTED (important for guard)
    # type: ignore[override]
    def get_user_id_with_resource_id(self, resource_id: str) -> str | None:
        super().get_user_id_with_resource_id(resource_id)
        return

    # Add book: if title is the same as another put a (index number)
    # Be careful of racing conditions
    def insert_book(self, title, author_id=None):
        pass

    def get_books(self):
        pass


book_service = BookService()

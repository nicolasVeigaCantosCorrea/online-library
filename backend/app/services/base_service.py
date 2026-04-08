from abc import ABC, abstractmethod
from app.errors import AppError


class BaseService(ABC):

    # This is used by guard and checking ownership
    # Implement this on every class that would know user id.
    @abstractmethod
    def get_user_id_with_resource_id(self, resource_id: str) -> str | None:
        raise AppError(
            500, f"{self.__class__.__name__} does not support ownership checks"
        )

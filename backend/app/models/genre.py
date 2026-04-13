from dataclasses import dataclass

@dataclass
class Genre:
    TABLE = "Genre"

    class Columns:
        ID = "GID"
        NAME = "nom"

    id: int
    name: str
from dataclasses import dataclass

@dataclass
class Publisher:
    TABLE = "Editeur"

    class Columns:
        ID = "EID"
        NAME = "nom"
        DESCRIPTION = "description"

    id: int
    name: str
    description: str = None
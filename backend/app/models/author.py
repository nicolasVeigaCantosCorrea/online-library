from dataclasses import dataclass

@dataclass
class Author:
    TABLE = "Auteur"

    class Columns:
        ID = "AID"
        NAME = "nom"
        DESCRIPTION = "description"
        PHOTO_URL = "url_photo"

    id: int
    name: str
    description: str = None
    photo_url: str = None
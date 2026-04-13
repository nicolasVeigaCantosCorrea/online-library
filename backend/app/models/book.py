from dataclasses import dataclass
from datetime import date

@dataclass
class Book:
    TABLE = "Livre"

    class Columns:
        ID = "LID"
        EID = "EID"
        ISBN = "ISBN"
        TITLE = "nom"
        DESCRIPTION = "description"
        COVER_URL = "url_couverture"
        CONTENT_URL = "url_contenu"
        RATING = "note"
        PUB_DATE = "date_publication"

    id: int
    eid: int
    isbn: str
    title: str
    pub_date: date
    description: str = None
    cover_url: str = None
    content_url: str = None
    rating: float = None
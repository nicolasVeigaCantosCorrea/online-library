from dataclasses import dataclass
from datetime import datetime

@dataclass
class Comment:
    TABLE = "Commentaire"

    class Columns:
        ID = "CID"
        UID = "UID"
        LID = "LID"
        MESSAGE = "message"
        PUB_DATE = "date_publication"

    id: int
    user_id: int
    book_id: int
    message: str
    pub_date: datetime
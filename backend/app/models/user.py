from dataclasses import dataclass
from datetime import date, datetime

@dataclass
class User:
    TABLE = "Utilisateur"

    class Columns:
        ID = "UID"
        NAME = "nom"
        EMAIL = "email"
        PASSWORD = "mot_de_passe_hash"
        BIRTH_DATE = "date_naissance"
        PHONE = "telephone"
        ADDRESS = "adresse"
        CREATED_AT = "date_creation_compte"

    id: int
    name: str
    email: str
    password_hash: str
    birth_date: date = None
    phone: str = None
    address: str = None
    created_at: datetime = None
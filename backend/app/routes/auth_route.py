from flask import Blueprint, request
from app.services.auth_service import auth_service
from flask_jwt_extended import jwt_required
from app.utils.apiResponse import success_response

from app.utils.security import generate_access_token

bp = Blueprint("auth", __name__, url_prefix="/auth")


# PLACEHOLDER
@bp.post("/login")
def login():
    ## Logique de connexion, pas encore faite. On va juste générer un token d'accès pour les tests.
    data = request.get_json()

    role = data.get("role")  # "admin" ou "client"

    if role == "admin":
        access_token = generate_access_token(str(1), True)  ## Admin - Admin
    else:
        access_token = generate_access_token(str(2), False)  ##Client - Exemple

    return success_response(200, {"access_token": access_token})


# PLACEHOLDER
@bp.post("/signup")
def signup():
    message = f"Endpoint post /{bp.name}/signup called"
    return success_response(201, None, message)


# PLACEHOLDER
@bp.post("/logout")
def logout():
    message = f"Endpoint post /{bp.name}/logout called"
    return success_response(201, None, message)


# PLACEHOLDER
@bp.post("/refresh")
@jwt_required()
def refresh():
    message = f"Endpoint post /{bp.name}/refresh called"
    return success_response(201, None, message)

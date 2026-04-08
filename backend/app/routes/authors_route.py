from flask import Blueprint, request
from app.utils.apiResponse import success_response

bp = Blueprint("authors", __name__, url_prefix="/authors")


# PLACEHOLDER
@bp.get("/")
def welcome():
    message = f"Endpoint get /{bp.name} called"
    return success_response(201, None, message)

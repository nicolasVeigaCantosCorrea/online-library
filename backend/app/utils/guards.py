from functools import wraps
from app.errors import AppError
from app.utils.security import is_admin, get_user_id


## Put @admin_required above routes that need that permission.
def admin_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        if not is_admin():
            raise AppError(403, "User is not admin")
        return f(*args, **kwargs)

    return decorated


# (WIP) TO BE SEEN IF IT WORKS AND IF WE NEED REWORK
# This guard needs the targeted service to have a method called
def require_owner_or_admin(service, resource_id_arg="id"):
    """
    service: the service to fetch the resource
    resource_id_arg: the name of the route argument containing the resource ID
    """

    def decorator(f):
        @wraps(f)
        def wrapper(*args, **kwargs):
            resource_id = kwargs.get(resource_id_arg)
            resource_user_id = service.get_user_id_with_resource_id(resource_id)

            if not resource_user_id:
                raise AppError(404, "Resource not found")

            if not (is_admin() or resource_user_id == get_user_id()):
                raise AppError(403, "User is not owner")

            return f(*args, **kwargs)

        return wrapper

    return decorator

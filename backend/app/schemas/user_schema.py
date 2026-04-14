from marshmallow import Schema, fields


class UserSchema(Schema):
    id = fields.Int(dump_only=True, data_key="id")
    name = fields.Str(required=True, data_key="name")
    email = fields.Email(required=True, data_key="email")
    password = fields.Str(load_only=True, data_key="password")
    birth_date = fields.Date(data_key="birth_date")
    phone = fields.Str(data_key="phone")
    address = fields.Str(data_key="address")
    created_at = fields.DateTime(dump_only=True, data_key="created_at")

    is_admin = fields.Bool(dump_only=True, data_key="is_admin")

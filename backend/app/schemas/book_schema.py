from marshmallow import Schema, fields


class BookCreateSchema(Schema):
    title = fields.Str(required=True)
    description = fields.Str()


class BookResponseSchema(Schema):
    id = fields.Int()
    title = fields.Str()
    description = fields.Str()

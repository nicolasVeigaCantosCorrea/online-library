from marshmallow import Schema, fields

class CommentSchema(Schema):
    id = fields.Int(dump_only=True, data_key="CID")
    user_id = fields.Int(required=True, data_key="UID")
    book_id = fields.Int(required=True, data_key="LID")
    message = fields.Str(required=True)
    pub_date = fields.DateTime(dump_only=True, data_key="date_publication")
from mongoengine import (
    Document, StringField)

class Test(Document):
    name = StringField()

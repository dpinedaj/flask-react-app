from flask_restplus import Api
from api.test.test import TestApi


def test_routes(api: Api):
    api.add_resource(TestApi, '/basic')
    
from flask_restplus import Api
from api.test.test import define_test


def test_routes(api: Api):
    api.add_resource(define_test(api), '/basic')

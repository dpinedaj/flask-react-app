from flask_restplus import Api
from api.test.test import define_test


def test_routes(api: Api):
    TestApi = define_test(api)
    api.add_resource(TestApi, '/basic')

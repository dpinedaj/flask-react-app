from flask import Flask
from flask_restplus import Api
from flask_mongoengine import MongoEngine
from api.test.test_routes import test_routes
from flask_cors import CORS

config = {'MONGODB_SETTINGS': {
    'db': 'dev',
    'host': 'localhost',
    'port': 27017,
    'username': 'admin',
    'password': 'admin',
    'authentication_source': 'admin'}}
app = Flask(__name__)
CORS(app)
app.config.update(config)
db = MongoEngine(app=app)
api = Api(app=app)


test = api.namespace('test', description='Test APIs')
test_routes(api=test)
if __name__ == '__main__':
    app.run()

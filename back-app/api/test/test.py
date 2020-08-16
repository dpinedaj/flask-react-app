from flask_restplus import Resource
from flask import request, jsonify
from models.test.test_models import Test
import json

class TestApi(Resource):
    @staticmethod
    def post():
        data = request.get_json()
        t = Test(**data).save()
        return jsonify({"id": str(t.id),
                        "name": data.get("name")})

    @staticmethod
    def get():
        return jsonify(Test.objects().all())
        

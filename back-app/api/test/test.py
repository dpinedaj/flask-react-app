from flask_restplus import Resource
from flask import jsonify, request
from models.test.test_models import Test


def define_test(api):
    parser = api.parser()
    parser.add_argument('name', type=str, help='Test name', location='form')

    class TestApi(Resource):
        @api.doc(parser=parser)
        def post(self):
            data = request.get_json() if request.get_json() is not None \
                else parser.parse_args()

            t = Test(**data).save()
            return jsonify({"id": str(t.id),
                            "name": data["name"]})

        @api.doc(parser=parser)
        def delete(self):
            data = request.get_json() if request.get_json() is not None \
                else parser.parse_args()
            t = Test.objects(**data).delete()
            return jsonify({"Deleted": t})

        @staticmethod
        def get():
            names = [i["name"] for i in Test.objects().all()]
            return jsonify({"names": names})


    return TestApi

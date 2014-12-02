from flask import Flask
from flask.ext.restful import Resource, Api, reqparse

from server import api, db
from models import AccessCode, Snippets, Trials

parser = reqparse.RequestParser()
parser.add_argument('code', type=str, help='Code must be a string')
parser.add_argument('time', type=int, help='Time (in seconds) must be a number')
parser.add_argument('id', type=int, help='id must be a number')
parser.add_argument('output', type=string)
parser.add_argument('is_correct', type=int)

class AccessView(restful.Resource):
  def post(self):
	args = parser.parse_args()
    pass

class RefreshersView(restful.Resource):
  def get(self):
    pass
  
class ActivityView(restful.Resource):
  def get(self):
    pass

class SnippetView(restful.Resource):
  def post(self):
	args = parser.parse_args()
    pass

api.add_resource(AccessView, '/api/v1/access/')
api.add_resource(RefreshersView, '/api/v1/refreshers')
api.add_resource(ActivityView, '/api/v1/activity')
api.add_resource(SnippetView, '/api/v1/snippet/')
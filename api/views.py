from flask import Flask
from flask.ext.restful import Resource, Api

from server import api, db

class AccessView(restful.Resource):
  def post(self):
    pass

class RefreshersView(restful.Resource):
  def get(self):
    pass
  
class ActivityView(restful.Resource):
  def get(self):
    pass

class SnippetView(restful.Resource):
  def post(self):
    pass

api.add_resource(AccessView, '/api/v1/access/')
api.add_resource(RefreshersView, '/api/v1/refreshers')
api.add_resource(ActivityView, '/api/v1/activity')
api.add_resource(SnippetView, '/api/v1/snippet/')
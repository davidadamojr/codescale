from flask import Flask
from flask.ext.restful import Resource, Api, reqparse

from server import api, db
from models import AccessCode, Snippets, Trials

parser = reqparse.RequestParser()
parser.add_argument('code', type=str, help='Code must be a string')
parser.add_argument('time', type=int, help='Time (in seconds) must be a number')
parser.add_argument('snippet_id', type=int, help='id must be a number')
parser.add_argument('output', type=string)
parser.add_argument('is_correct', type=int)

class AccessView(restful.Resource):
  def post(self):
	args = parser.parse_args()
	access_code = AccessCode.query.filter_by(code=args['code'])
	access_code.used = 1
	db.session.commit()
	response = {'error': False, 'authorized': True},
	return response

class RefreshersView(restful.Resource):
  def get(self):
    response = {}
	refreshers = Snippets.query.filter_by(type='REFRESHER').all()
	response['error'] = False
	response['snippets'] = []
	for snippet in response:
	  file_handle = open(snippet.filename, 'r')
	  file_contents = file_handle.read()
      snippet_details = {'snippet':file_contents, 'output':snippet.output}
	  response['snippets'].append(snippet_details)
	  file_handle.close()
	  
	return response
  
class ActivityView(restful.Resource):
  def get(self):
    response = {}
	activities = Snippets.query.filter(Snippets.type != 'REFRESHER').all()
	response['error'] = False
	response['snippets'] = []
	for snippet in activities:
	  file_handle = open(snippet.filename, 'r')
	  file_contents = file_handle.read()
	  snippet_details = {'snippet':file_contents, 'output':snippet.output}
	  response['snippets'].append(snippet_details)
	  file_handle.close()
	
	return response

class SnippetView(restful.Resource):
  def post(self):
	args = parser.parse_args()
	response = {}
	trial = Trials(args['code'], args['snippet_id'], args['time'], args['is_correct'])
	new_trial = db.session.add(trial)
	response['error'] = False
	response['attempt'] = {'code':new_trial.access_code, 'snippet_id':new_trial.snippet_id, 'time':new_trial.time_elapsed, 'is_correct':new_trial.is_correct}
    
	return response

api.add_resource(AccessView, '/api/v1/access/')
api.add_resource(RefreshersView, '/api/v1/refreshers')
api.add_resource(ActivityView, '/api/v1/activity')
api.add_resource(SnippetView, '/api/v1/snippet/')
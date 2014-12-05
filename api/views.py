from flask import Flask
from flask.ext import restful
from flask.ext.restful import Resource, Api, reqparse

from server import api, db
from models import AccessCodes, Snippets, Trials, Survey

parser = reqparse.RequestParser()
parser.add_argument('code', type=str, help='Code must be a string')
parser.add_argument('time', type=int, help='Time (in seconds) must be a number')
parser.add_argument('snippet_id', type=int, help='id must be a number')
parser.add_argument('output', type=str)
parser.add_argument('is_correct', type=int)
parser.add_argument('proficiency', type=int)
parser.add_argument('education', type=str)
parser.add_argument('experience', type=str)

class AccessView(restful.Resource):
	def post(self):
		args = parser.parse_args()
		access_code = AccessCodes.query.filter_by(code=args['code'], used=0).first()
		if access_code is not None:
			access_code.used = 1
			db.session.commit()
			response = {'error': False, 'authorized': True}
		else:
			response = {'error': False, 'authorized': False}
		
		return response

class RefreshersView(restful.Resource):
	def get(self):
		response = {}
		refreshers = Snippets.query.filter_by(type='REFRESHER').all()
		response['error'] = False
		response['snippets'] = []
		for snippet in refreshers:
			file_handle = open('snippets/' + snippet.filename, 'r')
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
			file_handle = open('snippets/' + snippet.filename, 'r')
			file_contents = file_handle.read()
			snippet_details = {'snippet':file_contents, 'output':snippet.output}
			response['snippets'].append(snippet_details)
			file_handle.close()
	
		return response

class TrialView(restful.Resource):
	def post(self):
		args = parser.parse_args()
		response = {}
		trial = Trials(args['code'], args['snippet_id'], args['time'], args['is_correct'])
		db.session.add(trial)
		db.session.commit()
		response['error'] = False
		response['attempt'] = {'code':trial.access_code, 'snippet_id':trial.snippet_id, 'time':trial.time_elapsed, 'is_correct':trial.is_correct}
    
		return response
	
class SurveyView(restful.Resource):
	def post(self):
		args = parser.parse_args()
		response = {}
		survey = Survey(args['code'], args['proficiency'], args['experience'], args['education'])
		db.session.add(survey)
		db.session.commit()
		response['error'] = False
		response['survey'] = {'code': survey.code, 'proficiency':survey.proficiency, 'experience':survey.experience, 'education':survey.education}
	
		return response

api.add_resource(AccessView, '/api/v1/access')
api.add_resource(RefreshersView, '/api/v1/refreshers')
api.add_resource(ActivityView, '/api/v1/activities')
api.add_resource(TrialView, '/api/v1/trials')
api.add_resource(SurveyView, '/api/v1/surveys')
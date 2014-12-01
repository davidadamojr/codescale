from flask import Flask
from flask.ext import restful
from flask.ext.restful import Api
from flask.ext.sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config.from_object('config')

#flask-sqlalchemy
db = SQLAlchemy(app)

#flask-restful
api = restful.Api(app)

import views
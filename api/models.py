from server import db

class AccessCodes(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(12))
    used = db.Column(db.Integer)

    def __init__(self, code, used):
        self.code = code
        self.used = used

    def __repr__(self):
        return '<AccessCode %r>' % self.code

class Snippets(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    type = db.Column(db.String(45))
    filename = db.Column(db.String(45))
    output = db.Column(db.String(45))

    def __init__(self, type, filename):
        self.type = type
        self.filename = filename

    def __repr__(self):
        return '<Snippet %r>' % self.filename

class Trials(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    access_code = db.Column(db.String(12))
    snippet_id = db.Column(db.Integer)
    time_elapsed = db.Column(db.Integer)
    is_correct = db.Column(db.Integer)

    def __init__(self, access_code, snippet_id, time_elapsed, is_correct):
        self.access_code = access_code
        self.snippet_id = snippet_id
        self.time_elapsed = time_elapsed
        self.is_correct = is_correct

    def __repr__(self):
        return '<Trial %r>' % self.time_elapsed

class Survey(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    code = db.Column(db.String(12))
    proficiency = db.Column(db.Integer)
    experience = db.Column(db.String(10))
    education = db.Column(db.String(45))
    interrupted = db.Column(db.Integer)

    def __init__(self, code, proficiency, experience, education, interrupted):
        self.code = code
        self.proficiency = proficiency
        self.experience = experience
        self.education = education
        self.interrupted = interrupted

    def __repr__(self):
        return '<Survey %r>' % self.code

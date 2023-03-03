#Warning: origins keyword in cross_origin() is placeholder, we'll need to find out a way to only access to front-end URL
from flask import Flask
from flask_cors import CORS, cross_origin
from flask_mongoalchemy import MongoAlchemy

#Initializing App and Engines
app = Flask(__name__)
CORS(app)
app.config['MONGOALCHEMY_DATABASE'] = 'users'
app.config['MONGOALCHEMY_CONNECTION_STRING'] = "mongodb+srv://SeaTrack:Xv9ZQn9ZPkAZmGDl@cluster0.oqeqm9c.mongodb.net/?retryWrites=true&w=majority"
app.config['MONGOALCHEMY_REPLICA_SET'] = "ac-hjhofpp-shard-00-02.oqeqm9c.mongodb.net:27017"
db = MongoAlchemy(app)

#Database Classes
class Coords(db.Document):
    lat = db.FloatField()
    lng = db.FloatField()
    photo = db.StringField()

class Users(db.Document):
    __tablename__ = 'users'
    id = db.IntField()
    username = db.StringField()
    img = db.StringField()
    password = db.StringField()
    coords = db.DocumentField(Coords)

#Placeholders
placeholder_coords = Coords(lat=9424.1234, lng=4342.1234, photo='http://tiny.cc/xy44vz')
placeholder_coords.save()
placeholder_users = Users(id=100001, username='kapigoku', img='https://pbs.twimg.com/profile_images/1480059172406185984/U40fZtAe_400x400.jpg', password='1234ABCD', coords=placeholder_coords)
placeholder_users.save()

#Routing
@app.route('/')
@cross_origin(origins=['*'])
def index():
    users = Users.query.all()
    return users

@app.route('/create')
@cross_origin(origins=['*'])
def create():
    return '<h1> Created Document </h1>'

@app.route('/update')
@cross_origin(origins=['*'])
def create():
    return '<h1> Updated Document </h1>'

@app.route('/delete')
@cross_origin(origins=['*'])
def create():
    return '<h1> Deleted Document </h1>'

#Running App
if __name__ == '__main__':
    app.run(debug=True)
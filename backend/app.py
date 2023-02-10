from flask import Flask
from flask_cors import CORS, cross_origin
from flask_pymongo import pymongo

app = Flask(__name__)
CORS(app)

@app.route('/data')
@cross_origin(origins=['*'])
def data():
    return {
        'id': 100001, 
        'username': 'kapigoku',
        'img':'https://pbs.twimg.com/profile_images/1480059172406185984/U40fZtAe_400x400.jpg',
        'password': '1234ABCD',
        'coords': [{'lat': 9424, 'lng': 4342, 'photo' : 'http://tiny.cc/xy44vz'}]
    }

if __name__ == '__main__':
    app.run(debug=True)
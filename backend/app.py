from flask import Flask
from flask_pymongo import pymongo

app = Flask(__name__)

@app.route('/data')
def data():
    return {
        'id': 100001, 
        'username': 'kapigoku',
        'img':'https://pbs.twimg.com/profile_images/1480059172406185984/U40fZtAe_400x400.jpg',
        'password': 'sexo_conmigo',
        'coords': [{'lat': 9424, 'lng': 4342, 'photo' : 'http://tiny.cc/xy44vz'}],
        'login':True, 
    }

@app.route('/login')
def login(): 
    pass 

if __name__ == '__main__':
    app.run(port = 5000, debug=True)
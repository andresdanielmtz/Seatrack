from flask import Flask

app = Flask(__name__)

@app.route('/data')
def data():
    return {
        'id': 100001, 
        'username': 'Ramon',
        'password': '1234ABCD',
        'coords': [{'coord': 9424, 'photo' : 'xdxdxdxd'},{'coord': 2491, 'photo' : 'xdxdxdxd'}],
    }

if __name__ == '__main__':
    app.run(debug=True)
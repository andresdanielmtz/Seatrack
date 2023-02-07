from flask import Flask

app = Flask(__name__)

@app.route('/')
def home():
    user_collection = {
        'id': 34521, 
        'name': 'Ramon',
        'coords': [9424, 2491],
        'photo': 'https://google.com.mx/'
    }
    return user_collection

if __name__ == '__main__':
    app.run(debug=True)
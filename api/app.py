#!flask/bin/python
from flask import Flask

app = Flask(__name__, static_folder='../build', static_url_path='/')

# Max 128 mb file upload
app.config['DEBUG'] = True
app.config['TESTING'] = True
app.config['UPLOAD_FOLDER'] = '/tmp/data'
pathlib.Path(app.config['UPLOAD_FOLDER']).mkdir(parents=True, exist_ok=True)
ALLOWED_EXTENSIONS = {'csv', 'xls'}

@app.route('/')
def index():
    #This will serve the index of the react site.
    #--------------------------------------------
    #return app.send_static_file('index.html')
    return "Hello, World!"

if __name__ == '__main__':
    app.run(debug=True)

@app.route('/predict_upload', methods=['POST'])
def predict_upload():
    print("hit the api")
    if 'file' not in request.files:
        abort(406)
    file = request.files['file']
    # if user does not select file, browser also
    # submits an empty part without filename
    if file.filename == '':
        abort(406)
    if file:
        filename = file.filename
        path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        file.save(path)
        return predictor.predict(path)

from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_bcrypt import Bcrypt
app = Flask(__name__)
app.config['SECRET_KEY'] = '5791628bb0b13ce0c676dfde280ba245'
app.config['SQLALCHEMY_DATABASE_URI'] = "mysql://root:Ankita@1@localhost/corey_schafer"
db = SQLAlchemy(app)
bcrypt=Bcrypt(app)  #this to encrypt hash of db
from flaskblog import routes

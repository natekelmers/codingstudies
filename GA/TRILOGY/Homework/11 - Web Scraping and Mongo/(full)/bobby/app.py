from flask import Flask, render_template, jsonify, redirect
import pymongo
import scrape_mars

app = Flask(__name__)

conn ="mongodb://localhost:27017"
client = pymongo.MongoClient(conn)
db = client.mars
collection = db.get_collection("mars_data")

@app.route('/')
def index():
    mars_data = collection.find_one()
    return render_template('index.html', mars_data = mars_data)

@app.route('/scrape')
def scrape():
    mars_data = scrape_mars.scrape()
    conn = "mongodb://localhost:27017"
    client = pymongo.MongoClient(conn)
    try:
        db = client.mars
    except:
        if "mars" in client.database_names():
            client.drop_database("mars")
        else:
            db = client.mars
    try:
        db.create_collection("mars_data")
    except:
        db.drop_collection("mars_data")
        db.create_collection("mars_data")
    collection = db.get_collection("mars_data")
    collection.insert_one(mars_data)

    return render_template("index.html", mars_data = mars_data)

if __name__=="__main__":
    app.run()
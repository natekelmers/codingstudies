from flask import Flask, render_template, jsonify, redirect
import pymongo
import scrape_mars

app = Flask(__name__)

# conn ="mongodb://localhost:27017"
# client = pymongo.MongoClient(conn)
# db = client.mars
# collection = db.get_collection("mars_data")

@app.route('/')
def index():
    import json
    mars_json = json.dumps(mars_data,)
    except TypeError:
        print("supress")
    return render_template('index.html', mars_data = mars_json)

@app.route('/scrape')
def scrape():
    mars_data = scrape_mars.scrape()
    mars_data = {
        "latest_news" : {
            "title"     : news_title,
            "paragraph" : news_p
            },
        "featured_image" : featured_image_url,
        "weather"        : mars_weather,
        "facts"          : mars_fact_html,
        "hemispheres"    : hemisphere_dict
        }
    import json
    try:
        with open("mars.json","w") as f:
            json.dump(mars_data,f)
    except TypeError:
        print("supress")

    return render_template("index.html", mars_data = mars.json)

if __name__=="__main__":
    app.run()
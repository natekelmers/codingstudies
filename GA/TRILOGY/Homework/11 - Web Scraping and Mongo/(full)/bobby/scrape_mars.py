import pandas as pd
import time
from bs4 import BeautifulSoup as bs
from splinter import Browser
import requests

def scrape():
    executable_path = {"executable_path": "chromedriver.exe"}
    session = requests.Session()
    browser = Browser("chrome", **executable_path)
    url = "https://mars.nasa.gov/news"
    browser.visit(url)
    time.sleep(5)
    news_brows = browser.html
    news_soup = bs(news_brows,"lxml")
    latest_news = news_soup.find("li", class_="slide")
    news_t_lvl = latest_news.find("div",class_="content_title")
    news_title = news_t_lvl.a.text
    news_p = str(latest_news.find("div",class_="article_teaser_body").text)
    space_image_url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(space_image_url)
    time.sleep(2)
    browser.click_link_by_id("full_image")
    time.sleep(2)
    browser.click_link_by_text("more info     ")
    time.sleep(2)
    featured_brows = browser.html
    images_soup = bs(featured_brows,"html.parser")
    browser.click_link_by_href(images_soup.figure.a["href"])
    featured_image_url = browser.url
    time.sleep(2)
    mars_weather_url = "https://twitter.com/marswxreport?lang=en"
    response = session.get(mars_weather_url).text
    weather_soup = bs(response, "lxml")
    mars_weather = weather_soup.find("div",class_="js-tweet-text-container").text
    mars_facts_url ="https://space-facts.com/mars/"
    mars_facts_tables = pd.read_html(mars_facts_url)
    mars_facts_df = mars_facts_tables[0]
    mars_facts_df.columns = ["Element", "Data"]
    html_df = mars_facts_df
    mars_fact_html = html_df.to_html(justify="left", border=1)
    hemisphere_url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    hemisphere_url_prefix ="https://astrogeology.usgs.gov"
    hemisphere_links = []
    hemisphere_image_url = []
    hemisphere_titles = []
    response = session.get(hemisphere_url).text
    hemisphere_soup = bs(response,"lxml")
    hemisphere_div = hemisphere_soup.find_all("div", class_="item")

    for item in hemisphere_div:
        hemisphere_links.append(hemisphere_url_prefix+str(item.find("a")["href"]))
        hemisphere_titles.append((item.h3.text).replace(" Enhanced",""))

    for x in range(len(hemisphere_links)):
        browser.visit(hemisphere_links[x])
        response = requests.get(hemisphere_links[x]).text
        hemi_soup = bs(response,"lxml")
        search = hemi_soup.find("a",text="Sample")
        hemisphere_image_url.append(search["href"])
        time.sleep(2)
    hemisphere_dict = dict(zip(hemisphere_titles,hemisphere_image_url))
    browser.quit()
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

    return mars_data
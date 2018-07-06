# data manipulation
import os
import pandas as pd
import numpy as np


# system processing info
import re as re
import time
import pyprind as pr
import datetime as dt


# formatting
import pprint as pp
import html


# web scraping
from bs4 import BeautifulSoup as bs
from splinter import Browser
from selenium import webdriver
import json
import requests
import pymongo
import requests_html as rhtml



nasa_api = "https://mars.nasa.gov/api/v1/news_items/?per_page=40&order=publish_date+desc%2Ccreated_at+desc&search=&category=19%2C165%2C184%2C204&blank_scope=Latest&page="

## Removing this block of code to only grab the first page of articles (since all of them wasn't required)
counter = 44+10   #already check how many pages, so I've added 10 to that number for future data scraping
article_count = 0
i = 0
api_pages = []

start_time=time.time()
bar_a = pr.ProgBar(44, monitor=True, title="Nasa API Page Iteration")
for i in range(counter):
    page = requests.get(nasa_api+str(i)).json()
    article_count = article_count + len(page["items"])
    if page["items"]=={}:
        print("Found "+str(article_count)+" articles on Mars")
        break
    else:
        api_pages.append(nasa_api+str(i))

    bar_a.update()
        
elapsed_time = time.time()-start_time
print("Process completed in {:,.0f} seconds".format(elapsed_time))

# Empty lists to store the data from API
titles = []
description = []
dates =[]
url= []
image_alt = []
article_body =[]

nasa_api_data = requests.get(nasa_api).json()
articles = nasa_api_data["items"]
page_articles = len(articles)

bar_b = pr.ProgBar(page_articles, monitor=True, title="Nasa API Article Iteration")

for data in articles:
    if data["title"]=="":
        titles.append("")
    else:
        titles.append(data["title"])

    if data["url"]=="":
        url.append("")
    else:
        url.append("https://mars.nasa.gov"+str(data["url"]))

    if data["date"]=="":
        dates.append("")
    else:
        dates.append(data["date"])

    if data["description"]=="":
        description.append("")
    else:
        description.append(data["description"])

    if data["main_image_alt"]=="":
        image_alt.append("")
    else:
        image_alt.append(data["main_image_alt"])

    if data["body"]=="":
        article_body.append("")
    else:
        article_body.append(data["body"])
    bar_b.update()

article_df = pd.DataFrame(np.column_stack([titles,description,dates,url,image_alt,article_body]), columns=(["title","description","date","url","image_alt","text"]))

article_df["date"]=pd.to_datetime(article_df["date"])



print(news_title)
print(news_date)
print(news_p)
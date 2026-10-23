---
title: "News"
layout: gridlay
permalink: /allnews.html
---

<h1>News</h1>
<ul class="news-list news-list-full">
  {% for item in site.data.news %}
  <li><span class="news-date">{{ item.date }}</span><span class="news-text">{{ item.headline }}</span></li>
  {% endfor %}
</ul>

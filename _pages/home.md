---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<style>
code {padding: 6px 8px; font-size: 90%;}
</style>

Welcome to my personal homepage. I am a PhD scholar in the [Computational Design Systems](https://www.tue.nl/en/research/research-groups/computational-design-systems) group at the Department of [Industrial Design](https://www.tue.nl/en/our-university/departments/industrial-design/), [TU Eindhoven](https://www.tue.nl). My research focuses on understanding road user behaviour in real world traffic using computer vision, deep learning, reinforcement learning, and data driven analysis.

Before joining TU Eindhoven, I completed my Master of Science at the Indian Institute of Technology Madras. My thesis, *Data Driven Control for Marine Vehicle Manoeuvring*, explored deep reinforcement learning and control strategies for autonomous marine vessels. I also hold a Bachelor of Technology in Mechanical Engineering from Jamia Millia Islamia, where I developed a product prototype for Inventory Management 4.0. These experiences shaped my interest in applying machine learning and engineering methods to practical mobility and safety problems.

My technical work spans Python, C++, C, Rust, computer vision, TensorFlow, PyTorch, Transformers, Graph Neural Networks, and reinforcement learning. I also work with cloud and deployment tools such as AWS, Google Cloud Platform, Microsoft Azure, Docker, MLflow, and DVC to build scalable and reproducible machine learning systems.

My research has been published in journals and conferences related to autonomous systems, traffic behaviour, reinforcement learning, and human centred mobility. I have worked on pedestrian behaviour analysis using dashcam videos, trajectory forecasting with generative adversarial networks, deep reinforcement learning for autonomous systems, user centred interfaces for autonomous shuttle buses, and deep learning methods for generating realistic traffic scenarios. My work has appeared in venues such as *Ocean Engineering*, *Journal of Marine Engineering & Technology*, AutomotiveUI, IHIET AI, ICICT, and ICOE.

I also contribute to academic service. I served as the web chair for the [IEEE RO MAN 2025 conference](https://www.ro-man2025.org/) and as a placement coordinator at IIT Madras, where I supported student placement activities. I have reviewed for venues and journals including [NeurIPS](https://neurips.cc/), [IEEE RO MAN](https://ro-man2026.org/), [AutoUI](https://www.auto-ui.org/), [Ocean Engineering](https://www.sciencedirect.com/journal/ocean-engineering), [Journal of Intelligent & Robotic Systems](https://link.springer.com/journal/10846), and [Engineering Applications of Artificial Intelligence](https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence).

A major part of my current PhD research is [CROWD](https://dl.acm.org/doi/10.1145/3744333.3747827), a global dashcam video dataset built from publicly available driving footage. CROWD supports large scale, in the wild analysis of pedestrian behaviour across countries and territories. The dataset is supported by a modular computer vision pipeline that can combine detection, multi object tracking, semantic understanding, depth estimation, and 3D scene reasoning. This makes it possible to study pedestrian behaviour in natural traffic environments and to support safer automated and connected vehicle systems across regions.

Beyond academia, I have worked on applied machine learning projects in industry, including premium user protection at [Nikah Forever](https://www.nikahforever.com/) and inventory management systems at Guinea Motors Pvt. Ltd. These projects helped me connect research ideas with practical systems. Overall, my work aims to contribute to computer vision, autonomous mobility, road safety technology, and human centred transport research.

<!-- </div> -->

<!-- ### Free time
* 🏃‍♂🚴‍♂️🏊‍♂️ Running, [cycling](https://www.wielervrienden.nl/profiel/pavlo-7126007), swimming, cross-country skiing, hiking. Like, [a lot of it](https://www.strava.com/athletes/bazilinskyy).
* 🗺️ Travelling ([travel map](https://beeneverywhere.net/user/bazilinskyy)).
* 💻 Coding ([github](https://github.com/shaadalam9)).
* 📖 Reading ([goodreads](https://www.goodreads.com/user/show/5571310-pavlo-bazilinskyy)).
* ♟️ Chess ([chess.com](https://www.chess.com/member/bazilinskyy)).
* 🎸 Music ([last.fm](https://www.last.fm/user/Hollgam)). I also play sax alto and guitar.
* 📺 Films and tv series ([imdb](https://www.imdb.com/user/ur16534776), [trakt](https://trakt.tv/users/bazilinskyy)). Somebody likes tv, surprise! 😬

<br/> -->

<!-- <div class="well-md">
  <h3>Funding</h3>
  <div style='display:block; text-align:center; margin-left:auto; margin-right:auto;'>
   {% for funder in site.data.funders %}{% if funder.url %}<a href="{{funder.url}}" target="_blank"><img src='/images/logos/{{ funder.image }}' style='max-height: 70px; max-width: 170px;'/></a>{% else %}<img src='/images/logos/{{ funder.image }}' class='mycenter' style='max-height: 70px; max-width: 170px;'/>{% endif %}   {% endfor %}
  </div>
</div> -->


<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/jsvectormap.min.css" />

<style>
#visited-map {
  width: 100%;
  height: 620px;
  margin: 24px 0 32px 0;
  border: 1px solid #d8dee9;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
}

#visited-map .jvm-tooltip {
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 13px;
}
</style>

<h3>Places I have visited</h3>
<div id="visited-map"></div>

<script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
<script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const map = new jsVectorMap({
    selector: "#visited-map",
    map: "world",
    backgroundColor: "#8fd3ff",
    zoomButtons: true,
    zoomOnScroll: true,
    draggable: true,
    showTooltip: true,

    regionStyle: {
      initial: {
        fill: "#f8fafc",
        stroke: "#ffffff",
        strokeWidth: 0.7
      },
      hover: {
        fill: "#f1f5f9"
      },
      selected: {
        fill: "#d62828"
      },
      selectedHover: {
        fill: "#b91c1c"
      }
    },

    markerStyle: {
      initial: {
        r: 3.5,
        fill: "#111111",
        stroke: "#ffffff",
        strokeWidth: 1.1
      },
      hover: {
        r: 5
      }
    },

    onLoaded(map) {
      map.updateSize();
      window.addEventListener("resize", function () {
        map.updateSize();
      });
    },

    onRegionTooltipShow: function (event, tooltip, code) {
      event.preventDefault();
    },

    selectedRegions: [
      {% assign country_codes = site.data.trips | map: "country_code" | uniq %}
      {% for code in country_codes %}
        "{{ code }}"{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ],

    markers: [
      {% for visit in site.data.trips %}
      {
        name: "{{ visit.city }}, {{ visit.country }}",
        coords: [{{ visit.lat }}, {{ visit.lng }}]
      }{% unless forloop.last %},{% endunless %}
      {% endfor %}
    ]
  });
});
</script>

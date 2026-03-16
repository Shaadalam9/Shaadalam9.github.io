---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<style>
code {padding: 6px 8px; font-size: 90%;}
</style>

Welcome to my personal homepage! I am currently working as a PhD Scholar in the [Computational Design Systems](https://www.tue.nl/en/research/research-groups/computational-design-systems) group of the department of [Industrial Design](https://www.tue.nl/en/our-university/departments/industrial-design/) of [TU Eindhoven](https://www.tue.nl). My research focuses on understanding pedestrian behaviour in real-world traffic settings using deep learning and data-driven analysis.


I have completed my Master of Science from the Indian Institute of Technology (IIT) Madras, where my thesis, titled Data-Driven Control for Marine Vehicle Maneuvering, explored innovative applications of deep reinforcement learning and control strategies for marine vessels. During my time at IIT Madras, I was actively contributed to several cutting-edge projects and honed my expertise in advanced algorithms, trajectory prediction, and reinforcement learning. My undergraduate degree is a Bachelor of Technology in Mechanical Engineering from Jamia Millia Islamia (JMI), where I developed a product prototype for Inventory Management 4.0, demonstrating my early interest in applying engineering solutions to real-world challenges.

Throughout my academic and professional journey, I have cultivated a robust skill set, including proficiency in Python, C++, C, and emerging programming languages such as Rust. My technical expertise encompasses computer vision, machine learning frameworks (TensorFlow, PyTorch), and state-of-the-art technologies such as Transformers and Graph Neural Networks. Additionally, my experience in cloud computing platforms like AWS, Google Cloud Platform, and Microsoft Azure positions him as an adept practitioner in deploying scalable and efficient machine learning systems.

My research has been disseminated through various publications in esteemed journals and conferences. I have authored papers on topics such as pedestrian behaviour evaluation using dashcam footage, trajectory forecasting with generative adversarial networks (GANs), and deep reinforcement learning applications in autonomous systems. In particular, my recent work includes analysing user-centric interfaces for autonomous shuttle buses and applying deep learning models to generate realistic traffic scenarios. My contributions to these fields have been recognised in journals like Ocean Engineering, Journal of Marine Engineering and Technology and conferences such as AutomotiveUI, IHIET-AI, ICICT and ICOE.

In addition to my research achievements, I have also demonstrated leadership in academic service. I was serving as the web chair for the [IEEE RO-MAN 2025 conference](https://www.ro-man2025.org/) and as a placement coordinator during my tenure at IIT Madras, fostering collaborative environments for student success. I was also appointed reviewer for prominent journals, including [NeurIPS](https://neurips.cc/), [Ocean Engineering](https://www.sciencedirect.com/journal/ocean-engineering), [Journal of Intelligent & Robotic Systems](https://link.springer.com/journal/10846) and [Engineering Applications of Artificial Intelligence](https://www.sciencedirect.com/journal/engineering-applications-of-artificial-intelligence), reflecting my deep engagement with the academic community.

My work is distinguished by a practical focus on building scalable resources for studying pedestrian behaviour in natural traffic environments. In my current PhD research, I develop and curate [CROWD](https://dl.acm.org/doi/10.1145/3744333.3747827), a global dashcam video dataset sourced from publicly available driving footage that enables comparative, in-the-wild analysis of pedestrian behaviour across different countries and territories. Rather than relying on a single model, the dataset is supported by a modular computer-vision pipeline that can incorporate complementary methods for detection, multi-object tracking, semantic understanding, and 3D scene reasoning—enabling richer behavioural and contextual measurements from real-world videos. Depending on the analysis need, this includes integrating state-of-the-art components such as semantic segmentation (e.g., MMSegmentation), dedicated tracking frameworks (e.g., TrackLab), depth estimation (e.g., UniDepth), and emerging 3D/geometry-centric approaches (e.g., VGGT and VoxDet), among others. By providing a large-scale, extensible foundation for analysis, CROWD aims to help researchers systematically study pedestrian behaviour worldwide and support the design of safer automated and connected-vehicle systems that generalise across regions.

Beyond academia, I have a strong foundation in industrial collaboration. My internships include developing machine learning models for premium user protection at [Nikah Forever](https://www.nikahforever.com/) and inventory management systems at Guinea Motors Pvt. Ltd. These experiences underscore my ability to translate research into practical solutions. With my multidisciplinary expertise, Shadab Alam is poised to make significant contributions to the fields of autonomous systems and road safety technology.

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
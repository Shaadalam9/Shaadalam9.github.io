---
title: "Home"
layout: homelay
sitemap: false
permalink: /
---

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/jsvectormap/dist/jsvectormap.min.css" />

<style>
code {
  padding: 6px 8px;
  font-size: 90%;
}

.home-landing {
  color: #172033;
  line-height: 1.72;
}

.home-landing a {
  color: #1d4ed8;
  text-decoration: none;
  border-bottom: 1px solid rgba(29, 78, 216, 0.22);
}

.home-landing a:hover {
  color: #0f3ea8;
  border-bottom-color: rgba(29, 78, 216, 0.65);
}

.home-hero-clean {
  position: relative;
  margin: 10px 0 32px;
  padding: 42px 44px;
  overflow: hidden;
  border: 1px solid rgba(148, 163, 184, 0.28);
  border-radius: 26px;
  background:
    radial-gradient(circle at top left, rgba(37, 99, 235, 0.18), transparent 34%),
    linear-gradient(135deg, #ffffff 0%, #f8fafc 58%, #edf6ff 100%);
  box-shadow: 0 18px 42px rgba(15, 23, 42, 0.08);
}

.home-hero-clean::after {
  content: "";
  position: absolute;
  right: -90px;
  bottom: -110px;
  width: 290px;
  height: 290px;
  border-radius: 50%;
  background: rgba(37, 99, 235, 0.08);
}

.home-kicker {
  position: relative;
  z-index: 1;
  display: inline-flex;
  margin-bottom: 14px;
  padding: 7px 12px;
  border: 1px solid rgba(37, 99, 235, 0.18);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.76);
  color: #1e40af;
  font-size: 0.92rem;
  font-weight: 700;
}

.home-hero-clean h1 {
  position: relative;
  z-index: 1;
  max-width: 860px;
  margin: 0 0 16px;
  font-size: clamp(2.15rem, 4.8vw, 3.9rem);
  line-height: 1.05;
  letter-spacing: -0.052em;
}

.home-hero-clean h1 span {
  color: #2563eb;
}

.home-intro {
  position: relative;
  z-index: 1;
  max-width: 900px;
  margin: 0;
  color: #3f4b5f;
  font-size: clamp(1.02rem, 2vw, 1.23rem);
}

.home-actions-clean {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 11px;
  margin-top: 26px;
}

.home-button-clean {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 42px;
  padding: 9px 15px;
  border-radius: 999px;
  font-weight: 700;
  transition: transform 0.18s ease, box-shadow 0.18s ease, background 0.18s ease;
}

.home-button-clean.primary {
  background: #2563eb;
  color: #ffffff !important;
  border: 1px solid #2563eb !important;
  box-shadow: 0 12px 22px rgba(37, 99, 235, 0.22);
}

.home-button-clean.secondary {
  background: rgba(255, 255, 255, 0.78);
  color: #1f2937 !important;
  border: 1px solid rgba(148, 163, 184, 0.45) !important;
}

.home-button-clean:hover {
  transform: translateY(-2px);
}

.home-section-clean {
  margin: 36px 0;
}

.home-section-clean h2 {
  margin: 0 0 10px;
  font-size: clamp(1.55rem, 3vw, 2.05rem);
  line-height: 1.18;
  letter-spacing: -0.035em;
}

.home-section-clean p {
  margin: 0 0 14px;
  color: #4b5563;
}

.home-link-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  margin-top: 18px;
}

.home-link-card {
  display: block;
  min-height: 136px;
  padding: 20px;
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 20px;
  background: #ffffff;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.055);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
}

.home-link-card:hover {
  transform: translateY(-3px);
  border-color: rgba(37, 99, 235, 0.38);
  box-shadow: 0 16px 30px rgba(15, 23, 42, 0.085);
}

.home-link-card strong {
  display: block;
  margin-bottom: 7px;
  color: #111827;
  font-size: 1.08rem;
}

.home-link-card span {
  display: block;
  color: #5b6678;
  font-size: 0.95rem;
}

.home-mini-note {
  padding: 19px 21px;
  border: 1px solid rgba(37, 99, 235, 0.16);
  border-left: 4px solid #2563eb;
  border-radius: 18px;
  background: #eff6ff;
}

.home-map-card {
  padding: 22px;
  border: 1px solid rgba(148, 163, 184, 0.24);
  border-radius: 24px;
  background:
    linear-gradient(180deg, rgba(239, 246, 255, 0.82), rgba(255, 255, 255, 1)),
    #ffffff;
  box-shadow: 0 14px 32px rgba(15, 23, 42, 0.07);
}

#visited-map {
  width: 100%;
  height: 620px;
  margin: 18px 0 0;
  border: 1px solid #d8dee9;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 10px 26px rgba(0, 0, 0, 0.08);
}

#visited-map .jvm-tooltip {
  background: rgba(255, 255, 255, 0.98);
  color: #111827;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 6px 10px;
  font-size: 13px;
}

@media (max-width: 900px) {
  .home-link-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .home-hero-clean {
    padding: 34px 28px;
  }
}

@media (max-width: 640px) {
  .home-link-grid {
    grid-template-columns: 1fr;
  }

  .home-hero-clean {
    padding: 30px 22px;
    border-radius: 22px;
  }

  #visited-map {
    height: 430px;
  }
}
</style>

<div class="home-landing">

<section class="home-hero-clean">
  <div class="home-kicker">PhD Scholar · TU Eindhoven · Computer Vision for Mobility</div>
  <h1>Understanding <span>road user behaviour</span> through data, vision, and learning.</h1>
  <p class="home-intro">
    Welcome, I am <strong>Mohammad Shadab Alam</strong>, a PhD scholar in the
    <a href="https://www.tue.nl/en/research/research-groups/computational-design-systems">Computational Design Systems</a>
    group at the Department of
    <a href="https://www.tue.nl/en/our-university/departments/industrial-design/">Industrial Design</a>,
    <a href="https://www.tue.nl">TU Eindhoven</a>. My work uses computer vision, machine learning,
    reinforcement learning, and data driven analysis to study behaviour in real world traffic and support safer autonomous mobility.
  </p>
  <div class="home-actions-clean">
    <a class="home-button-clean primary" href="/research/">Research</a>
    <a class="home-button-clean secondary" href="/publications/">Publications</a>
    <a class="home-button-clean secondary" href="/about/">About</a>
    <a class="home-button-clean secondary" href="https://scholar.google.com/citations?user=H03lUu8AAAAJ&hl=en">Google Scholar</a>
  </div>
</section>

<section class="home-section-clean">
  <h2>Start here</h2>
  <p>
    This homepage is a short entry point. For detailed information, please use the dedicated pages below.
  </p>

  <div class="home-link-grid" aria-label="Website sections">
    <a class="home-link-card" href="/about/">
      <strong>About</strong>
      <span>A short biography, profile details, awards, grants, research visits, and collaborations.</span>
    </a>

    <a class="home-link-card" href="/research/">
      <strong>Research</strong>
      <span>My work on global traffic behaviour, pedestrian analysis, LLM based human factors research, and autonomous systems.</span>
    </a>

    <a class="home-link-card" href="/publications/">
      <strong>Publications</strong>
      <span>Journal articles, conference papers, preprints, PDFs, DOIs, code, and bibliographic details.</span>
    </a>

    <a class="home-link-card" href="/talks/">
      <strong>Talks</strong>
      <span>Conference presentations, invited talks, webinars, workshops, and outreach activities.</span>
    </a>

    <a class="home-link-card" href="/education/">
      <strong>Education</strong>
      <span>Courses, teaching activities, guest lectures, and supervision related information.</span>
    </a>

    <a class="home-link-card" href="/volunteering/">
      <strong>Volunteering</strong>
      <span>Academic service, reviewing, conference support, and community contributions.</span>
    </a>
  </div>
</section>

<section class="home-section-clean">
  <div class="home-mini-note">
    <p>
      My current PhD research focuses on scalable, reproducible resources for studying pedestrian behaviour in natural traffic environments, especially through large scale driving videos and modular computer vision pipelines.
    </p>
  </div>
</section>

<section class="home-section-clean">
  <div class="home-map-card">
    <h2>Places I have visited</h2>
    <p>
      Travelling gives me a broader view of cities, mobility, infrastructure, and everyday human behaviour. The map below shows places from my journey.
    </p>
    <div id="visited-map"></div>
  </div>
</section>

</div>

<script src="https://cdn.jsdelivr.net/npm/jsvectormap"></script>
<script src="https://cdn.jsdelivr.net/npm/jsvectormap/dist/maps/world.js"></script>

<script>
document.addEventListener("DOMContentLoaded", function () {
  const map = new jsVectorMap({
    selector: "#visited-map",
    map: "world",
    backgroundColor: "#bfdbfe",
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
        fill: "#dbeafe"
      },
      selected: {
        fill: "#2563eb"
      },
      selectedHover: {
        fill: "#1d4ed8"
      }
    },

    markerStyle: {
      initial: {
        r: 4,
        fill: "#111827",
        stroke: "#ffffff",
        strokeWidth: 1.2
      },
      hover: {
        r: 5.5
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

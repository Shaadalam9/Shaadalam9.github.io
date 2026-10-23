#!/usr/bin/env python3
"""Refresh _data/scholar.yml from the public Google Scholar profile.

Google Scholar has no API, so this reads the public profile page (allowed by Scholar's
robots.txt for /citations?user=...). Run it now and then, e.g. before pushing:

    python3 scripts/update_scholar.py
"""
import datetime
import os
import re
import urllib.request

USER = 'H03lUu8AAAAJ'
URL = 'https://scholar.google.com/citations?user=%s&hl=en' % USER
OUT = os.path.join(os.path.dirname(__file__), '..', '_data', 'scholar.yml')


def main():
    req = urllib.request.Request(URL, headers={'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 14_0) '
                                                            'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126 Safari/537.36'})
    html = urllib.request.urlopen(req, timeout=30).read().decode('utf-8')

    # Citations, h-index, i10-index: "All" and "Since <year>" columns of the stats table.
    stats = [int(n) for n in re.findall(r'class="gsc_rsb_std">(\d+)<', html)]
    if len(stats) < 6:
        raise SystemExit('Could not read the Scholar profile (blocked or layout changed); nothing written.')
    citations, h_index, i10 = stats[0], stats[2], stats[4]

    # Citations per year: year labels and bars are matched by their horizontal position.
    years = {int(pos): int(y) for pos, y in re.findall(r'class="gsc_g_t" style="right:(\d+)px">(\d{4})<', html)}
    bars = re.findall(r'class="gsc_g_a"[^>]*style="[^"]*right:(\d+)px[^"]*"[^>]*>\s*<span class="gsc_g_al">(\d+)<', html)
    per_year = {y: 0 for y in years.values()}
    for pos, n in bars:  # bars sit a few px off their label, so take the nearest label
        nearest = min(years, key=lambda p: abs(p - int(pos)))
        per_year[years[nearest]] = int(n)

    lines = [
        '# Written by scripts/update_scholar.py from %s' % URL,
        'updated: %s' % datetime.date.today().isoformat(),
        'citations: %d' % citations,
        'h_index: %d' % h_index,
        'i10_index: %d' % i10,
        'citations_per_year:',
    ] + ['  %d: %d' % (y, per_year[y]) for y in sorted(per_year)]
    with open(OUT, 'w') as f:
        f.write('\n'.join(lines) + '\n')
    print('\n'.join(lines))


if __name__ == '__main__':
    main()

---
layout: default
---
{% capture tags %}
{% for tag in site.tags %}
{{ tag[0] }}
{% endfor %}
{% endcapture %}
{% assign sortedtags = tags | newline_to_br | strip_newlines | split:'<br />' | sort %}

{% for tag in sortedtags %}
<h3 id="{{ tag | slugify }}">{{ tag }}</h3>
<ul>
    {% for post in site.tags[tag] %}
    <li><a href="{{ post.url }}">{{ post.title }}</a></li>
    {% endfor %}
</ul>
{% endfor %}
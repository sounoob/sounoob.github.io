source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']
gem 'jekyll-admin', group: :jekyll_plugins

gem 'jekyll'
gem 'jekyll-paginate'
gem 'kramdown'
gem 'pygments.rb'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
end

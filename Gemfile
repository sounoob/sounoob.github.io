source 'https://rubygems.org'

require 'json'
require 'open-uri'
versions = JSON.parse(open('https://pages.github.com/versions.json').read)

gem 'github-pages', versions['github-pages']

gem 'jekyll'
gem 'kramdown'
gem 'pygments.rb'
gem "html-proofer"

gem 'tzinfo'
gem 'tzinfo-data'

group :jekyll_plugins do
  gem 'jekyll-feed'
  gem 'jekyll-seo-tag'
  gem 'jekyll-paginate'
end

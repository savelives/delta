preferred_syntax = :scss

http_path = '/'

css_dir = 'assets/styles'
sass_dir = 'assets/_sass'
images_dir = 'assets/images'
javascripts_dir = 'assets/js'

relative_assets = false
line_comments = false
output_style = :compressed

asset_cache_buster :none

Sass::Script::Number.precision = 8
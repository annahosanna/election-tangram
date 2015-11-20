# Election-Tangram

Fork of Nathaniel Kelso's <a href="https://github.com/tangrams/cinnabar-style-more-labels">Cinnabar</a> map style and visualization.

Displays basemap with Burmese labels, using Google Noto Myanmar font

Overlays 2015 election results GeoJSON over land area, but beneath roads and other features

## Making of Election-Tangram

This is my first Tangram map. Tangram is using Leaflet 1.0 and HTML5 Canvas to render vector content on demand, instead of using any raster / tile layers.

The map layers, symbology, and labels are all controlled by a YAML file. In addition to structuring what layers appear at each zoom level and how they appear,
for example switching from Natural Earth to OpenStreetMap at a particular zoom level. Like D3, the YAML file can support JavaScript functions in a filter or a property
value. You could use functions to programmatically set the color or adjust the text label of a property.

## License

Open source under an MIT license
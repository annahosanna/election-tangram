var fs = require('fs');

var lowerhouse = require('./data/lowerhouse.geo.json');
var candidates = require('./data/final_lower_house.json');

for (var f = 0; f < lowerhouse.features.length; f++) {
  for (var c = 0; c < candidates.length; c++) {
	  if (candidates[c].votes && candidates[c].constituency.TS_PCODE === lowerhouse.features[f].properties.TS_PCODE) {
		  lowerhouse.features[f].properties.winner = candidates[c].party_id || -1
		  //console.log('found winner');
	  }
  }
}

fs.writeFile('./data/lowerhouse-winners.geojson', JSON.stringify(lowerhouse), function (err) {
	if (err) {
		throw err;
	}
	console.log('done');
});

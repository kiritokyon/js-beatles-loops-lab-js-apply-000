var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];

var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];

function theBeatlesPlay(musicians, instruments) {
  var emptyArr = [];
  for (var i = 0; i < musicians.length; i++) {
  emptyArr.push(musicians[i] + ' plays ' + instruments[i]);
  return emptyArr
}}



function theBeatlesPlay(musicians, instruments) {
  var emptyArr = [];
  for (var i = 0; i < musicians.length; i++) {
    emptyArr.push(musicians[i] + ' plays ' + instruments[i]);
}
  return emptyArr;
}

function johnLennonFacts (facts) {
  var emptyArr2 = [];
  var i = 0;
  while (i < facts.length ) {
    emptyArr2.push(facts[i] + "!!!");
    i++;
  }
  return emptyArr2;
}
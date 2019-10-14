// add solution here
function theBeatlesPlay(arrayOfMusicians,arrayOfInstruments){

  var musicianInstrument = []

  for (var i = 0; i < arrayOfMusicians.length; i++) {

    musicianInstrument.push("" + arrayOfMusicians[i] + " plays " + arrayOfInstruments[i])

  }

  return musicianInstrument

}

function johnLennonFacts(arrayOfFacts){

  var k = 0
  var arrayOfJohnFacts = []

  while (k<arrayOfFacts.length) {
    arrayOfJohnFacts.push(arrayOfFacts[k] + "!!!");
    k++
  }
  return arrayOfJohnFacts

}


function iLoveTheBeatles(){

}

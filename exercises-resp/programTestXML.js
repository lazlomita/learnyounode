var fs = require('fs')
var xmlString = fs.readFileSync(process.argv[2], 'utf8')
var xmlArray = xmlString.split('<')

var xmlArray2 = []
for (var i = 0; i < xmlArray.length; i++) {
    if ((xmlArray[i].indexOf('latitude') > -1) && !(xmlArray[i].indexOf('/latitude') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('longitude') > -1) && !(xmlArray[i].indexOf('/longitude') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('salonNo') > -1) && !(xmlArray[i].indexOf('/salonNo') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('storeName') > -1) && !(xmlArray[i].indexOf('/storeName') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('street') > -1) && !(xmlArray[i].indexOf('/street') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('city') > -1) && !(xmlArray[i].indexOf('/city') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('state') > -1) && !(xmlArray[i].indexOf('/state') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('zip') > -1) && !(xmlArray[i].indexOf('/zip') > -1)){
      xmlArray2.push(xmlArray[i])
    }
    if ((xmlArray[i].indexOf('phone') > -1) && !(xmlArray[i].indexOf('/phone') > -1)){
      xmlArray2.push(xmlArray[i])
    }

}

//{"type":"Feature","properties":{"id":"Central","status":"0"},"geometry":{"type":"Point","coordinates":[-66.182171,-17.372757]}}

var geoJsonArray = [];
for (var i = 0; i < xmlArray2.length; i = i + 9 ) {
  var geoJsonObject = ''
  geoJsonObject = geoJsonObject + '{"type":"Feature","properties":{"id":"'+xmlArray2[i].replace('salonNo>','')
  geoJsonObject = geoJsonObject + '","storeName":"'+xmlArray2[i+1].replace('storeName>','')
  geoJsonObject = geoJsonObject + '","street":"'+xmlArray2[i+2].replace('street>','')
  geoJsonObject = geoJsonObject + '","city":"'+xmlArray2[i+3].replace('city>','')
  geoJsonObject = geoJsonObject + '","state":"'+xmlArray2[i+4].replace('city>','')
  geoJsonObject = geoJsonObject + '","zip":"'+xmlArray2[i+5].replace('zip>','')
  geoJsonObject = geoJsonObject + '","phone":"'+xmlArray2[i+6].replace('phone>','')
  geoJsonObject = geoJsonObject + '"},"geometry":{"type":"Point","coordinates":['+xmlArray2[i+8].replace('longitude>','')
  geoJsonObject = geoJsonObject + ','+xmlArray2[i+7].replace('latitude>','')+']}}'
  geoJsonArray.push(geoJsonObject)
}
//console.log(geoJsonArray.length)
console.log('{"type": "FeatureCollection","features": [')

for (var i = 0; i < geoJsonArray.length; i++ ) {
  var printFeature = geoJsonArray[i]
  if ((i+1)<geoJsonArray.length) {
    printFeature = printFeature+','
  }
  console.log(printFeature)
}
console.log(']}')

//var myArray = fs.readFileSync(process.argv[2], 'utf8').split('/>')
//console.log(myArray.length - 1)
//console.log(myArray)

/*
for (var i = 0; i < myArray.length; i++) {
  myArray[i] = myArray[i].split('longitude')
  //console.log(myArray[i].length)
  if (myArray[i].length == 1) {

    var myArray3 = myArray[i]
    stringLatitude = myArray3[0].replace('</','');
    stringLatitude = stringLatitude.replace('>','');
    myArray[i] = stringLatitude
    //console.log(myArray[i])
  }
  if (myArray[i].length == 3){
    var myArray2 = myArray[i]
    stringLongitude = myArray2[1].replace('</','');
    stringLongitude = stringLongitude.replace('>','');
    //console.log(myArray[i])
    myArray[i] = stringLongitude
  }
  //  console.log('-------- '+ i +' ------------')

}

//console.log(myArray.length)
//console.log(myArray)

var counter = 1
var stringLatitude = ''
var stringLongitude = ''

for (var i = 1; i < myArray.length; i = i + 2 ) {
  stringLatitude = myArray[i]
  stringLongitude = myArray[i+1]
  //console.log('-------- '+ counter +' ------------')
  console.log('var myLatLng'+counter+' = new google.maps.LatLng('+stringLatitude+', '+stringLongitude+');')
  console.log('var beachMarker'+counter+' = new google.maps.Marker({position: myLatLng'+counter+', map: map, icon: image});')
  counter++;
}*/

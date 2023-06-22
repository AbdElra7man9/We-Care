function dateToEpoch(thedate) {
  var time = thedate.getTime();
  return time - (time % 86400000);
}

module.exports = dateToEpoch;

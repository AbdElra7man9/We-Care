function dateToEpoch(thedate) {
  let time = thedate.getTime();
  return time - (time % 86400000);
}

module.exports = dateToEpoch;

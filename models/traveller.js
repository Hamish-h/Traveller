const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  const result = this.journeys.map((journey) => {
     return journey.startLocation;
   })
   return result;
};

Traveller.prototype.getJourneyEndLocations = function () {
  const result = this.journeys.map((journey) => {
     return journey.endLocation;
   })
   return result;
};

Traveller.prototype.getModesOfTransport = function () {
  // return this.journeys.find((journey)) => {
  //   return journey.transport === transport;
  // };

};

Traveller.prototype.getJourneysByTransport = function (transport) {

};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {

  return this.journeys.every((journey) => {
    return journey.distance >= minDistance;
  });

};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  return this.journeys.reduce((total, journey) => {
    return total += journey.distance
  }, 0)
};

Traveller.prototype.getUniqueModesOfTransport = function () {

};


module.exports = Traveller;

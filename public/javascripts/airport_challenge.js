function Airport(Weather) {
  this._weather = new Weather();
  this._planes = [];
}
Airport.prototype.land = function (plane) {
  if (this._weather.report() === "Fine") {
    if (this._planes.length < 20) {
      this._planes.push(plane);
    } else {
      throw Error("Airport is Full");
    }
  } else {
    throw Error("Weather is Stormy");
  }
}
Airport.prototype.report = function () {
  return this._weather.report();
}


Airport.prototype.planes = function () {
  return this._planes;
}

Airport.prototype.takeoff = function(plane) {
  if(this._weather.report() === "Fine") {
    var i = this._planes.indexOf(plane);
    return this._planes.splice(i,1);
  }
  else {
    throw Error("Weather is Stormy");
  }

}

function Weather () {
}

Weather.prototype.report = function () {
  return Math.random() > 0.8 ? 'Stormy' : 'Fine' ;
}

"use strict";

const maxmin = {
  getMinTemperature(station) {
    let minTemperature = null;
    if (station.readings.length > 0) {
      minTemperature = parseInt(station.readings[0].temperature);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].temperature) < minTemperature) {
          minTemperature = parseInt(station.readings[i].temperature);
        }
      }
    }
    return minTemperature;
  },

  getMaxTemperature(station) {
    let maxTemperature = null;
    if (station.readings.length > 0) {
      maxTemperature = parseInt(station.readings[0].temperature);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].temperature) > maxTemperature) {
          maxTemperature = parseInt(station.readings[i].temperature);
        }
      }
    }
    return maxTemperature;
  },

  getMinWindSpeed(station) {
    let minWindSpeed = null;
    if (station.readings.length > 0) {
      minWindSpeed = parseInt(station.readings[0].windSpeed);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].windSpeed) < minWindSpeed) {
          minWindSpeed = parseInt(station.readings[i].windSpeed);
        }
      }
    }
    return minWindSpeed;
  },

  getMaxWindSpeed(station) {
    let maxWindSpeed = null;
    if (station.readings.length > 0) {
      maxWindSpeed = parseInt(station.readings[0].windSpeed);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].windSpeed) > maxWindSpeed) {
          maxWindSpeed = parseInt(station.readings[i].windSpeed);
        }
      }
    }
    return maxWindSpeed;
  },

  getMinPressure(station) {
    let minPressure = null;
    if (station.readings.length > 0) {
      minPressure = parseInt(station.readings[0].pressure);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].pressure) < minPressure) {
          minPressure = parseInt(station.readings[i].pressure);
        }
      }
    }
    return minPressure;
  },

  getMaxPressure(station) {
    let maxPressure = null;
    if (station.readings.length > 0) {
      maxPressure = parseInt(station.readings[0].pressure);
      for (let i = 1; i < station.readings.length; i++) {
        if (parseInt(station.readings[i].pressure) > maxPressure) {
          maxPressure = parseInt(station.readings[i].pressure);
        }
      }
    }
    return maxPressure;
  }
};

module.exports = maxmin;

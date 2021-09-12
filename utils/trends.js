"use strict";

const trends = {
  getTemperatureTrends(station) {
    let lastReading = null;
    let secondLastReading = null;
    let thirdLastReading = null;
    let temperatureTrends = null;
    if (station.readings.length > 2) {
      lastReading = station.readings[station.readings.length-1];
      secondLastReading = station.readings[station.readings.length - 2];
      thirdLastReading = station.readings[station.readings.length - 3];
      if (
        parseInt(lastReading.temperature) > parseInt(secondLastReading.temperature) &&
        parseInt(secondLastReading.temperature) > parseInt(thirdLastReading.temperature)
      ) {
        temperatureTrends = "arrow up icon";
      } else if (
        parseInt(lastReading.temperature) < parseInt(secondLastReading.temperature) &&
        parseInt(secondLastReading.temperature) < parseInt(thirdLastReading.temperature)
      ) {
        temperatureTrends = "arrow down icon";
      } else {
        temperatureTrends = "calender minus icon";
      }
    } else {
      temperatureTrends = "calender minus icon";
    }
    return temperatureTrends;
  },

  getWindSpeedTrends(station) {
    let lastReading = null;
    let secondLastReading = null;
    let thirdLastReading = null;
    let windSpeedTrends = null;
    if (station.readings.length > 2) {
      lastReading = station.readings[station.readings.length - 1];
      secondLastReading = station.readings[station.readings.length - 2];
      thirdLastReading = station.readings[station.readings.length - 3];
      if (
        parseInt(lastReading.windSpeed) > parseInt(secondLastReading.windSpeed) &&
        parseInt(secondLastReading.windSpeed) > parseInt(thirdLastReading.windSpeed)
      ) {
        windSpeedTrends = "arrow up icon";
      } else if (
        parseInt(lastReading.windSpeed) < parseInt(secondLastReading.temperature) &&
        parseInt(secondLastReading.windSpeed) < parseInt(thirdLastReading.windSpeed)
      ) {
        windSpeedTrends = "arrow down icon";
      } else {
        windSpeedTrends = "calender minus icon";
      }
    } else {
      windSpeedTrends = "calender minus icon";
    }
    return windSpeedTrends;
  },

  getPressureTrends(station) {
    let lastReading = null;
    let secondLastReading = null;
    let thirdLastReading = null;
    let pressureTrends = null;
    if (station.readings.length > 2) {
      lastReading = station.readings[station.readings.length - 1];
      secondLastReading = station.readings[station.readings.length - 2];
      thirdLastReading = station.readings[station.readings.length - 3];
      if (
        parseInt(lastReading.pressure) > parseInt(secondLastReading.pressure) &&
       parseInt(secondLastReading.pressure) > parseInt(thirdLastReading.pressure)
      ) {
        pressureTrends  = "arrow up icon";
      } else if (
        parseInt(lastReading.pressure) < parseInt(secondLastReading.pressure) &&
        parseInt(secondLastReading.pressure) < parseInt(thirdLastReading.pressure)
      ) {
        pressureTrends = "arrow down icon";
      } else {
        pressureTrends = "calender minus icon";
      }
    } else {
      pressureTrends = "calender minus icon";
    }
    return pressureTrends;
  },
};

module.exports = trends;

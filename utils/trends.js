"use strict";

const trends = {
  getTemperatureTrends(station) {
    let lastReading = null;
    let secondLastReading = null;
    let thirdLastReading = null;
    let temperatureTrends = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length - 1];
      secondLastReading = station.readings[station.readings.length - 2];
      thirdLastReading = station.readings[station.readings.length - 3];
      if (
        lastReading.temperature > secondLastReading.temperature &&
        secondLastReading.temperature > thirdLastReading.temperature
      ) {
        temperatureTrends = "arrow up icon";
      } else if (
        lastReading.temperature < secondLastReading.temperature &&
        secondLastReading.temperature < thirdLastReading.temperature
      ) {
        temperatureTrends = "arrow down icon";
      } else {
        temperatureTrends = "calender minus icon";
      }
    } else {
      temperatureTrends = "calender minus icon";
    }
    return temperatureTrends;
  }

  /* getWindSpeedTrends(station) {
    let windSpeedTrends = null;
    if (station.readings.length > 0) {
      if (
        station.readings[length - 1].windSpeed >
          station.readings[length - 2].windSpeed &&
        station.readings[length - 2].windSpeed >
          station.readings[length - 3].windSpeed
      ) {
        windSpeedTrends = "arrow up icon";
      } else if (
        station.readings[length - 1].windSpeed <
          station.readings[length - 2].windSpeed &&
        station.readings[length - 2].windSpeed <
          station.readings[length - 3].windSpeed
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
    let pressureTrends = null;
    if (station.readings.length > 0) {
      if (
        station.readings[length - 1].pressure >
          station.readings[length - 2].pressure &&
        station.readings[length - 2].pressure >
          station.readings[length - 3].pressure
      ) {
        pressureTrends = "arrow up icon";
      } else if (
        station.readings[length - 1].pressure <
          station.readings[length - 2].pressure &&
        station.readings[length - 2].pressure <
          station.readings[length - 3].pressure
      ) {
        pressureTrends = "arrow down icon";
      } else {
        pressureTrends = "calender minus icon";
      }
    } else {
      pressureTrends = "calender minus icon";
    }
    return pressureTrends;
  }
*/
};

module.exports = trends;

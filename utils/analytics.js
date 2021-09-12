"use strict";

const stationAnalytics = {
  getLastReading(station) {
    let lastReading = null;
    let latestConditionTemperatureC = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length - 1];
    }
    return lastReading;
  },
 
  getWindChill(station) {
    let lastReading = null;
    let windChill = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length - 1];
      windChill =
        13.12 +
        (0.6112 * lastReading.temperature -
          11.37 * Math.pow(lastReading.windSpeed, 0.16) +
          0.3965 *
            lastReading.temperature *
            Math.pow(lastReading.windSpeed, 0.16));
    } else {
      windChill = 0.0;
    }
    return (Math.round(windChill * 100) / 100).toFixed(2);
  },
  
  weatherCode(code) {
    switch (code) {
      case 100:
        return "Clear";
      case 200:
        return "Partial Clouds";
      case 300:
        return "Cloudy";
      case 400:
        return "Light Showers";
      case 500:
        return "Heavy Showers";
      case 600:
        return "Rain";
      case 700:
        return "Snow";
      case 800:
        return "Thunder";
      default:
        return "Please delete last reading and re-enter in terms of 100's (100-800)";
    }
  },

  weatherIcon(code) {
    switch (code) {
      case 100:
        return "sun icon";
      case 200:
        return "cloud icon";
      case 300:
        return "cloud meatball icon";
      case 400:
        return "cloud sun rain icon";
      case 500:
        return "cloud showers heavy icon";
      case 600:
        return "cloud rain icon";
      case 700:
        return "snowflake icon";
      case 800:
        return "bolt icon";
      default:
        return "Please delete last reading and re-enter in terms of 100's (100-800)";
    }
  },

  getBeaufortScale(station) {
    let lastReading = null;
    let beaufortScale = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length - 1];

      if (lastReading.windSpeed == 1) {
        beaufortScale = "0bft - Calm";
      } else if (lastReading.windSpeed > 1 && lastReading.windSpeed <= 5) {
        beaufortScale = "1bft - Light Air ";
      } else if (lastReading.windSpeed > 5 && lastReading.windSpeed <= 11) {
        beaufortScale = "2bft - Light Breeze";
      } else if (lastReading.windSpeed > 12 && lastReading.windSpeed <= 19) {
        beaufortScale = "3bft - Gentle Breeze";
      } else if (lastReading.windSpeed > 19 && lastReading.windSpeed <= 28) {
        beaufortScale = "4bft- Moderate Breeze";
      } else if (lastReading.windSpeed > 28 && lastReading.windSpeed <= 38) {
        beaufortScale = "5bft - Fresh Breeze";
      } else if (lastReading.windSpeed > 38 && lastReading.windSpeed <= 49) {
        beaufortScale = "6bft - Strong Breeze";
      } else if (lastReading.windSpeed > 49 && lastReading.windSpeed <= 61) {
        beaufortScale = "7bft - Near Gale";
      } else if (lastReading.windSpeed > 61 && lastReading.windSpeed <= 74) {
        beaufortScale = "8bft - Gale";
      } else if (lastReading.windSpeed > 74 && lastReading.windSpeed <= 88) {
        beaufortScale = "9bft - Severe Gale";
      } else if (lastReading.windSpeed > 88 && lastReading.windSpeed <= 102) {
        beaufortScale = "10bft - Strong Storm";
      } else if (lastReading.windSpeed > 102 && lastReading.windSpeed <= 117) {
        beaufortScale = "11bft - Violent Storm";
      } else if (lastReading.windSpeed > 117) {
        beaufortScale = "Off the Charts";
      }
      return beaufortScale;
    }
    return null;
  },

  getCompassDirection(station) {
    let lastReading = null;
    let compassDirection = null;
    if (station.readings.length > 0) {
      lastReading = station.readings[station.readings.length - 1];

      if (
        lastReading.windDirection > 348.75 &&
        lastReading.windDirection <= 360
      ) {
        compassDirection = "N";
      } else if (
        lastReading.windDirection >= 0 &&
        lastReading.windDirection <= 11.25
      ) {
        compassDirection = "N";
      } else if (
        lastReading.windDirection > 11.25 &&
        lastReading.windDirection <= 33.75
      ) {
        compassDirection = "NNE";
      } else if (
        lastReading.windDirection > 33.75 &&
        lastReading.windDirection <= 56.25
      ) {
        compassDirection = "NE";
      } else if (
        lastReading.windDirection > 56.25 &&
        lastReading.windDirection <= 78.75
      ) {
        compassDirection = "ENE";
      } else if (
        lastReading.windDirection > 78.5 &&
        lastReading.windDirection <= 101.25
      ) {
        compassDirection = "E";
      } else if (
        lastReading.windDirection > 101.25 &&
        lastReading.windDirection <= 123.75
      ) {
        compassDirection = "ESE";
      } else if (
        lastReading.windDirection > 123.75 &&
        lastReading.windDirection <= 146.25
      ) {
        compassDirection = "SE";
      } else if (
        lastReading.windDirection > 146.25 &&
        lastReading.windDirection <= 168.75
      ) {
        compassDirection = "SSE";
      } else if (
        lastReading.windDirection > 168.75 &&
        lastReading.windDirection <= 191.25
      ) {
        compassDirection = "S";
      } else if (
        lastReading.windDirection > 191.25 &&
        lastReading.windDirection <= 213.75
      ) {
        compassDirection = "SSW";
      } else if (
        lastReading.windDirection > 213.75 &&
        lastReading.windDirection <= 236.25
      ) {
        compassDirection = "SW";
      } else if (
        lastReading.windDirection > 236.25 &&
        lastReading.windDirection <= 258.75
      ) {
        compassDirection = "WSW";
      } else if (
        lastReading.windDirection > 258.75 &&
        lastReading.windDirection <= 281.25
      ) {
        compassDirection = "W";
      } else if (
        lastReading.windDirection > 281.25 &&
        lastReading.windDirection <= 303.75
      ) {
        compassDirection = "WNW";
      } else if (
        lastReading.windDirection > 303.75 &&
        lastReading.windDirection <= 326.25
      ) {
        compassDirection = "NW";
      } else if (
        lastReading.windDirection > 326.25 &&
        lastReading.windDirection <= 348.75
      ) {
        compassDirection = "NNW";
      } else if (lastReading.windDirection > 360.0) {
        compassDirection = "Deleter and enter degrees 0-360 please";
      }
      return compassDirection;
    }
    return null;
  }
};

module.exports = stationAnalytics;

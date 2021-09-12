"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require("uuid");
const stationAnalytics = require("../utils/analytics");
const maxmin = require("../utils/maxmin");
const trends = require("../utils/trends");

const station = {
  index(request, response) {
    const stationId = request.params.id;
    logger.debug("Station id = ", stationId);

    const station = stationStore.getStation(stationId);

    
    if (station.readings.length > 0) {
      const lastReadingCode = parseInt(
        stationAnalytics.getLastReading(station).code
      );
      console.log("LatestCode", lastReadingCode);
      const lastReadingTempC = stationAnalytics.getLastReading(station)
        .temperature;
      console.log("LatestTempC", lastReadingTempC);
      const lastReadingTempF = (
        Math.round((lastReadingTempC * (9 / 5) + 32) * 100) / 100
      ).toFixed(2);
      console.log("LatestTempF", lastReadingTempF);
      const beaufort = stationAnalytics.getBeaufortScale(station);
      console.log("LatestBeaufoty", beaufort);
      const lastReadingPressure = stationAnalytics.getLastReading(station)
        .pressure;
      console.log("LatestPressure", lastReadingPressure);
      const compassDirection = stationAnalytics.getCompassDirection(station);
      console.log("LatestCompassDirection", compassDirection);
      const windChill = stationAnalytics.getWindChill(station);
      console.log("LatestWindChill", windChill);

      const weatherCode = stationAnalytics.weatherCode(lastReadingCode);
      const weatherIcon = stationAnalytics.weatherIcon(lastReadingCode);
      console.log("LatestWeather", weatherCode, weatherIcon);

      const maxTemperature = maxmin.getMaxTemperature(station);
      const minTemperature = maxmin.getMinTemperature(station);
      const maxWindSpeed = maxmin.getMaxWindSpeed(station);
      const minWindSpeed = maxmin.getMinWindSpeed(station);
      const maxPressure = maxmin.getMaxPressure(station);
      const minPressure = maxmin.getMinPressure(station);
      console.log("maxwindSpeed", maxWindSpeed);

      const temperatureTrends = trends.getTemperatureTrends(station);
      const windSpeedTrends = trends.getWindSpeedTrends(station);
      const pressureTrends = trends.getPressureTrends(station);
      console.log("Trends", temperatureTrends, windSpeedTrends, pressureTrends);

      const viewData = {
        title: "Station",
        station: stationStore.getStation(stationId),

        lastReadingCode: lastReadingCode,
        lastReadingTempC: lastReadingTempC,
        lastReadingTempF: lastReadingTempF,
        lastReadingPressure: lastReadingPressure,
        beaufort: beaufort,
        compassDirection: compassDirection,
        windChill: windChill,

        maxTemperature: maxTemperature,
        minTemperature: minTemperature,
        maxWindSpeed: maxWindSpeed,
        minWindSpeed: minWindSpeed,
        maxPressure: maxPressure,
        minPressure: minPressure,

        weatherCode: weatherCode,
        weatherIcon: weatherIcon,

        temperatureTrends: temperatureTrends,
        windSpeedTrends: windSpeedTrends,
        pressureTrends: pressureTrends
      };
      response.render("station", viewData);
    } else {
      const viewData = {
        title: "Station",
        station: stationStore.getStation(stationId)
      };
      response.render("station", viewData);
    }
  },

  addReading(request, response) {
    const stationId = request.params.id;
    const station = stationStore.getStation(stationId);
    const newReading = {
      date: new Date().toString(),
      id: uuid.v1(),
      code: request.body.code,
      temperature: request.body.temperature,
      windSpeed: request.body.windSpeed,
      pressure: request.body.pressure,
      windDirection: request.body.windDirection
    };
    stationStore.addReading(stationId, newReading);
    response.redirect("/station/" + stationId);
  },

  deleteReading(request, response) {
    const stationId = request.params.id;
    const readingId = request.params.readingid;
    logger.debug(`Deleting Readng ${readingId} from Station ${stationId}`);
    stationStore.removeReading(stationId, readingId);
    response.redirect("/station/" + stationId);
  }
};

module.exports = station;

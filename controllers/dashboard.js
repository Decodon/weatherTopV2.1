"use strict";

const logger = require("../utils/logger");
const stationStore = require("../models/station-store");
const uuid = require('uuid');
const accounts = require ('./accounts.js');
const stationAnalytics = require("../utils/analytics");
const maxmin = require("../utils/maxmin");
const trends= require("../utils/trends");

const dashboard = {
  
  index(request, response) {
    logger.info("dashboard rendering");
    const loggedInUser = accounts.getCurrentUser(request);
    
    
    const station = stationStore.getUserStations(loggedInUser.id);
    //const allStations = stationStore.getAllStations();
    
 //   for (let index = 0; index < allStations.length; index++) {
    
      //station.latestCode = stationAnalytics.getLastReading(station).temperature;

    //const lastReadingCode = stationAnalytics.getLastReading(station).code;
    //console.log("LatestCode", lastReadingCode);
    //}
    /*
    const lastReadingTempC = stationAnalytics.getLastReading(station).temperature;
    console.log("LatestTempC", lastReadingTempC);
    const lastReadingTempF = (lastReadingTempC*(9/5))+32;
    console.log("LatestTempF", lastReadingTempF);
    const beaufort = stationAnalytics.getBeaufortScale(station);
    console.log("LatestBeaufoty", beaufort);
    const lastReadingPressure = stationAnalytics.getLastReading(station).pressure;
    console.log("LatestPressure", lastReadingPressure);
    const compassDirection = stationAnalytics.getCompassDirection(station);
    console.log("LatestCompassDirection", compassDirection);
    const windChill = stationAnalytics.getWindChill(station);
    console.log("LatestWindChill", windChill);
    */

    
    const viewData = {
      title: "Station Dashboard",
      stations: stationStore.getUserStations(loggedInUser.id),
    };
    logger.info("about to render", stationStore.getAllStations());
    response.render("dashboard", viewData);
  },
  
  addStation(request, response) {
    const loggedInUser = accounts.getCurrentUser(request);
    const newStation = {
      id: uuid.v1(),
      userid: loggedInUser.id,
      name: request.body.name,
      lat: request.body.lat,
      lng: request.body.lng,
      readings:[]
    };
    logger.debug('Creating a new Station', newStation);
    stationStore.addStation(newStation);
    response.redirect('/dashboard');
  },
  
  deleteStation(request, response) {
    const stationId = request.params.id;
    logger.debug(`Deleting Station ${stationId}`);
    stationStore.removeStation(stationId);
    response.redirect('/dashboard');
  }
  
};

module.exports = dashboard;
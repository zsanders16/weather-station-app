const weatherForecasts = ( state = {
  weekly: [{ city: 'Salt Lake City',  days: [
  {
      "number": 1,
      "name": "Today",
      "startTime": "2017-07-11T08:00:00-06:00",
      "endTime": "2017-07-11T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 95,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "7 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
      "shortForecast": "Mostly Sunny",
      "detailedForecast": "Mostly sunny, with a high near 95. South southwest wind around 7 mph."
  },
  {
      "number": 2,
      "name": "Tonight",
      "startTime": "2017-07-11T18:00:00-06:00",
      "endTime": "2017-07-12T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 74,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "3 to 7 mph",
      "windDirection": "ENE",
      "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
      "shortForecast": "Partly Cloudy",
      "detailedForecast": "Partly cloudy, with a low around 74. East northeast wind 3 to 7 mph."
  },
  {
      "number": 3,
      "name": "Wednesday",
      "startTime": "2017-07-12T06:00:00-06:00",
      "endTime": "2017-07-12T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 94,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "6 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/day/tsra_hi,20/sct?size=medium",
      "shortForecast": "Isolated Showers And Thunderstorms then Mostly Sunny",
      "detailedForecast": "Isolated showers and thunderstorms before noon. Mostly sunny, with a high near 94. South southwest wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."
  },
  {
      "number": 4,
      "name": "Wednesday Night",
      "startTime": "2017-07-12T18:00:00-06:00",
      "endTime": "2017-07-13T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 73,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "6 mph",
      "windDirection": "NE",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 73. Northeast wind around 6 mph."
  },
  {
      "number": 5,
      "name": "Thursday",
      "startTime": "2017-07-13T06:00:00-06:00",
      "endTime": "2017-07-13T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 96,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "5 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
      "shortForecast": "Mostly Sunny",
      "detailedForecast": "Mostly sunny, with a high near 96. South southwest wind around 5 mph."
  },
  {
      "number": 6,
      "name": "Thursday Night",
      "startTime": "2017-07-13T18:00:00-06:00",
      "endTime": "2017-07-14T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 73,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "9 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
      "shortForecast": "Partly Cloudy",
      "detailedForecast": "Partly cloudy, with a low around 73."
  },
  {
      "number": 7,
      "name": "Friday",
      "startTime": "2017-07-14T06:00:00-06:00",
      "endTime": "2017-07-14T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 98,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "3 to 7 mph",
      "windDirection": "S",
      "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
      "shortForecast": "Mostly Sunny",
      "detailedForecast": "Mostly sunny, with a high near 98."
  },
  {
      "number": 8,
      "name": "Friday Night",
      "startTime": "2017-07-14T18:00:00-06:00",
      "endTime": "2017-07-15T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 74,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "6 mph",
      "windDirection": "NNE",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 74."
  },
  {
      "number": 9,
      "name": "Saturday",
      "startTime": "2017-07-15T06:00:00-06:00",
      "endTime": "2017-07-15T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 97,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "3 to 7 mph",
      "windDirection": "SSW",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "shortForecast": "Sunny",
      "detailedForecast": "Sunny, with a high near 97."
  },
  {
      "number": 10,
      "name": "Saturday Night",
      "startTime": "2017-07-15T18:00:00-06:00",
      "endTime": "2017-07-16T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 74,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "2 to 6 mph",
      "windDirection": "NNE",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 74."
  },
  {
      "number": 11,
      "name": "Sunday",
      "startTime": "2017-07-16T06:00:00-06:00",
      "endTime": "2017-07-16T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 98,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "2 to 6 mph",
      "windDirection": "N",
      "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
      "shortForecast": "Sunny",
      "detailedForecast": "Sunny, with a high near 98."
  },
  {
      "number": 12,
      "name": "Sunday Night",
      "startTime": "2017-07-16T18:00:00-06:00",
      "endTime": "2017-07-17T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 74,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "3 to 7 mph",
      "windDirection": "NNE",
      "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
      "shortForecast": "Mostly Clear",
      "detailedForecast": "Mostly clear, with a low around 74."
  },
  {
      "number": 13,
      "name": "Monday",
      "startTime": "2017-07-17T06:00:00-06:00",
      "endTime": "2017-07-17T18:00:00-06:00",
      "isDaytime": true,
      "temperature": 98,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "3 to 7 mph",
      "windDirection": "S",
      "icon": "https://api.weather.gov/icons/land/day/sct/tsra_hi,20?size=medium",
      "shortForecast": "Mostly Sunny then Slight Chance Showers And Thunderstorms",
      "detailedForecast": "A slight chance of showers and thunderstorms after noon. Mostly sunny, with a high near 98. Chance of precipitation is 20%."
  },
  {
      "number": 14,
      "name": "Monday Night",
      "startTime": "2017-07-17T18:00:00-06:00",
      "endTime": "2017-07-18T06:00:00-06:00",
      "isDaytime": false,
      "temperature": 75,
      "temperatureUnit": "F",
      "temperatureTrend": null,
      "windSpeed": "6 mph",
      "windDirection": "NE",
      "icon": "https://api.weather.gov/icons/land/night/tsra_hi,20/sct?size=medium",
      "shortForecast": "Slight Chance Showers And Thunderstorms then Partly Cloudy",
      "detailedForecast": "A slight chance of showers and thunderstorms before midnight. Partly cloudy, with a low around 75. Chance of precipitation is 20%."
  }]
}], cityView: 'Salt Lake City'

}, action ) => {
  switch( action.type ) {
    case 'WEATHER_FORECAST_WEEKLY':
      return { weekly: [...state.weekly, { city: action.city, days: action.data }], cityView: state.cityView }
    case 'SET_CITY_VIEW':
      return { weekly: [...state.weekly], cityView: action.city }
    // case 'WEATHER_FORECAST_HOURLY':
    //   return { hourly: action.data }
    // case 'WEATHER_FORECAST_MONTLY':
    //   return { monthly: action.data }
    // case 'WEATHER_FORECAST-YEARLY':
    //   return { yearly: action.data }
    default:
      return state
  }
}

export default weatherForecasts;

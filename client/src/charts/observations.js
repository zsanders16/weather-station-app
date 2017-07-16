const observationData = {   
    "@context": [
        "https://raw.githubusercontent.com/geojson/geojson-ld/master/contexts/geojson-base.jsonld",
        {
            "wx": "https://api.weather.gov/ontology#",
            "s": "https://schema.org/",
            "geo": "http://www.opengis.net/ont/geosparql#",
            "unit": "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#",
            "geometry": {
                "@id": "s:GeoCoordinates",
                "@type": "geo:wktLiteral"
            },
            "city": "s:addressLocality",
            "state": "s:addressRegion",
            "distance": {
                "@id": "s:Distance",
                "@type": "s:QuantitativeValue"
            },
            "bearing": {
                "@type": "s:QuantitativeValue"
            },
            "value": {
                "@id": "s:value"
            },
            "unitCode": {
                "@id": "s:unitCode",
                "@type": "@id"
            },
            "forecastOffice": {
                "@type": "@id"
            },
            "forecastGridData": {
                "@type": "@id"
            },
            "publicZone": {
                "@type": "@id"
            },
            "county": {
                "@type": "@id"
            }
        }
    ],
    "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T19:53:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.2200012207,
                    43.569999694824
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T19:53:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 874,
                    "unitCode": "unit:m"
                },
                "station": "https://api.weather.gov/stations/KBOI",
                "timestamp": "2017-07-10T19:53:00+00:00",
                "rawMessage": "KBOI 101953Z 36007KT 10SM CLR 32/08 A2991 RMK AO2 SLP093 T03220083",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "value": 32.200006103516,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "dewpoint": {
                    "value": 8.3000122070313,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "windDirection": {
                    "value": 360,
                    "unitCode": "unit:degree_(angle)",
                    "qualityControl": "qc:V"
                },
                "windSpeed": {
                    "value": 3.5999999046326,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:V"
                },
                "windGust": {
                    "value": null,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:Z"
                },
                "barometricPressure": {
                    "value": 101290,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "seaLevelPressure": {
                    "value": 100930,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "visibility": {
                    "value": 16090,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:C"
                },
                "maxTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "minTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "precipitationLastHour": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast3Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast6Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "relativeHumidity": {
                    "value": 22.7661142647,
                    "unitCode": "unit:percent",
                    "qualityControl": "qc:C"
                },
                "windChill": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "heatIndex": {
                    "value": 30.344193025839,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "value": null,
                            "unitCode": "unit:m"
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T18:53:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.2200012207,
                    43.569999694824
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T18:53:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 874,
                    "unitCode": "unit:m"
                },
                "station": "https://api.weather.gov/stations/KBOI",
                "timestamp": "2017-07-10T18:53:00+00:00",
                "rawMessage": "KBOI 101853Z 02004KT 10SM CLR 31/08 A2993 RMK AO2 SLP097 T03110083",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "value": 31.1,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "dewpoint": {
                    "value": 8.3000122070313,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "windDirection": {
                    "value": 20,
                    "unitCode": "unit:degree_(angle)",
                    "qualityControl": "qc:V"
                },
                "windSpeed": {
                    "value": 2.0999999046326,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:V"
                },
                "windGust": {
                    "value": null,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:Z"
                },
                "barometricPressure": {
                    "value": 101360,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "seaLevelPressure": {
                    "value": 100970,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "visibility": {
                    "value": 16090,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:C"
                },
                "maxTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "minTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "precipitationLastHour": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast3Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast6Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "relativeHumidity": {
                    "value": 24.233140503461,
                    "unitCode": "unit:percent",
                    "qualityControl": "qc:C"
                },
                "windChill": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "heatIndex": {
                    "value": 29.384206439574,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "value": null,
                            "unitCode": "unit:m"
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T17:53:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.2200012207,
                    43.569999694824
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T17:53:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 874,
                    "unitCode": "unit:m"
                },
                "station": "https://api.weather.gov/stations/KBOI",
                "timestamp": "2017-07-10T17:53:00+00:00",
                "rawMessage": "KBOI 101753Z 28008KT 10SM CLR 29/08 A2994 RMK AO2 SLP102 T02890083 10289 20200 50004",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "value": 28.899987792969,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "dewpoint": {
                    "value": 8.3000122070313,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "windDirection": {
                    "value": 280,
                    "unitCode": "unit:degree_(angle)",
                    "qualityControl": "qc:V"
                },
                "windSpeed": {
                    "value": 4.0999999046326,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:V"
                },
                "windGust": {
                    "value": null,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:Z"
                },
                "barometricPressure": {
                    "value": 101390,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "seaLevelPressure": {
                    "value": 101020,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "visibility": {
                    "value": 16090,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:C"
                },
                "maxTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "minTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "precipitationLastHour": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast3Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast6Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "relativeHumidity": {
                    "value": 27.498531719528,
                    "unitCode": "unit:percent",
                    "qualityControl": "qc:C"
                },
                "windChill": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "heatIndex": {
                    "value": 27.660318246717,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "value": null,
                            "unitCode": "unit:m"
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T16:53:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.2200012207,
                    43.569999694824
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T16:53:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 874,
                    "unitCode": "unit:m"
                },
                "station": "https://api.weather.gov/stations/KBOI",
                "timestamp": "2017-07-10T16:53:00+00:00",
                "rawMessage": "KBOI 101653Z 30006KT 10SM CLR 26/09 A2994 RMK AO2 SLP103 T02610089",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "value": 26.1,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "dewpoint": {
                    "value": 8.8999877929688,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "windDirection": {
                    "value": 300,
                    "unitCode": "unit:degree_(angle)",
                    "qualityControl": "qc:V"
                },
                "windSpeed": {
                    "value": 3.0999999046326,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:V"
                },
                "windGust": {
                    "value": null,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:Z"
                },
                "barometricPressure": {
                    "value": 101390,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "seaLevelPressure": {
                    "value": 101030,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "visibility": {
                    "value": 16090,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:C"
                },
                "maxTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "minTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "precipitationLastHour": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast3Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast6Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "relativeHumidity": {
                    "value": 33.736952266275,
                    "unitCode": "unit:percent",
                    "qualityControl": "qc:C"
                },
                "windChill": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "heatIndex": {
                    "value": 25.646464864731,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "value": null,
                            "unitCode": "unit:m"
                        },
                        "amount": "CLR"
                    }
                ]
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T15:53:00+00:00",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.2200012207,
                    43.569999694824
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI/observations/2017-07-10T15:53:00+00:00",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 874,
                    "unitCode": "unit:m"
                },
                "station": "https://api.weather.gov/stations/KBOI",
                "timestamp": "2017-07-10T15:53:00+00:00",
                "rawMessage": "KBOI 101553Z 22005KT 10SM CLR 26/08 A2994 RMK AO2 SLP103 T02560078",
                "textDescription": "Clear",
                "icon": "https://api.weather.gov/icons/land/day/skc?size=medium",
                "presentWeather": [],
                "temperature": {
                    "value": 25.6,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "dewpoint": {
                    "value": 7.8000122070313,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "windDirection": {
                    "value": 220,
                    "unitCode": "unit:degree_(angle)",
                    "qualityControl": "qc:V"
                },
                "windSpeed": {
                    "value": 2.5999999046326,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:V"
                },
                "windGust": {
                    "value": null,
                    "unitCode": "unit:m_s-1",
                    "qualityControl": "qc:Z"
                },
                "barometricPressure": {
                    "value": 101390,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "seaLevelPressure": {
                    "value": 101030,
                    "unitCode": "unit:Pa",
                    "qualityControl": "qc:V"
                },
                "visibility": {
                    "value": 16090,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:C"
                },
                "maxTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "minTemperatureLast24Hours": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": null
                },
                "precipitationLastHour": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast3Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "precipitationLast6Hours": {
                    "value": null,
                    "unitCode": "unit:m",
                    "qualityControl": "qc:Z"
                },
                "relativeHumidity": {
                    "value": 32.254525761145,
                    "unitCode": "unit:percent",
                    "qualityControl": "qc:C"
                },
                "windChill": {
                    "value": null,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "heatIndex": {
                    "value": 25.057757061541,
                    "unitCode": "unit:degC",
                    "qualityControl": "qc:V"
                },
                "cloudLayers": [
                    {
                        "base": {
                            "value": null,
                            "unitCode": "unit:m"
                        },
                        "amount": "CLR"
                    }
                ]
            }
        }
    ]
}

export default observationData

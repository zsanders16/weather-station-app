const dataSeries = {
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
            },
            "observationStations": {
                "@container": "@list",
                "@type": "@id"
            }
        }
    ],
    "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/stations/KBOI",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -116.24053,
                    43.56704
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOI",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 860.1456,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBOI",
                "name": "Boise Air Terminal",
                "timeZone": "America/Boise"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KPHX",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.003465,
                    33.427799
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KPHX",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 339.852,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KPHX",
                "name": "Phoenix, Phoenix Sky Harbor International Airport",
                "timeZone": "America/Phoenix"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSFO",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.36558,
                    37.61961
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSFO",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 3.048,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSFO",
                "name": "San Francisco, San Francisco International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KDDC",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -99.96972,
                    37.77278
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KDDC",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 790.0416,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KDDC",
                "name": "Dodge City, Dodge City Regional Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KABQ",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -106.61472,
                    35.04167
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KABQ",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1630.9848,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KABQ",
                "name": "Albuquerque, Albuquerque International Airport",
                "timeZone": "America/Denver"
            }
        }
    ],
    "observationStations": [
        "https://api.weather.gov/stations/KBOI",
        "https://api.weather.gov/stations/KPHX",
        "https://api.weather.gov/stations/KSFO",
        "https://api.weather.gov/stations/KDDC",
        "https://api.weather.gov/stations/KABQ"
    ]
};

export default dataSeries;

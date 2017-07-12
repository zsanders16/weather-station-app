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
        },
        {
            "id": "https://api.weather.gov/stations/KLAX",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -118.38889,
                    33.93806
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KLAX",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 38.1,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KLAX",
                "name": "Los Angeles, Los Angeles International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KGTF",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -111.38222,
                    47.47333
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KGTF",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1120.14,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KGTF",
                "name": "Great Falls, Great Falls International Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSLC",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -111.96503,
                    40.77069
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSLC",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1288.0848,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSLC",
                "name": "Salt Lake City, Salt Lake City International Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KMFR",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.87696,
                    42.37503
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KMFR",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 399.8976,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KMFR",
                "name": "Rogue Valley International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KDEN",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -104.65622,
                    39.84658
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KDEN",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1647.1392,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KDEN",
                "name": "Denver, Denver International Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSEA",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.31361,
                    47.44472
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSEA",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 130.1496,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSEA",
                "name": "Seattle, Seattle-Tacoma International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KTPH",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.08722,
                    38.06028
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KTPH",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1653.8448,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KTPH",
                "name": "Tonopah, Tonopah Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBIS",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -100.75722,
                    46.7825
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBIS",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 511.1496,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBIS",
                "name": "Bismarck, Bismarck Municipal Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KLBB",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -101.82139,
                    33.6675
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KLBB",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1000.0488,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KLBB",
                "name": "Lubbock, Lubbock International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KANJ",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.35722,
                    46.47944
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KANJ",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 210.0072,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KANJ",
                "name": "Sault Ste. Marie",
                "timeZone": "America/Detroit"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KATL",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.42694,
                    33.64028
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KATL",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 313.0296,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KATL",
                "name": "Atlanta, Hartsfield - Jackson Atlanta International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBUF",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -78.73604,
                    42.93998
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBUF",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 216.1032,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBUF",
                "name": "Buffalo, Greater Buffalo International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KCAR",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -68.01333,
                    46.86722
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KCAR",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 191.1096,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KCAR",
                "name": "Caribou, Caribou Municipal Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBOS",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -71.01056,
                    42.36056
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBOS",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 6.096,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBOS",
                "name": "Boston, Logan International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KDFW",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -97.02196,
                    32.89743
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KDFW",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 164.8968,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KDFW",
                "name": "Dallas/Fort Worth International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBRO",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -97.42306,
                    25.91417
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBRO",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 7.0104,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBRO",
                "name": "Brownsville, Brownsville / South Padre Island International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KCVG",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -84.67229,
                    39.04456
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KCVG",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 262.128,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KCVG",
                "name": "Cincinnati/Northern Kentucky International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KIAD",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.4475,
                    38.93472
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KIAD",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 95.0976,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KIAD",
                "name": "Washington/Dulles International Airport, DC",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/PAJN",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -134.57611,
                    58.35472
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/PAJN",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 6.096,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "PAJN",
                "name": "Juneau, Juneau International Airport",
                "timeZone": "America/Juneau"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KILM",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.89987,
                    34.26681
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KILM",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 7.0104,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KILM",
                "name": "Wilmington International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KLIT",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -92.23611,
                    34.72667
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KLIT",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 78.9432,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KLIT",
                "name": "Little Rock, Adams Field",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KJAX",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -81.69333,
                    30.49444
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KJAX",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 9.144,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KJAX",
                "name": "Jacksonville, Jacksonville International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KMCI",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -94.73056,
                    39.29722
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KMCI",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 312.1152,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KMCI",
                "name": "Kansas City, Kansas City International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KMSY",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -90.25083,
                    29.99278
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KMSY",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 0.9144,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KMSY",
                "name": "New Orleans, New Orleans International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KMIA",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.31639,
                    25.79056
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KMIA",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 3.048,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KMIA",
                "name": "Miami, Miami International Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KMSP",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -93.22889,
                    44.88306
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KMSP",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 256.032,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KMSP",
                "name": "Minneapolis, Minneapolis-St. Paul International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSTL",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -90.37361,
                    38.7525
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSTL",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 184.0992,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSTL",
                "name": "St. Louis, Lambert-St. Louis International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSAT",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -98.46361,
                    29.53278
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSAT",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 245.9736,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSAT",
                "name": "San Antonio, San Antonio International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KORD",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -87.90444,
                    41.97972
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KORD",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 202.9968,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KORD",
                "name": "Chicago, Chicago-O'Hare International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBJC",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -105.10417,
                    39.90085
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBJC",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1691.9448,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBJC",
                "name": "Broomfield / Jeffco",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBFI",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.31361,
                    47.54583
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBFI",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 4.8768,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBFI",
                "name": "Seattle, Seattle Boeing Field",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSAF",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -106.09573,
                    35.61097
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSAF",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1908.048,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSAF",
                "name": "Santa Fe County Municipal Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KFAR",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -96.81111,
                    46.92528
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KFAR",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 274.0152,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KFAR",
                "name": "Fargo, Hector International Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KOGD",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.01681,
                    41.19406
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KOGD",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1353.312,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KOGD",
                "name": "Ogden-Hinckley Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KGEG",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.52778,
                    47.62139
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KGEG",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 722.9856,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KGEG",
                "name": "Spokane, Spokane International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KONT",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -117.57583,
                    34.05333
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KONT",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 287.1216,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KONT",
                "name": "Ontario, Ontario International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KEUG",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -123.21444,
                    44.13333
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KEUG",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 110.9472,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KEUG",
                "name": "Eugene, Mahlon Sweet Field",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KDVT",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -112.06618,
                    33.69026
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KDVT",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 452.9328,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KDVT",
                "name": "Phoenix, Phoenix-Deer Valley Municipal Airport",
                "timeZone": "America/Phoenix"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KOAK",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -122.23294,
                    37.7178
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KOAK",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 0.9144,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KOAK",
                "name": "Oakland, Metro Oakland International Airport",
                "timeZone": "America/Los_Angeles"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KSHR",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -106.97411,
                    44.76031
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KSHR",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 1210.056,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KSHR",
                "name": "Sheridan County Airport",
                "timeZone": "America/Denver"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KVTN",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -100.55139,
                    42.85861
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KVTN",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 789.1272,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KVTN",
                "name": "Valentine, Miller Field",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KBLV",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -89.85,
                    38.55
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KBLV",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 139.9032,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KBLV",
                "name": "Belleville, Scott AFB/MidAmerica Airport",
                "timeZone": "America/Chicago"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KCRG",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -81.51275,
                    30.33709
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KCRG",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 10.9728,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KCRG",
                "name": "Jacksonville Craig Municipal Airport",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KCHS",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -80.04056,
                    32.89889
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KCHS",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 14.0208,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KCHS",
                "name": "Charleston, Charleston Air Force Base",
                "timeZone": "America/New_York"
            }
        },
        {
            "id": "https://api.weather.gov/stations/KDCA",
            "type": "Feature",
            "geometry": {
                "type": "Point",
                "coordinates": [
                    -77.03417,
                    38.84833
                ]
            },
            "properties": {
                "@id": "https://api.weather.gov/stations/KDCA",
                "@type": "wx:ObservationStation",
                "elevation": {
                    "value": 3.9624,
                    "unitCode": "unit:m"
                },
                "stationIdentifier": "KDCA",
                "name": "Washington/Reagan National Airport, DC",
                "timeZone": "America/New_York"
            }
        }
    ],
    "observationStations": [
        "https://api.weather.gov/stations/KBOI",
        "https://api.weather.gov/stations/KPHX",
        "https://api.weather.gov/stations/KSFO",
        "https://api.weather.gov/stations/KDDC",
        "https://api.weather.gov/stations/KABQ",
        "https://api.weather.gov/stations/KLAX",
        "https://api.weather.gov/stations/KGTF",
        "https://api.weather.gov/stations/KSLC",
        "https://api.weather.gov/stations/KMFR",
        "https://api.weather.gov/stations/KDEN",
        "https://api.weather.gov/stations/KSEA",
        "https://api.weather.gov/stations/KTPH",
        "https://api.weather.gov/stations/KBIS",
        "https://api.weather.gov/stations/KLBB",
        "https://api.weather.gov/stations/KANJ",
        "https://api.weather.gov/stations/KATL",
        "https://api.weather.gov/stations/KBUF",
        "https://api.weather.gov/stations/KCAR",
        "https://api.weather.gov/stations/KBOS",
        "https://api.weather.gov/stations/KDFW",
        "https://api.weather.gov/stations/KBRO",
        "https://api.weather.gov/stations/KCVG",
        "https://api.weather.gov/stations/KIAD",
        "https://api.weather.gov/stations/PAJN",
        "https://api.weather.gov/stations/KILM",
        "https://api.weather.gov/stations/KLIT",
        "https://api.weather.gov/stations/KJAX",
        "https://api.weather.gov/stations/KMCI",
        "https://api.weather.gov/stations/KMSY",
        "https://api.weather.gov/stations/KMIA",
        "https://api.weather.gov/stations/KMSP",
        "https://api.weather.gov/stations/KSTL",
        "https://api.weather.gov/stations/KSAT",
        "https://api.weather.gov/stations/KORD",
        "https://api.weather.gov/stations/KBJC",
        "https://api.weather.gov/stations/KBFI",
        "https://api.weather.gov/stations/KSAF",
        "https://api.weather.gov/stations/KFAR",
        "https://api.weather.gov/stations/KOGD",
        "https://api.weather.gov/stations/KGEG",
        "https://api.weather.gov/stations/KONT",
        "https://api.weather.gov/stations/KEUG",
        "https://api.weather.gov/stations/KDVT",
        "https://api.weather.gov/stations/KOAK",
        "https://api.weather.gov/stations/KSHR",
        "https://api.weather.gov/stations/KVTN",
        "https://api.weather.gov/stations/KBLV",
        "https://api.weather.gov/stations/KCRG",
        "https://api.weather.gov/stations/KCHS",
        "https://api.weather.gov/stations/KDCA"
    ]
};

export default dataSeries;

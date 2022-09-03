# AvaInfo Vector Tileset 

This vector tileset is Mapbox compatible and generates [CAAMLv5] compliant json files. AvaInfo vector tiles follows the [Mapbox tile specification](https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/).

The tileset has been processed for zoom levels 0 - 6 (inclusive). 

## Endpoint


```bash
mapbox://avainfo.avalanche-danger-map
```

You can request tilesets directly using the tileset ID in a request to [Mapbox Vector Tiles API](https://docs.mapbox.com/help/glossary/vector-tiles-api/)


## Fields

Bulletin reports vary accross regions. To the extent possible, fields follow the naming conventions used by CAAMLv6. 

|Fields                                                     |Type   |Description                                                                                                                                          |
|:-----------------------------------------------------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|`avalancheActivityComment`                                   |string |Avalanche activity                                                                                                                                  |
|`avalancheActivityHighlights`                                |string |Short highlight of avalanche activity                                                                                                                |
|`avalancheSituation_[num]_aspects`                       |string |One or more of N, NE, E, SE, S, SW, W, NE                                                                                                            |
|`avalancheSituation_[num]_elevation_lowerBound_numeric`|number |Elevation below a certain bound in m.                                                                                                                |
|`avalancheSituation_[num]_elevation_lowerBound_string` |string |Elevation above a certain bound using pattern `treeline\|0\|[1-9][0-9]*[0][0]+`                                                               |
|`avalancheSituation_[num]_elevation_upperBound_numeric`|number |Elevation below a certain bound in m                                                                                                                 |
|`avalancheSituation_[num]_elevation_upperBound_string` |string |Elevation above a certain bound using pattern `treeline\|0\|[1-9][0-9]*[0][0]+`                                         |
|`avalancheSituation_[num]_terrainFeature`                |string |comments on terrain features                                                                                                                         |
|`avalancheSituation_[num]_type`                          |string |One of new\_snow, wind\_slab, persistent\_weak\_layers, wet\_snow, gliding\_snow, cornices, no\_distinct\_avalanche\_problem or favourable\_situation|
|`avalancheSituation_[num]_validTimePeriod`               |string |One of earlier, later or allDay                                                                                                                      |
|`bulletinDate`                                               |string |Bulletin date in format YYYY-MM-DD                                                                                                                   |
|`bulletinId`                                                 |string |Unique ID for bulletin report                                                                                                                        |
|`bulletinURI`                                                |string |URL for bulletin report                                                                                                                              |
|`dangerPatterns`                                             |       |                                                                                                                                                     |
|`dangerRating_[num]_aspect`                              |string |One or more of N, NE, E, SE, S, SW, W, NE                                                                                                            |
|`dangerRating_[num]_elevation_lowerBound_numeric`      |number |Elevation below a certain bound in m                                                                                                                 |
|`dangerRating_[num]_elevation_lowerBound_string`       |string |Elevation above a certain bound using pattern `treeline\|0\|[1-9][0-9]*[0][0]+`                                                             |
|`dangerRating_[num]_elevation_upperBound_numeric`      |number |Elevation below a certain bound in m                                                                                                                 |
|`dangerRating_[num]_elevation_upperBound_string`       |string |Elevation above a certain bound using pattern `treeline\|0\|[1-9][0-9]*[0][0]+`                                                            |
|`dangerRating_[num]_mainValue`                           |number |One of 1, 2, 3, 4, 5                                                                                                                                 |
|`dangerRating_[num]_validTimePeriod`                     |string |One of earlier, later or allDay                                                                                                                      |
|`hasDaytimeDependency`                                       |boolean|True if there is an afternoon bulletin report                                                                                                        |
|`highlights`                                                 |string |Optional short text to highlight an exceptionally dangerous situation                                                                                |
|`lang`                                                      |string |Two-letter language code (ISO 639-1)                                                                                                                 |
|`maxDangerRating`                                            |number |One of 1, 2, 3, 4, 5                                                                                                                                 |
|`maxDangerRating_earlier`                                   |number |One of 1, 2, 3, 4, 5                                                                                                                                 |
|`maxDangerRating_later`                                     |number |One of 1, 2, 3, 4, 5                                                                                                                                 |
|`pdfURI`                                                     |string |URL to pdf of bulletin report                                                                                                                        |
|`publicationTime`                                            |string |Time and date when the bulletin was issued by the AWS to the Public. ISO 8601 timestamp in UTC or with time zone information.                        |
|`regionId`                                                   |string |ID of region following <a href="gitlab.com/eaws/eaws-regions">EAWS schema</a>                                                                      |
|`regionName`                                                |string |Name of region                                                                                                                                       |
|`snowpackStructureComment`                                   |string |Details on snowpack structure                                                                                                                        |
|`source`                                                     |string |Name of bulletin provider                                                                                                                            |
|`tendencyComment`                                            |string |Expected avalance situation tendency after the bulletins period of validitiy                                                                         |
|`tendencyType`                                               |string |One of decreasing, steady or increasing                                                                                                              |
|`validEndTime`                                               |string |Validity end time of bulletin report as date-time string                                                                                             |
|`validStartTime`                                             |string |Validity start time of bulletin report as date-time string                                                                                           |
|`wxSynopsisComments`                                         |string |Weather forecast information                                                                                                                         |

## Data sources and updates

The following regions and localizations are currently supported:

|Region  | Data Source   | Available languages  |
|:--------------|:-------|:---------------------------------------------|
|`AT Tirol`| https://avalanche.report | EN |
| `AT Kärnten` | https://lawinenwarndienst.ktn.gv.at/ | DE |
| `AT Salzburg` | https://lawine.salzburg.at/ | EN/DE |
| `AT Styria` | https://www.lawine-steiermark.at/ | EN/DE |
| `AT Vorarlberg` | https://warndienste.cnv.at/dibos/lawine/index.html | EN/DE |
| `CH (including FL)` | https://www.slf.ch/en/index.html | EN/DE |
| `DE Bavaria` | https://www.lawinenwarndienst-bayern.de | EN/DE |
| `ES Val d'Aran` | https://lauegi.conselharan.org/ | EN/DE |
| `FR` | https://meteofrance.com/meteo-montagne | FR |
| `IT Bolzano` | https://avalanche.report | EN/DE |
| `IT Trentino` | https://avalanche.report | EN/DE |
| `IT Piemonte` | https://bollettini.aineva.it/ | EN/DE/FR |
| `IT Valle d’Aosta` | https://bollettini.aineva.it/ | EN/DE/FR |
| `IT Lombardia` | https://bollettini.aineva.it/ | EN/DE/FR |
| `IT Veneto` | https://bollettini.aineva.it/ | EN/DE/FR |
| `IT Friuli – Venezia Giulia` | https://bollettini.aineva.it/ | EN/DE/FR |
| `IT Marche` | https://bollettini.aineva.it/ | EN/DE/FR|
| `SI` | http://meteo.arso.gov.si/ | SI |

### Data updates

During the winter season, AvaInfo vector tileset is updated hourly from 6:00--19:00 each day. Depending on the region, the winter season usually runs from late November to early April. Avalanche bulletins are usually issued once a day at 17:00/18:00. Bulletin updates are sometimes issued by 9:00am for that day and rarely may be published at other times. 

AvaInfo vector layers are not published uutside of the winter period due to the lack of avalanche bulletins. 

### Attribution

When you publicly use styles or software that use AvaInfo vector tiles, you must display proper attribution. 
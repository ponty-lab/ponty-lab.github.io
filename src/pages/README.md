# Avalanche Danger Vector Tileset 


**AvaInfo Danger Map** is a Mapbox-hosted vector tileset that includes geometries and metadata for avalanche danger levels in the Alps and more information from the bulletin reports. Avalanche Danger vector tileset follows the [Mapbox tile specification](https://docs.mapbox.com/data/tilesets/guides/vector-tiles-standards/).



## Endpoint


```
mapbox://avainfo.avalanche-danger-map
```

You can request tilesets directly using the tileset ID: `avainfo.avalanche-danger-map` in a request to [Mapbox Vector Tiles API](https://docs.mapbox.com/help/glossary/vector-tiles-api/).


## Fields

The Avainfo Danger tileset contains one layer with the following fields adopting the <a href="https://www.avalanches.org/standards/">EAWS standards</a>. Optional fields are marked in *italics* under type.

|Fields                                                     |Type   |Description                                                                                                                                          |
|:-----------------------------------------------------------|:-------|:-----------------------------------------------------------------------------------------------------------------------------------------------------|
|`avalancheActivityComment`                                   |*string* | Comments on avalanche activity                                                                                                                                  |
|`avalancheActivityHighlights`                                |*string* |Short highlight of avalanche activity                                                                                                |
|`avalancheSituation_<num>_aspects`                       |*string* | Aspects affected by the avalanche problem. One or more of N, NE, E, SE, S, SW, W, NE                                          |
|`avalancheSituation_<num>_elevation_lowerBound_numeric`|*number* | Avalanche problem applies below the elevation bound, given in m. |
|`avalancheSituation_<num>_elevation_lowerBound_string` | *string* | Elevation can be treeline or a string numerical value in m using pattern `treeline\|0\|[1-9][0-9]*[0][0]+m`                                                  |
|`avalancheSituation_<num>_elevation_upperBound_numeric`|*number* |Avalanche problem applies below the elevation bound, given in m. |
|`avalancheSituation_<num>_elevation_upperBound_string` |*string* |Elevation can be treeline or a string numerical value in m using pattern `treeline\|0\|[1-9][0-9]*[0][0]m`                                       |
|`avalancheSituation_<num>_terrainFeature`                |*string* |Comments on terrain features affected by the avalanche problem                                                      |
|`avalancheSituation_<num>_type`                          |string |Type of avalanche problem. One of new\_snow, wind\_slab, persistent\_weak\_layers, wet\_snow, gliding\_snow, cornices, no\_distinct\_avalanche\_problem or favourable\_situation|
|`avalancheSituation_<num>_validTimePeriod`               |*string* | The part of the day affected by the avalanche problem. One of earlier, later or allDay                                                                                                                      |
|`bulletinDate`                                               |string |Bulletin date in format YYYY-MM-DD                                                                                                                   |
|`bulletinID`                                                 |string |Unique ID for bulletin report                                                                                                                        |
|`bulletinURI`                                                |string |URL for bulletin report                                                                                                                              |
|`dangerPatterns`                                             |       |                                                                                                                                                     |
|`dangerRating_<num>_aspect`                              |*string* |Aspects affected by danger rating value. One or more of N, NE, E, SE, S, SW, W, NE                  |
|`dangerRating_<num>_elevation_lowerBound_numeric`      |*number* |Danger rating applies below the elevation bound given in m.                                                                 |
|`dangerRating_<num>_elevation_lowerBound_string`       |*string* |Elevation can be treeline or a string numerical value in m using pattern `treeline\|0\|[1-9][0-9]*[0][0]+m`                         |
|`dangerRating_<num>_elevation_upperBound_numeric`      |*number*|Danger rating applies above the elevation bound given in m.                                                                       |
|`dangerRating_<num>_elevation_upperBound_string`       |*string* |Elevation can be treeline or a string numerical value in m using pattern `treeline\|0\|[1-9][0-9]*[0][0]+m`                    |
|`dangerRating_<num>_mainValue_numeric`                           |number | Danger Rating. One of 1, 2, 3, 4 or 5 |
|`dangerRating_<num>_mainValue_string`                           |number | Danger Rating. One of low, moderate, considerable, high or very high |
|`dangerRating_<num>_validTimePeriod`                     |string | The part of the day affected by the danger rating. One of earlier, later or allDay                                                                                                                      |
|`hasDaytimeDependency`                                       |boolean|True if there is an afternoon bulletin report                                                                                                        |
|`highlights`                                                 |*string* |Optional short text to highlight an exceptionally dangerous situation                                                                                |
|`lang`                                                      |string |Two-letter language code (ISO 639-1)                                                                                                                 |
|`maxDangerRating_numeric`                                            |number |Maximum danger rating for the day. One of 1, 2, 3, 4, 5                   |
|`maxDangerRating_string`                                            |number |Maximum danger rating for the day. One of low, moderate, considerable, high or very high                   |
|`maxDangerRating_earlier_numeric`                                   |*number* |Maximum danger rating for the morning. One of 1, 2, 3, 4, 5      |
|`maxDangerRating_earlier_string`                                   |*number* |Maximum danger rating for the morning. One of low, moderate, considerable, high or very high     |
|`maxDangerRating_later_numeric`                                     |*number* |Maximum danger rating for the afternoon. One of 1, 2, 3, 4, 5  |
|`maxDangerRating_later_string`                                     |*number* |Maximum danger rating for the afternoon. One of low, moderate, considerable, high or very high  |
|`pdfURI`                                                     |string |URL to pdf of bulletin report                                                                                                                        |
|`publicationTime`                                            |string |Time and date when the bulletin was issued by the AWS to the public. ISO 8601 timestamp in UTC or with time zone information.                        |
|`regionID`                                                   |string |ID of region following <a href="https://gitlab.com/eaws/eaws-regions">EAWS schema</a>                                                                      |
|`regionName`                                                |string |Name of region                                                                                                                                       |
|`snowpackStructureComment`                                   |*string* |Details on snowpack structure                                                                                                                        |
|`source`                                                     |string |Name of bulletin provider                                                                                                                            |
|`tendencyComment`                                            |*string* |Comments on expected avalanche situation tendency after the bulletin's period of validity                                                                         |
|`tendencyType`                                               |*string* |One of decreasing, steady or increasing                                                                                                              |
|`validEndTime`                                               |string |Validity end time of bulletin report as date-time string                                                                                             |
|`validStartTime`                                             |string |Validity start time of bulletin report as date-time string                                                                                           |
|`wxSynopsisComments`                                         |*string* |Weather forecast information                                                                                                                         |


## Data sources and updates

AvaInfo Danger Map vector tileset is based on bulletin reports made openly available by national and regional avalanche warning services in the following languages.

|Region  | Data Source   | Available languages  |
|:--------------|:-------|:---------------------------------------------|
|**Austria (AT)** |
|`Tirol`| https://avalanche.report | EN |
| `Kärnten` | https://lawinenwarndienst.ktn.gv.at/ | DE |
| `Salzburg` | https://lawine.salzburg.at/ | EN |
| `Styria` | https://www.lawine-steiermark.at/ | EN |
| `Vorarlberg` | https://warndienste.cnv.at/dibos/lawine/index.html | EN |
|**Switzerland (CH)** |
| `CH` | https://www.slf.ch/en/avalanche-bulletin-and-snow-situation.html | EN |
|**Germany (DE)**|
| `Bavaria` | https://www.lawinenwarndienst-bayern.de | EN |
|**Spain (ES)**|
| `Val d'Aran` | https://lauegi.conselharan.org/ | EN |
|**France (FR)**|
| `FR` | https://meteofrance.com/meteo-montagne | FR |
|**Italy (IT)**|
| `Bolzano` | https://avalanche.report | EN |
| `Trentino` | https://avalanche.report | EN |
| `Piemonte` | https://bollettini.aineva.it/ | EN |
| `Valle d’Aosta` | https://bollettini.aineva.it/ | EN |
| `Lombardia` | https://bollettini.aineva.it/ | EN |
| `Veneto` | https://bollettini.aineva.it/ | EN |
| `Friuli – Venezia Giulia` | https://bollettini.aineva.it/ | EN |
| `Marche` | https://bollettini.aineva.it/ | EN |
|**Slovenia (SI)**|
| `SI` | http://meteo.arso.gov.si/ | SI |

### Data updates

AvaInfo Danger Map vector layers are **<ins>only published during the winter season</ins>**. 

AvaInfo Danger Map tileset is updated at least once a day during the winter season. Avalanche Warning Services usually issue a bulletin report at 17:00/18:00 each day. Further bulletin updates can be issued at 8:00/9:00 the following morning and on rare occasions published at other times. Bulletin reports are regularly checked throughout the day and updated tilesets published accordingly. 

### Attribution

When you publicly use styles or software that use AvaInfo vector tiles, you must display proper attribution.

## Warning

The Avalanche Danger tilesets are produced from third party data and may be out of date or incorrect. Using the tilesets for any purpose is at your own risk, and AvaInfo is not responsible for any actions you take based on any information contained in this tileset.
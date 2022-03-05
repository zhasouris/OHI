const missionBendMap = require("@/assets/mission-bend-map.png")
const missouriCityMap = require("@/assets/missouri-city-map.png")
const braeswoodMap = require("@/assets/braeswood-map.png")


export default {

    computed : {
        locations()
        {
          return [
            {
              name : "Missouri City",
              address : {
                line1 : "3334 Fm 1092 Rd",
                city : "Missouri City",
                postalCode : "77459",
              },
              phoneNumbers : [
                {
                  number : "281 499 8904",
                  type : "main",
                }
              ],
              hours : "Friday & Saturday 11am to 9:30pm",
              mapUrl : "https://www.bing.com/maps?osid=021d1acd-e17f-4a70-8104-a9fb7665cc8a&cp=29.580664~-95.71489&lvl=12&imgid=337ddb4d-7453-4436-9140-30dde5b20148&v=2&sV=2&form=S00027",
              mapImage : missouriCityMap
            },
            {
              name : "Mission Bend",
              address : {
                line1 : "8000 Highway 6 South",
                city : "Houston",
                postalCode : "77083",
              },
              hours : "11am to 9pm Friday & Saturday 11am to 10pm",
              phoneNumbers : [
                {
                  number : "281 983 5020",
                  type : "main",
                }
              ],
              mapUrl : "https://www.bing.com/maps?osid=7de96cd4-4fcc-4970-bb8c-52244665e155&cp=29.69724~-95.719574&lvl=13&imgid=68eeca98-bdf4-40e2-8808-f16411bf58bd&v=2&sV=2&form=S00027",
              mapImage : missionBendMap
            },
            {
              name : "Meyer Land",
              address : {
                line1 : "5427 S Braeswood Blvd",
                city : "Houston",
                postalCode : "77096",
              },
              hours : "11am to 9pm, Sunday 11am to 8pm",
              phoneNumbers : [
                {
                  number : "713 723 8908",
                  type : "main",
                }
              ],
              mapUrl : "https://www.bing.com/maps?osid=66270629-0caa-4ae9-9b39-754e643b1bf1&cp=29.685164~-95.628662&lvl=12&imgid=d36e45f2-6775-4dee-bf14-cdfff862aea7&v=2&sV=2&form=S00027",
              mapImage : braeswoodMap
            },
    
          ]
        },
    },
}
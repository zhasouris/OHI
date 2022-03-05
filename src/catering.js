var twoAndTwoCalcPrice = (self, people, selectedItems) => {

    const sidesMin = 2;
    const meatsMin = 2;
    var basePriceFilter = self.pricing.filter(e => e.minPerson <= people && e.maxPerson >= people);
    if(basePriceFilter.length == 0){throw "No matching people range templates found";}
    var basePrice = basePriceFilter[0].price;
    var sortByPriceFunc = (a,b) => a.price < b.price ? -1 : (a.price == b.price ? 0 : 1) 

    var sides = selectedItems.filter(e => e.type == "side").sort(sortByPriceFunc);
    var meats = selectedItems.filter(e => e.type == "meat").sort(sortByPriceFunc);
    var extras = selectedItems.filter(e => e.type != "meat" && e.type != "side");

    var extrasAdjusted = 0;
    extras.forEach(e => extrasAdjusted += e.unitPrice[self.serviceType]);

    var sidesAdjusted = 0;
    if(sides.length > sidesMin)
    {
        var over = sides.slice(2);
        over.forEach(e => sidesAdjusted += e.unitPrice[self.serviceType]);
    }

    var meatsAdjusted = 0;
    if(meats.length > meatsMin)
    {
        var over = meats.slice(2);
        over.forEach(e => meatsAdjusted += e.unitPrice[self.serviceType]);
    }

    var adjustedBasePrice = basePrice * 1 + (sidesAdjusted + meatsAdjusted + extrasAdjusted);

    var result = adjustedBasePrice * people;
    return isNaN(result) ? 0 : result;
}


var twoAndTwoValidate = (selectedItems) => {
    var meats = (selectedItems.filter(e => e.type == "meat"));
    var sides =  (selectedItems.filter(e => e.type == "side"));
    return meats.length >= 2 && sides.length >= 2;
}






export default {
    serviceTypes: [
        {text : "Delivery", value : "delivery", description : "Delivery description", icon : "mdi-truck-delivery-outline" },
        {text : "Catering", value : "catering", description : "Catering description", icon : "mdi-silverware-fork-knife" },
    ],
    templates : [
        {
            id : "two-and-two-delivery",
            name : "Two Meats, Two Sides Delivered",
            serviceType : "delivery",
            description: "Select any two meats and two sides for your event.  You can add more items for an additional cost.",
            restrictions : "Minimum 10 People",
            pricing : [
                {
                    minPerson : 10,
                    maxPerson : 25,
                    price : 15,
                },
                {
                    minPerson : 26,
                    maxPerson : 49,
                    price : 14,
                },
                {
                    minPerson : 50,
                    maxPerson : 99,
                    price : 12,
                },
                {
                    minPerson : 100,
                    maxPerson : 199,
                    price : 11.25,
                },
                {
                    minPerson : 200,
                    maxPerson : 299,
                    price : 10.25,
                },
                {
                    minPerson : 300,
                    maxPerson : 500,
                    price : 9.50,
                },
            ],
            validator : twoAndTwoValidate,
            calculatePrice (people, selectedItems) {
                var self = this;
                return twoAndTwoCalcPrice(self, people, selectedItems)
            },
        },
        {
            id : "two-and-two-catered",
            name : "Two Meats, Two Sides Catered",
            serviceType : "catering",
            description: "Select any two meats and two sides for your event.  You can add more items for an additional cost.",
            restrictions : "Minimum 50 People",
            pricing : [
                {
                    minPerson : 50,
                    maxPerson : 99,
                    price : 15,
                },
                {
                    minPerson : 100,
                    maxPerson : 199,
                    price : 14.25,
                },
                {
                    minPerson : 200,
                    maxPerson : 299,
                    price : 13.50,
                },
                {
                    minPerson : 300,
                    maxPerson : 500,
                    price : 12.75,
                },
            ],
            validator : twoAndTwoValidate,
            calculatePrice (people, selectedItems) {
                var self = this;
                return twoAndTwoCalcPrice(self, people, selectedItems)
            },
        },
        
    ],

    types : [
        {
            id : "catering",
            text : "Catering",
            description : "Setup and cater",
            additionalInfo : "50 person minimum",

        },
        {
            id : "delivery",
            text : "Delivery",
            description : "BBQ Delivered",
            additionalInfo : "10 person minimum"
        },
    ],
    foodGroups : [{
        name: "Selected Meat Combination",
        type: "multi",
        items: [{
                name: "Sliced Beef",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Links",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Chicken",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Pork",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Riblets",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Turkey",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
            {
                name: "Ribs",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"meat",
            },
        ],
        order : 1,
    },
    {
        name: "Selected Side Orders",
        type: "multi",
        items: [{
                name: "BBQ Beans",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Green Beans",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Cut Sweet Corn",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Potato Salad",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Cole Slaw",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Mashed Potatoes",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Fried Okra",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Broccoli",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Cucumber Salad",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Dirty Rice",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
            {
                name: "Macaroni & Cheese",
                unitPrice: {delivery : 1.25, catering : 1.75 },
                type:"side",
            },
        ],
        order : 2,
    },
    {
        name: "Extras",
        type: "multi",
        items: [
            {
                name: "Tea",
                unitPrice: {delivery : 1.00, catering : 1.25 },
                type:"extra",
            },
            {
                name: "Lemonade",
                unitPrice: {delivery : 1.00, catering : 1.25 },
                type:"extra",
            },
            {
                name: "Peach Cobbler",
                unitPrice: {delivery : 2.00, catering : 3.25 },
                type:"extra",
            },
        ],
    }
    ]
}
    
export default [
    {
        title : "BBQ Entrees",
        groups : [
            {
                items : [
                    { title : "Ham, Links, Pork, Riblets", price : 13.50},
                    { title : "Beef (sliced brisket)", price : 15.95},
                    { title : "Beef (chopped beef in sauce)", price : 14.95},
                    { title : "Ribs  (pork)", price : 14.95},
                    { title : "Chicken (half)", price : 13.50},
                    { title : "Chicken (leg qrtr.)", price : 9.75},
                    { title : "Chicken (breast qtr.)", price : 10.25},
                    { title : "Turkey Breast (sliced)", price : 13.95},
                    { title : "Two meats ( 2 different meats )", price : 16.50},
                    { title : "Three meats ( 3 different meats )", price : 17.95},
                ]
            }
        ]
    },
    {
        title : "More Entrees",
        groups : [
            {
                items : [
                    { title : "Fried Catfish", price : 13.95},
                    { title : "Chicken Fried Steak", price : 16.95},
                    { title : "Chicken Tenders", price : 13.50},
                ]
            }
        ]
    },
    {
        title : "Beverages",
        groups : [
            {
                items : [
                    { title : "Regular", price : 2.95},
                    { title : "Large", price : 3.50},
                    { title : "Bottled Soda", price : 2.95},
                    { title : "Bottled Water", price : 1.50},
                    { title : "Coffee", price : 1.75},
                    { title : "Domestic Beer", price : 3.50},
                    { title : "Premium Beer", price : 4.00},
                    { title : "Wine", price : 5.00},
                ]
            }
        ],
        footerText : "",
    },
    {
        title : "Baked Potatoes",
        groups : [
            {
                items : [
                    { title : "Fancy (Stuffed with butter,  cheese, s. cream & chives)", price : 8.25},
                    { title : "Slice Baker   (Ham, Links, Chicken, Pork, Turkey)", price : 12.50},
                    { title : "Chop Baker     (Chopped beef in sauce)", price : 13.50},
                    { title : "Brisket Baker          (Topped with brisket)", price : 13.50},
                    { title : "Chicken Breast Baker", price : 13.50},
                    { title : "Two Meat Baker ( 2 different meats ) ", price : 15.95},
                ],
            }
        ],
        footerText : "Extra charge for extra toppings",
    },
    {
        title : "B-B-Q Sandwiches",
        groups : [
            {
                columns : ["Bun", "Po-Boy"],
                items : [
                    { title : "Ham, Links, Pork (sliced)", price : [ 9.50, 10.95]},
                    { title : "Brisket (sliced)", price : [ 10.50, 11.95 ]},
                    { title : "Chopped Beef (in sauce)", price : [ 10.25, 11.75 ]},
                    { title : "Turkey Breast (sliced)", price : [ 9.95, 11.50 ]},
                    { title : "Chicken (dark meat)", price : [ 9.50, 10.95 ]},
                    { title : "Chicken (white meat)", price : [ 9.95, 11.50]},
                    { title : "Two meats: (2 different meats)", price : [ 11.50, 12.95 ]},
                ]
            }
        ]
    },
    {
        title : "More Sandwiches",
        groups : [
            {
                items : [
                    { title : "1/3 Lb. Burger (cheese + .50)", price : 9.95},
                    { title : "Chicken Fried Steak Sandwich", price : 10.95},
                    { title : "Fried Catfish Po-boy", price : 11.25},
                    { title : "Gyros Sand. On Pita Bread", price : 10.95},
                ]
            }
        ]
    },
    {
        title : "Salads",
        groups : [
            {
                columns : ["Small", "Large"],
                items : [
                    { title : "House Salad", price : [ 4.95, 6.95 ]},
                    { title : "Tasty  Salad", price : [ 8.95, 10.95 ]},
                    { title : "Caesar Salad", price : [ null, 9.95 ]},
                    { title : "Chicken Caesar", price : [ null, 12.95 ]},
                    { title : "Greek Salad", price : [ null, 10.50 ]},
                    { title : "Greek Salad with Meat", price : [ null, 13.50 ]},
                ]
            }
        ]
    },
    {
        title : "BBQ By The Pound",
        groups : [
            {
                columns : ["1/2 Pound", "Pound"],
                items : [
                    { title : "Brisket (sliced)", price : [ 11.95, 22.00 ]},
                    { title : "Beef (chopped in sauce)", price : [ 10.95, 19.95 ]},
                    { title : "Ham, Links, Pork, Riblets", price : [ 9.50, 16.95 ]},
                    { title : "Ribs (Pork)", price : [ 10.75, 19.50 ]},
                    { title : "Turkey (Breast)", price : [ 10.50, 19.25 ]},
                    { title : "Chicken (half)", price : [ 8.95, null ]},
                    { title : "Chicken Whole", price : [ null, 15.95 ]},
                ]
            }
        ]
    },
    {
        title : "Sides",
        list : [
            "B-b-q beans",
            "Green beans",
            "Cut Corn",
            "Potato salad",
            "Cole slaw",
            "Cucumber",
            "Salad",
            "Fried Okra",
            "Fries",
            "Onion Rings",
            "Sweet Potatoes",
        ],
        groups : [
            {
                columns : ["Side", "1/2 Pint", "Pint", "Quart", "Gallon"],
                items : [
                    { title : "Sides", price : [ 2.95, 3.75, 6.95, 11.95, 38.95 ]},
                ]
            },
            {
                columns : ["Price"],
                items : [
                    { title : "Cut Fries", price : 3.95},
                    { title : "Onion Rings", price : 4.95},
                ]
            },
        ]
    },
    {
        title : "Desserts",
        groups : [
            {
                columns : ["Serving", "Pint", "Quart", "Whole Pan"],
                items : [
                    { title : "Rice Pudding", price : [ 3.95, 7.50, 14.00, 25.00 ]},
                    { title : "Peach Cobbler", price : [ 3.95, 7.50, 14.00, 25.00 ]},
                ]
            },
            {
                columns : ["Slice", "Whole"],
                items : [
                    { title : "Pies", price : [ 3.95, 25.00 ]},
                ]
            },
            {
                columns : ["Serving"],
                items : [
                    { title : "Cheese cake", price : 3.95},
                ]
            },
        ]
    },
    {
        title : "Children's Menu",
        groups : [
            {
                items : [
                    { title : "Plate or sandwich (beef, ham, links)", price : 8.75},
                    { title : "Grilled Cheese", price : 5.95},
                    { title : "Corn Dog", price : 5.95},
                    { title : "Chicken Strips", price : 8.75},
                ]
            }
        ]
    },

]

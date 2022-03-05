export default [
    {
        title : "BBQ Entrees",
        groups : [
            {
                items : [
                    { title : "Ham, Links, Pork, Riblets", price : 12.95},
                    { title : "Beef (sliced brisket)", price : 14.95},
                    { title : "Beef (chopped beef in sauce)", price : 13.50},
                    { title : "Ribs  (baby back)", price : 13.50},
                    { title : "Chicken (half)", price : 12.95},
                    { title : "Chicken (leg qrtr.)", price : 9.50},
                    { title : "Chicken (breast qtr.)", price : 9.95},
                    { title : "Turkey Breast (sliced)", price : 13.25},
                    { title : "Two meats ( 2 different meats )", price : 15.50},
                    { title : "Three meats ( 3 different meats )", price : 16.95},
                ]
            }
        ]
    },
    {
        title : "More Entrees",
        groups : [
            {
                items : [
                    { title : "Fried Catfish", price : 12.50},
                    { title : "Chicken Fried Steak", price : 15.95},
                    { title : "Chicken Tenders", price : 12.95},
                ]
            }
        ]
    },
    {
        title : "Beverages",
        groups : [
            {
                items : [
                    { title : "Regular", price : 2.25},
                    { title : "Large", price : 2.75},
                    { title : "Bottled Soda", price : 2.50},
                    { title : "Bottled Water", price : 1.50},
                    { title : "Coffee", price : 1.75},
                    { title : "Domestic Beer", price : 3.50},
                    { title : "Premium Beer", price : 4.00},
                    { title : "Wine", price : 5.00},
                ]
            }
        ],
        footerText : "Wines contain sulfites",
    },
    {
        title : "Baked Potatoes",
        groups : [
            {
                items : [
                    { title : "Fancy (Stuffed with butter,  cheese, s. cream & chives)", price : 7.95},
                    { title : "Slice Baker   (Ham, Links, Chicken, Pork, Turkey)", price : 11.50},
                    { title : "Chop Baker     (Chopped beef in sauce)", price : 12.00},
                    { title : "Slice Baker          (Topped with brisket)", price : 12.00},
                    { title : "Chicken Breast Baker", price : 12.00},
                    { title : "Two Meat Baker ( 2 different meats ) ", price : 13.50},
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
                    { title : "Ham, Links, Pork (sliced)", price : [ 8.00, 9.00]},
                    { title : "Brisket (sliced)", price : [ 8.95, 9.95 ]},
                    { title : "Chopped Beef (in sauce)", price : [ 8.50, 9.50 ]},
                    { title : "Turkey Breast (sliced)", price : [ 8.25, 9.25 ]},
                    { title : "Chicken (dark meat)", price : [ 8.00, 9.00 ]},
                    { title : "Chicken (white meat)", price : [ 8.50, 9.50]},
                    { title : "Two meats: (2 different meats)", price : [ 9.50, 10.50 ]},
                ]
            }
        ]
    },
    {
        title : "More Sandwiches",
        groups : [
            {
                items : [
                    { title : "1/3 Lb. Burger (cheese + .50)", price : 7.95},
                    { title : "Chicken Fried Steak Sandwich", price : 8.95},
                    { title : "Fried Catfish Po-boy", price : 9.25},
                    { title : "Gyros Sand. On Pita Bread", price : 8.95},
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
                    { title : "House Salad", price : [ 3.95, 6.50 ]},
                    { title : "Tasty  Salad", price : [ 8.95, 10.95 ]},
                    { title : "Caesar Salad", price : [ null, 8.95 ]},
                    { title : "Chicken Caesar", price : [ null, 11.95 ]},
                    { title : "Greek Salad", price : [ null, 9.95 ]},
                    { title : "Greek Salad with Meat", price : [ null, 12.95 ]},
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
                    { title : "Brisket (sliced)", price : [ 11.25, 20.50 ]},
                    { title : "Beef (chopped in sauce)", price : [ 9.95, 18.25 ]},
                    { title : "Ham, Links, Pork, Riblets", price : [ 9.50, 16.95 ]},
                    { title : "Ribs (Baby back)", price : [ 10.25, 18.95 ]},
                    { title : "Turkey (Breast)", price : [ 9.75, 17.50 ]},
                    { title : "Chicken (half)", price : [ 8.50, null ]},
                    { title : "Chicken Whole", price : [ null, 14.95 ]},
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
                    { title : "Sides", price : [ 2.50, 3.25, 5.95, 9.95, 29.95 ]},
                ]
            },
            {
                columns : ["Price"],
                items : [
                    { title : "Cut Fries", price : 3.25},
                    { title : "Onion Rings", price : 3.95},
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
                    { title : "Rice Pudding", price : [ 3.50, 6.00, 11.00, 20.00 ]},
                    { title : "Peach Cobbler", price : [ 3.50, 6.00, 11.00, 20.00 ]},
                ]
            },
            {
                columns : ["Slice", "Whole"],
                items : [
                    { title : "Pies", price : [ 3.50, 19.00 ]},
                ]
            },
            {
                columns : ["Serving"],
                items : [
                    { title : "Cheese cake", price : 3.75},
                ]
            },
        ]
    },
    {
        title : "Children's Menu",
        groups : [
            {
                items : [
                    { title : "Plate or sandwich (beef, ham, links)", price : 7.95},
                    { title : "Grilled Cheese", price : 5.95},
                    { title : "Corn Dog", price : 5.95},
                    { title : "Chicken Strips", price : 7.50},
                ]
            }
        ]
    },

]
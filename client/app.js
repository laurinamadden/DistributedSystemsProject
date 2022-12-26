// import to allow us to read imput from command line
var readlineSync = require('readline-sync')
// import grpc
var grpc = require('@grpc/grpc-js')
// import protoLoader
var protLoader = require('@grpc/proto-loader')
// get current directory in node 
var PROTO_PATH = __dirname + '/protos/smartBuilding.proto'
// load up proto file
var packageDefinition = protLoader.loadSync(PROTO_PATH)
var smartBuilding_proto = grpc.loadPackageDefinition(packageDefinition).smartBuilding

// variable called client and keeping proto and production local host 4000 and insecure server within variable
var client = new smartBuilding_proto.SmartBuildingService("0.0.0.0:4000", grpc.credentials.createInsecure())

// variable called action with question within it that outputs to client to ask them a question
// the answer is stored within action and compared to if statements below to see which one should be actioned
var action = readlineSync.question(
    "What would you like to do?\n"
    // Temperature
    + "\t 1 to Check current temperature at the front door \n"
    + "\t 2 to Check current temperature on first floor \n"
    + "\t 3 to Check current temperature on second floor \n"
    + "\t 4 to Check ideal temperature \n"
   // Lights
    + "\t 5 to Check if lights are on at the front door \n"
    + "\t 6 to Check if lights are on, on first floor \n"
    + "\t 7 to Check if lights are on, on second floor \n"
    // Security sensors
    + "\t 8 to Check how many people successfully entered through security doors at the front door \n"
    + "\t 9 to Check how many people successfully entered through security doors on first floor \n"
    + "\t 10 to Check how many people successfully entered through security doors on second floor \n"
    // Information Scrrens display
    + "\t 11 to Check display at the front door \n"
    + "\t 12 to Check display on first floor \n"
    + "\t 13 to Check display on second floor \n"
    + "\t 14 to Change ideal temperature \n"
    + "\t 15 to test \n"
)
/*
// function to output date to client
function date() {
// date() {
    console.log("Todays date is " + date)
    //console.log("Test that function date works in client")
    // Test
    console.log("date = " + date)
}
*/

var message = "Error"
var result = 0

action = parseInt(action)

// 1 to Check current temperature on ground floor
if(action === 1) {
    try {
        client.tempFd({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    }    
} 
// 2 to Check current temperature on first floor
else if(action === 2) {
    try {
        client.tempF1({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    }    
} 
// 3 to Check current temperature on second floor
else if(action === 3) {
    try {
        client.tempF2({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    }    
} 
// 4 to Check ideal temperature
else if(action === 4) {
    try {
        client.idealT({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
/*
// 14 to Change ideal temperature
else if(action === 14) {
    try {
        client.idealC({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
*/
// Lights
// 5 to Check if lights are on on ground floor
else if(action === 5) {
    try {
        client.lightFd({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 6 to Check if lights are on on first floor
else if(action === 6) {
    try {
        client.lightF1({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 7 to Check if lights are on on second floor
else if(action === 7) {
    try {
        client.lightF2({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// Security sensors
// 8 to Check how many people successfully entered through security doors on ground floor
else if(action === 8) {
    try {
        client.securityFd({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 9 to Check how many people successfully entered through security doors on first floor
else if(action === 9) {
    try {
        client.securityF1({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 10 to Check how many people successfully entered through security doors on secondary floor
else if(action === 10) {
    try {
        client.securityF2({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// Information Screens display
// 11 to Check display on ground floor
else if(action === 11) {
    try {
        client.displayFd({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 12 to Check display on first floor
else if(action === 12) {
    try {
        client.displayF1({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
// 13 to Check display on second floor
else if(action === 13) {
    try {
        client.displayF2({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
/*
// 14 to Change ideal temperature
else if(action === 14) {
    try {
        client.idealC({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
*/
// 14 to Check display on second floor
else if(action === 14) {
    var newIdeal = readlineSync.question("What should be the ideal temperature?")
    try {
        client.idealC({message}, function(error, response) {
        try {
            if(response.message) {
            console.log(response.message)
            } 
            else {
                console.log(response.result)
            }
        } catch(e) {
            console.log("Could not connect to server") 
        }
        })
    } catch(e) {
        console.log("An error occured")
    }
}

// test function to play around with
else if(action === 15) {
    try {
        client.lightFd({message}, function(error, response) {
            console.log(response.message)
            console.log(response.result)
            console.log(response.message2)

        })
    } catch(e) {
        console.log("Could not connect to server")
    } 
} 
else {
    console.log("Error: Operation not recognized")
}

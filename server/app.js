// importing grpc
var grpc = require('@grpc/grpc-js')
// import proto loader
var protLoader = require('@grpc/proto-loader')
// get the current protos directory in node
var PROTO_PATH = __dirname+ '/protos/smartBuilding.proto'
// load up our proto file
var packageDefinition = protLoader.loadSync(PROTO_PATH)
var smartBuilding_proto = grpc.loadPackageDefinition(packageDefinition).smartBuilding

//
var ideal = 18
var message = "Error"
var message2 = ""
var result = 0

// function/method 1 for the front door temperature 
// this function works
function tempFd(call, callback){
    try {
        // Since we don't have a sensor to detect the temperature 
        // Here we'll use todays date to work out the temperature
        //var temp = uint32(today.getDate()).padStart(2,'0')
        //var temp = getDate()
        //console.log(temp)
        //var result = temp
        // result: result
        var temp = 23
        var result = temp
        callback(null,{
            message : "The current temperature at the front door is ",
            result : result
        })
/*
        if (temp < idealT){

        }
        else if(temp > idealT){

        }
        else{

        } */
        // reference code from class we had on this type of code
        //var number1 = parseInt(call.request.number1)
        //var number2 = parseInt(call.request.number2)
        //if(!isNaN(number1) && !isNaN(number2)){
        //    var result = number1 + number2
        //    callback(null,{
        //        message : undefined,
        //        result : result
        //    })
        //}
        //else {
        //    callback(null,{
        //        message: "Please specify two numbers"
        //    })
        //}
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
}

// function 2 for first floor temperature
// this function works
function tempF1(call, callback){
    try {
        var temp = 24
        var result = temp
        callback(null,{
            message : "The current temperature on the first floor is ",
            result : result
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
}
// function 3 for second floor temperature
// this function works
function tempF2(call, callback) {
    try {
        // Since we don't have a sensor to detect the temperature 
        // Here I'd like to use todays date to work out the temperature and go from there but I couldn't get it to work out 
        //var temp = uint32(today.getDate()).padStart(2,'0')
        //var temp = getDate()
        //console.log(temp)
        //callback(null,{
        
        var temp = 20
        var result = temp
        
        callback(null,{
            message : "The current temperature on the second floor is ",
            result : result
        })
        /* I can't figure out the issue with the code below but it seems that the less than and equal to's are causing issues 
        callback(null,{
            if (temp < ideal){
                callback(null,{
                    message : "The current temperature is lower than the ideal temperature. Heating system is active to increase the temperature. The current temperature on the second floor is ",
                    result : result
                })
            }
            else if(temp > ideal){
                callback(null,{
                    message : "The current temperature is higher than the ideal temperature. Cooling system is active to decrease the temperature. The current temperature on the second floor is ",
                    result : result
                })
            }
            else{
                callback(null,{
                    message : "Current temperature is equal to ideal temperature.  The current temperature on the second floor is ",
                    result : result
                })
            } 
        })    
        */
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        }) 
    
    }
}
// function 4 to check ideal temperature
// this function works
function idealT(call, callback){
    try {
        var result = ideal
        callback(null,{
            message : "The current ideal temperature is ",
            result : result
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 

// function 14 to Change ideal temperature
// was meant to be function 5 but I couldn't get it to work 
// but I guess its no harm as it is a better example of a smart building to have the ideal temperature hard coded into a smart buildings system
// Doesn't work because it shows the hardcoded ieal temperature instead of new temperature set with this function
function idealC(call, callback){
    try {
        // initalise var newIdeal
        var newIdeal = 0 
        // asking client to input new ideal temperature 
        var newIdeal = parseInt(call.request.newIdeal)
        if(!isNaN(newIdeal)){
            var ideal = newIdeal
            var result = ideal
            callback(null,{
                message : "The current ideal temperature is ",
                result : result
            })
        } 
        else{
        callback(null,{
        message : "Please specify an ideal temperature"
        })    
        }
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// Lights
// function 5 to Check if lights are on on ground floor
// This function works 
function lightFd(call, callback){
    try {
        // Because we don't have sensors to check if the lights are on I have set them to true, meaning they are on
        lightsFd = "true"
        if(lightsFd = "true"){
            callback(null,{
            message : "The lights at the front door are on ",
            //result : result
        })
        }
        else if(lightsFd = "false"){
            callback(null,{
                message : "The lights at the front door are off ",
                //result : result
            })
        }
        else{
            callback(null,{
                message : "Error please try again ",
                //result : result
            }) 
        }
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// function 6 to Check if lights are on on first floor
// This function works 
function lightF1(call, callback){
    try {
        // Because we don't have sensors to check if the lights are on I have set them to true, meaning they are on
        var lightsF1 = true

        if(lightsF1 = true){
            callback(null,{
            message : "The lights on the first floor are on ",
            //result : result
        })
        
        }
        else if(lightsF1 = false){
            callback(null,{
                message : "The lights on the first floor are off ",
                result : result
            })
        }
        else{
            callback(null,{
                message : "Error please try again ",
                result : result
            }) 
        }
        
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// function 7 to Check if lights are on on second floor
// This function works 
function lightF2(call, callback){
    try {
        // Because we don't have sensors to check if the lights are on I have set them to true, meaning they are on
        var lightsF2 = true
        if(lightsF2 = true){
            callback(null,{
            message : "The lights on the second floor are on ",
            result : result
        })
        }
        else if(lightsF2 = false){
            callback(null,{
                message : "The lights on the second floor are off ",
                result : result
            })
        }
        else{
            callback(null,{
                message : "Error please try again ",
                result : result
            }) 
        }
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// Security sensors
// function 8 to Check how many people successfully entered through security doors on ground floor
// this function works
function securityFd(call, callback){
    try {
        // 
        var countFd = 99
        result = countFd
        callback(null,{
            message : "The amount of people who have successfully scanned through the security doors at the front door ",
            result : result
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// function 9 to Check how many people successfully entered through security doors on first floor
// this function works
function securityF1(call, callback){
    try {
        // 
        var countF1 = 66
        result = countF1
        callback(null,{
            message : "The amount of people who have successfully scanned through the security doors on the first floor",
            result : result
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// function 10 to Check how many people successfully entered through security doors on second floor
// this function works
function securityF2(call, callback){
    try {
        // 
        var countF2 = 33
        result = countF2
        callback(null,{
            message : "The amount of people who have successfully scanned through the security doors on the second floor",
            result : result
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// Information Screens display
// function 11 to Check display by front door
// this function works
function displayFd(call, callback){
    try {
        //
        callback(null,{
            message : "The display at the front door currently shows. Current date and Time",
            
        })
        //date()
        //time()
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 
// function 12 to Check display on first floor
// this function works
function displayF1(call, callback){
    try {
        //
        callback(null,{
            message : "The display on the first floor currently shows. Current date and Time",
            
        })
        //date()
        //time()
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 

// function 13 to Check display on second floor
// this function works
function displayF2(call, callback){
    try {
        //
        callback(null,{
            message : "The display on the second floor currently shows. Current date and Time",
            
        })
        //date()
        //time()
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 

// test function
function test(call, callback){
    try {
        
        callback(null,{
            message : "",
            result: result
            // Couldn't get message2 to work
            //message2 : "",
        })
    }catch(e){
        callback(null,{
            message: "An error occured during computation"
        })
    }
} 

// function to output date to client
// Couldn't get this to work
function date(call, callback) {
    // Test date 
    //today = "test" 

    // Outputting date to client 
    var today = new Date();
    var dd = string(today.getDate()).padStart(2,'0')
    console.log(dd)
    // have to add 1 to the month as January is 0
    var mm = string(today.getMonth() +1).padStart(2,'o')
    console.log(mm)
    var yyyy = today.getFullYear()
    console.log(yyyy)
    today = dd + '/' + mm + '/' + yyyy
    

    callback(null,{
        message : ("Todays date is "+ today),
        result : result
    })

    // Test 
    //console.log("Test that function date works in server") 
    //io.emit("online", today)
    //console.log("date = " + date)


}

// new backend for grpc
var server = new grpc.Server()
// smartBuilding_proto from top of this file and SmartBuildingService from smartBuilding.proto file
server.addService(smartBuilding_proto.SmartBuildingService.service, {
    // Methods/functions that we can use
    // will point function in smartBuilding.proto file at the function with the same name in this file
    tempFd: tempFd,
    tempF1: tempF1,
    tempF2: tempF2,
    idealT: idealT,
    idealC: idealC,
    lightFd: lightFd,
    lightF1: lightF1,
    lightF2: lightF2,
    securityFd: securityFd,
    securityF1: securityF1,
    securityF2: securityF2,
    displayFd: displayFd,
    displayF1: displayF1,
    displayF2: displayF2,
    date: date,
    test: test,
})

// production local host - port 4000
server.bindAsync("0.0.0.0:4000", grpc.ServerCredentials.createInsecure(), function(){
    // This controls whats going to heppen when all this gets executed
    server.start()
})
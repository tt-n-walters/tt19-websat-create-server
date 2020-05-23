const readline = require("readline")
const fs = require("fs")


// Setup the readline module so it knows where to read and write to
const readlineOptions = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

// Ask questions for user input
readlineOptions.question("Choose server name: ", function(serverName) {
    console.log("You entered: " + serverName)

    readlineOptions.question("Choose a server port: ", function(serverPort) {
        console.log("Server port: " + serverPort)

        // Run our main functions
        createServerFolder(serverName, callback)
        
        // Create a callback that will end the program
        function callback() {
            readlineOptions.close()
        }
    })
})

// End the program once where are finished
readlineOptions.on("close", function(params) {
    process.exit(0)
})


function createServerFolder(serverName, callback) {
    // Create the folder
    fs.mkdir(serverName, function(error) {
        // Check for any errors
        if (error) {
            console.log("Failed to create folder.")
        } else {

            // Create the javascript file
            fs.writeFile(serverName + "/index.js", "", function(error) {
                if (error) {
                    console.log("Failed to create index.js")
                }
                callback()
            })
        }
    })
}

function createProxy(serverName, serverPort) {

}

function updateConfig(serverName) {

}


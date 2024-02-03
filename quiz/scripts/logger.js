// Define a JavaScript function called logMsg() that can be used to log an error message for any object that contains the property errMsg. 
function logMsg(obj) {
    if (obj && obj.hasOwnProperty('errMsg')) {
        console.error(obj.errMsg);
    } else {
        console.log("The object does not contain an 'errMsg' property.");
    }
}

// Object with errMsg
const errorObject = {
    errMsg: "An error occurred during processing."
};

// Object without errMsg
const regularObject = {
    message: "This is a regular message."
};

// Testing the function
logMsg(errorObject); // Logs: "An error occurred during processing."
logMsg(regularObject); // Logs: "The object does not contain an 'errMsg' property."

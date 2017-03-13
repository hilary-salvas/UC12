/**
 * Removes part of string between two sub strings
 * @param {string} text The original string
 * @param {string} start The starting string
 * @param {string} end The ending string
 * @return {string} The string in between
 * @throws (Error} If start or end not found
 */
function between(string, start, end) {
    var startAt = string.indexOf(start);

    if (startAt == -1) {
        throw new Error("No start found: " + start);
    }

    startAt += start.length;
    var endAt = string.indexOf(end, startAt);

    if (endAt == -1) {
        throw new Error("No end found: " + end);
    }

    return string.slice(startAt, endAt);
}

/**
 * Checks a phone number in the format (###) ###-####
 * @throws {Error} Throws error for an invalid phone number
 * @param   {string}  b The phone number
 * @returns {boolean} returns true or false
 */
function validPhone(b) {
    try {
        var phonelength = b.length;
        var ifnumber2 = b.slice(1, 2) + b.slice(2, 3) + b.slice(3, 4) + b.slice(6, 7) + b.slice(7, 8) + b.slice(8, 9) + b.slice(10, 11) + b.slice(11, 12) + b.slice(12, 13) + b.slice(13, 14) + b.slice(14, 15);
        var hyphen = b.charAt(9);
        var par1 = b.charAt(0);
        var par2 = b.charAt(4);
        if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-" && par1 == "(" && par2 == ")") {
            return true;
        } else {
            throw new Error("Invalid phone number: " + b);
        }
    } catch (error) {
        throw new Error("Invalid: " + error.message);
    }
}

/**
 * Display function for validPhone
 * @param {string} inputId  The inputted phone number
 * @param {string} outputId The results of validPhone test
 */
function displayValidPhone(inputId, outputId) {
    var outputText = ""
    var phoneNum = document.getElementById(inputId).value;
    try {
        if (validPhone(phoneNum) == true) {
            outputText = "Your phone number is valid.";
        }
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}
/**
 * Returns an area code from a phone number
 * @throws {Error} throws error for an invalid area code if code is not a number or 3 characters
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function getAreaCode(phoneNum) {

    var areaCode;

    try {
        areaCode = between(phoneNum, "(", ")");
        areaCode = areaCode.trim();
        if (areaCode.length == 3 && Number(areaCode)) {
            return areaCode;
        } else {
            throw new Error("Invalid area code: " + areaCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);
        console.log(error.message);
        //return undefined;
    }
}

/**
 * Gets CO code from the user's inputted phone number
 * @throws {Error} Throws error for an invalid co code
 * @param   {string} phoneNum phone number input
 * @returns {string} The error or the valid co code
 */
function getCoCode(phoneNum) {

    var coCode;


    try {

        coCode = between(phoneNum, ")", "-");

        coCode = coCode.trim();

        if (coCode.length == 3 && Number(coCode)) {

            return coCode;

        } else {

            throw new Error("Invalid CO code: " + coCode);

        }

    } catch (error) {

        throw new Error("Invalid phone number: " + error.message);

    }

}


/**
 * Display function for getCoCode
 * @param {string} inputId  the phone number
 * @param {string} outputId the display of the CoCode or error message
 */
function displayCoCode(inputId, outputId) {

    var outputText = "";

    var phoneNum = document.getElementById(inputId).value;

    try {

        var coCode = getCoCode(phoneNum);

        outputText = "Your CO code is " + coCode;

    } catch (error) {

        console.log(error.message);
        outputText = error.message;
    }
    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Gets line code from phone number
 * @throws {Error} Errror for an invalid line code
 * @param   {string} phoneNum the phone number
 * @returns {string} line code or error message
 */
function getLineCode(phoneNum) {
    var lineCode;

    try {
        lineCode = phoneNum.slice(10);
        lineCode = lineCode.trim();
        if (lineCode.length == 4 && Number(lineCode)) {
            return lineCode;
        } else {
            throw new Error("Invalid line code: " + lineCode);
        }
    } catch (error) {
        throw new Error("Invalid phone number: " + error.message);


    }
}

/**
 * Displays the area code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayAreaCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var areaCode = getAreaCode(phoneNum);
        outputText = "Your area code is " + areaCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

/**
 * Displays the line code for an inputted phone number
 * @param {string} inputId  The element id for the text box
 * @param {string} outputId The element id of message div
 */
function displayLineCode(inputId, outputId) {
    var outputText = "";
    var phoneNum = document.getElementById(inputId).value;

    // Now try to get the code
    try {
        var lineCode = getLineCode(phoneNum);
        outputText = "Your line code is " + lineCode;
    } catch (error) {
        console.log(error.message);
        outputText = error.message;
    }

    document.getElementById(outputId).innerHTML = outputText;
}

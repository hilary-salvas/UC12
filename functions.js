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
 * Returns an area code from a phone number
 * @param   {string} phoneNum The phone number
 * @returns {string} The area code
 */
function validPhone(phoneNum) {
    var phonelength = phoneNum.length;
    var ifnumber2 = phoneNum.slice(1, 2) + phoneNum.slice(2, 3) + phoneNum.slice(3, 4) + phoneNum.slice(6, 7) + phoneNum.slice(7, 8) + phoneNum.slice(8, 9) + phoneNum.slice(10, 11) + phoneNum.slice(11, 12) + phoneNum.slice(12, 13) + phoneNum.slice(13, 14) + phoneNum.slice(14, 15);
    var hyphen = phoneNum.charAt(9);
    var par1 = phoneNum.charAt(0);
    var par2 = phoneNum.charAt(4);
    if (phonelength == 14 && ifnumber2 >= 0 && hyphen == "-" && par1 == "(" && par2 == ")") {
        return true
    } else {
        throw new Error("Invalid phone number: " + phoneNum);
    }
} catch (e) {
    throw new Error(error.message);
    console.log(error.message);
}
}

function displayPhone(inputId, outputId) {
    var input = document.getElementById(inputId1).value;
    var outputText = "";
    if (validPhone(input) == true) {
        outputText = "The number " + input + " is a phone number.";
        changeElementClass(outputId, "Valid");
    } else {
        outputText = "The number " + input + " is not a phone number.";
        changeElementClass(outputId, "Not valid");
    }
    document.getElementById(outputId).innerHTML = outputText;
}

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
        console.log(error.message)
    }
}

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
    } catch (e) {
        throw new Error("Invalid phone number: " + error.message);
    }

}

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

function getLineCode(phoneNum) {
    var lineCode;

    try {
        lineCode = between(phoneNum, "-", "");
        lineCode = lineCode.trim();
        if (lineCode.length = 4 && Number(lineCode)) {
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

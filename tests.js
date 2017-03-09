QUnit.test("Test the validPhone function.", function (assert) {
    var num = "(415) 555-5555";
    var result = validPhone(num);
    assert.deepEqual(result, true, "validPhone function passed.")
});
QUnit.test("Errors thrown for validPhone", function (assert) {
    assert.throws(function () {
        validPhone("(415) 55-555");
    }, "Invalid phone number: (415) 55-555");
    assert.throws(function () {
        validPhone("(abc) efg-hijk");
    }, "Invalid phone number: (abc) efg-hijk");
});
QUnit.test("Test the getAreaCode function.", function (assert) {
    var num = "(415) 555-5555";
    var result = getAreaCode(num);
    assert.deepEqual(result, "415", "Valid area code test passed.");
});
QUnit.test("Errors thrown for getAreaCode", function (assert) {
    assert.throws(function () {
        getAreaCode("415)444-5555");
    }, "Missing '('. An error should have been thrown.");
    assert.throws(function () {
        getAreaCode("(415 444-5555");
    }, "Missing ')'. An error should have been thrown.");
});
QUnit.test("Test the getCoCode function", function (assert) {
    var num = "(415) 555-5555";
    var result = getCoCode(num);
    assert.deepEqual(result, "555", "Valid CO code test passed.");
});
QUnit.test("Errors thrown for getCoCode", function (assert) {
    assert.throws(function () {
        getCoCode("(415) 55-5555");
    }, "Invalid CO code: 55");
    assert.throws(function () {
        getCoCode("(415) abc-5555");
    }, "Invalid CO code: abc");
});
QUnit.test("Test the getLineCode function", function (assert) {
    var num = "(415) 555-5555";
    var result = getLineCode(num);
    assert.deepEqual(result, "5555", "Valid line code test passed.");
});
QUnit.test("Errors thrown for getLineCode", function (assert) {
    assert.throws(function () {
        getLineCode("(415) 555-555");
    }, "Invalid line code: 555");
    assert.throws(function () {
        getLineCode("(415) 555-abcd");
    }, "Invalid line code: abcd");
});

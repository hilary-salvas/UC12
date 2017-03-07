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

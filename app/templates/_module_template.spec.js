/*jslint nomen: true */

/*global beforeEach, afterEach, describe, it, xit, expect */

/*global console */
/*global debugger */
/*global dependencies */

dependencies({
    '<%= _.slugify(moduleName) %>': {
        'browser': '../../build/<%= _.slugify(moduleName) %>',
        'node': '../../src/<%= _.slugify(moduleName) %>'
    }
}).init(this, function (<%= _.slugify(moduleName) %>) {
    'use strict';

    describe("functionName", function () {
        it("should do what function says", function () {
            expect(<%= _.slugify(moduleName) %>).toEqual(false);
        });
    });
});
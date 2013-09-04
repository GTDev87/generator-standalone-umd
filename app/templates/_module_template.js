/*jslint node: true, nomen: true */
'use strict';

function <%= _.slugify(moduleName) %>() {
    function functionName() {
        return;
    }

    return {
        functionName: functionName
    };
}

module.exports = {
    name: "<%= _.slugify(moduleName) %>",
    version: "0.0.0",
    <%= _.slugify(moduleName) %>: <%= _.slugify(moduleName) %>
};
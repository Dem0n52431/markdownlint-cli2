// @ts-check

"use strict";

/** @type {import("markdownlint").Rule} */
module.exports = {
  "names": [ "every-n-lines" ],
  "description": "Rule that reports an error every N lines",
  "tags": [ "test" ],
  "function": (params, onError) => {
    const n = params.config.n || 2;
    for (let lineNumber = n; lineNumber <= params.lines.length; lineNumber += n) {
      onError({
        lineNumber,
        "detail": `Line number ${lineNumber}`
      });
    }
  }
};

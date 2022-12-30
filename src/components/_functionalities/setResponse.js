"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setResponse = void 0;
function setResponse(setterFunction, responseValue) {
    setterFunction(responseValue);
    setTimeout(() => {
        setterFunction("");
    }, 1000);
}
exports.setResponse = setResponse;

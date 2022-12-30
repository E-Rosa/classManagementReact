"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatStringToDate = exports.formatDateToString = void 0;
function formatDateToString(date) {
    let a = [];
    let dateString = date.toLocaleDateString();
    let dayMonthYear = dateString.split("/");
    a.push(dayMonthYear[2]);
    a.push(dayMonthYear[1]);
    a.push(dayMonthYear[0]);
    return a.join("-");
}
exports.formatDateToString = formatDateToString;
function formatStringToDate(dateString) {
    const dateStringArray = dateString.split("-");
    return new Date(parseInt(dateStringArray[0]), parseInt(dateStringArray[1]), parseInt(dateStringArray[2]));
}
exports.formatStringToDate = formatStringToDate;

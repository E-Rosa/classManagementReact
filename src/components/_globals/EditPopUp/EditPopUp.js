"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
require("./EditPopUp.css");
const EditPopUp = (props) => {
    return (react_1.default.createElement("div", { className: "delete-pop-up-container" },
        react_1.default.createElement("div", { className: "popup-error-message" }, "Are you sure you want to delete this student?"),
        react_1.default.createElement("div", { className: "button-container" },
            react_1.default.createElement("button", { className: "button pop-up-button", onClick: props.handleYes }, "Yes"),
            react_1.default.createElement("button", { className: "button pop-up-button", onClick: props.handleNo }, "No"))));
};
exports.default = EditPopUp;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../styles/globals.css");
require("./PageFooter.css");
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
const PageFooter = () => {
    return (react_1.default.createElement("footer", { id: "main-footer" },
        react_1.default.createElement(react_router_dom_1.Link, { to: '/' },
            react_1.default.createElement("div", { id: "footer-home-button", className: "footer-button" })),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/students/:id' },
            react_1.default.createElement("div", { id: "footer-students-button", className: "footer-button" })),
        react_1.default.createElement(react_router_dom_1.Link, { to: '/classes/:id' },
            react_1.default.createElement("div", { id: "footer-classes-button", className: "footer-button" })),
        react_1.default.createElement("div", { id: "footer-schedule-button", className: "footer-button" })));
};
exports.default = PageFooter;

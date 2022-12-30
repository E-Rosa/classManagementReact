"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../../styles/globals.css");
require("./StudentCard.css");
const react_router_dom_1 = require("react-router-dom");
const react_1 = __importDefault(require("react"));
//const ComponentName: GenericType<TypeParameter>
const StudentCardComponent = (props) => {
    function storeStudentID() {
        window.localStorage.removeItem("studentID");
        window.localStorage.removeItem("studentName");
        window.localStorage.setItem("studentID", props.id);
        window.localStorage.setItem("studentName", props.name);
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: `/students/${props.id}` },
            react_1.default.createElement("section", { className: "student-card-container", onClick: storeStudentID },
                react_1.default.createElement("span", { className: 'student-card-name' }, props.name),
                react_1.default.createElement("span", { className: `status ${props.activeClass}` })))));
};
exports.default = StudentCardComponent;

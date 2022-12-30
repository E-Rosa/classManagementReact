"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentPayment = void 0;
const react_1 = __importDefault(require("react"));
require("./StudentPayment.css");
const StudentPayment = (props) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("form", { className: "form-container payment-form-container" },
            react_1.default.createElement("div", { className: "row-container " },
                react_1.default.createElement("button", { className: `status-button ${props.paymentData.status} paymentStatus`, name: "status", value: props.paymentData.status, onClick: props.handleStatusClick, id: props.paymentData.id })),
            react_1.default.createElement("div", { className: "payment-row-container" },
                react_1.default.createElement("div", { className: "row-container paymentValue-and-symbol-container" },
                    react_1.default.createElement("span", { className: "paymentValue-input" }, "R$"),
                    react_1.default.createElement("input", { name: "value", className: "number-input paymentValue-input", type: "number", defaultValue: props.paymentData.value, onChange: props.handlePaymentChange })),
                react_1.default.createElement("input", { name: "date", className: "date-input", type: "date", value: props.paymentData.frontEnd.dateString, onChange: props.handlePaymentChange })),
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { name: "student_name", className: "text-input", type: "text", defaultValue: props.paymentData.frontEnd.student_name, onChange: props.handlePaymentChange }),
                react_1.default.createElement("input", { name: "teacher_name", className: "text-input", type: "text", defaultValue: props.paymentData.frontEnd.teacher_name, onChange: props.handlePaymentChange })),
            react_1.default.createElement("button", { className: "delete-button payment-delete-button" }))));
};
exports.StudentPayment = StudentPayment;

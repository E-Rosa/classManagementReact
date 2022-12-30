"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StudentPayment_1 = require("./StudentPayment/StudentPayment");
const paymentModel_1 = require("../../models/paymentModel");
const SubmitButton_1 = require("../_globals/SubmitButton/SubmitButton");
const StudentPayments = () => {
    const studentID = window.localStorage.getItem("studentID");
    const studentName = window.localStorage.getItem("studentName");
    const [paymentsState, setPaymentsState] = react_1.default.useState([]);
    function handleStatusClick(event) { }
    function handlePaymentChange(event) { }
    function handlePaymentSubmit(event) { }
    function handlePaymentDelete(event) { }
    function handlePaymentUpdate(event) { }
    function handlePaymentAdd(event) { }
    function generatePaymentComponents(paymentsInstances) {
        if (paymentsInstances != undefined) {
            return paymentsInstances.map((paymentInstance) => {
                return (react_1.default.createElement(StudentPayment_1.StudentPayment, { key: paymentInstance.id, paymentData: paymentInstance, handleStatusClick: handleStatusClick, handlePaymentChange: handlePaymentChange, handlePaymentDelete: handlePaymentDelete }));
            });
        }
        else {
            return [
                react_1.default.createElement(StudentPayment_1.StudentPayment, { paymentData: new paymentModel_1.PaymentModel(), handleStatusClick: handleStatusClick, handlePaymentChange: handlePaymentChange, handlePaymentDelete: handlePaymentDelete }),
            ];
        }
    }
    react_1.default.useEffect(() => {
        fetch(`http://localhost:5000/api/classManager/payments/${studentID}`)
            .then((res) => {
            return res.json();
        })
            .then((data) => {
            setPaymentsState(data);
        });
    }, []);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: "StudentPayments" },
            react_1.default.createElement("div", { className: "student-payment-cards-container row-container" }, generatePaymentComponents(paymentsState)),
            react_1.default.createElement(SubmitButton_1.SubmitButton, { handleSubmit: handlePaymentSubmit }))));
};
exports.default = StudentPayments;

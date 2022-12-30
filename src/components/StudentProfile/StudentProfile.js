"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../../styles/globals.css");
require("./StudentProfile.css");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const EditPopUp_js_1 = __importDefault(require("../_globals/EditPopUp/EditPopUp.js"));
const setResponse_js_1 = require("../_functionalities/setResponse.js");
const react_2 = __importDefault(require("react"));
const studentModel_1 = require("../../models/studentModel");
const _helpers_1 = require("../../models/_helpers");
function StudentProfile() {
    const [student, setStudent] = (0, react_1.useState)(new studentModel_1.StudentProfileModel());
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const [popUpIsActive, setPopUpIsActive] = (0, react_1.useState)(false);
    const [responseClass, setResponseClass] = (0, react_1.useState)("");
    const [isAddingStudent, setIsAddingStudent] = (0, react_1.useState)(false);
    const studentId = getStudentID();
    //const studentName: string | null = window.localStorage.getItem("studentName");
    console.log(student);
    (0, react_1.useEffect)(() => {
        if (studentId != undefined) {
            fetch(`http://localhost:5000/api/classManager/students/profile/${studentId}`)
                .then((res) => {
                return res.json();
            })
                .then((studentData) => {
                setStudent(new studentModel_1.StudentProfileModel(studentData));
            })
                .catch((error) => {
                console.log(error);
            });
        }
        else {
            setIsAddingStudent(true);
            setStudent(new studentModel_1.StudentProfileModel());
        }
    }, []);
    function getStudentID() {
        if (location.pathname == "/students/newStudent") {
            return null;
        }
        else {
            return window.localStorage.getItem("studentID");
        }
    }
    function handleChange(e) {
        e.preventDefault();
        if (e.target.name == "subscription") {
            setStudent(() => {
                return Object.assign(Object.assign({}, student), { subscription: (0, _helpers_1.formatStringToDate)(e.target.value), frontEnd: { subscriptionString: e.target.value } });
            });
        }
        else {
            setStudent(() => {
                return Object.assign(Object.assign({}, student), { [e.target.name]: e.target.value });
            });
        }
    }
    function validateStudentProfile(studentProfile) {
        let datePattern = /\d{4}[-]([0][1-9]||[1][0-2])[-]([0-2][0-9]||[3][0-1])/;
        if (studentProfile.name != undefined &&
            studentProfile.level != undefined &&
            studentProfile.city != undefined &&
            studentProfile.subscription != undefined &&
            studentProfile.frequency != undefined &&
            studentProfile.status != undefined) {
            if (studentProfile.name.length > 150) {
                setErrorMessage("Name must have 150 characters or less.");
                (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                return false;
            }
            else if (studentProfile.level.length > 50) {
                setErrorMessage("Level must have 50 characters or less.");
                (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                return false;
            }
            else if (studentProfile.city.length > 50) {
                setErrorMessage("City must have 50 characters or less.");
                (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                return false;
            }
            else if (studentProfile.frontEnd.subscriptionString.match(datePattern) == null) {
                setErrorMessage("Date must be in YYYY-MM-DD format.");
                (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                return false;
            }
            else {
                (0, setResponse_js_1.setResponse)(setResponseClass, "success");
                return true;
            }
        }
        else {
            setErrorMessage("You must select all fields.");
            (0, setResponse_js_1.setResponse)(setResponseClass, "error");
            return false;
        }
    }
    function handlePutSubmit(e) {
        if (validateStudentProfile(student) != false) {
            fetch(`http://localhost:5000/api/classManager/students/profile/${student.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student),
            }).then((res) => {
                console.log(res);
            });
        }
        else {
        }
    }
    function handlePostSubmit(e) {
        e.preventDefault();
        if (validateStudentProfile(student) != false) {
            console.log("student being POSTED is: ", student);
            fetch(`http://localhost:5000/api/classManager/students/add`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(student),
            });
            window.location.href = "http://localhost:3000/";
        }
    }
    function handleDelete(e) {
        e.preventDefault();
        e.stopPropagation();
        setPopUpIsActive((prev) => {
            return !prev;
        });
    }
    function handleNo(e) {
        e.preventDefault();
        e.stopPropagation();
        setPopUpIsActive((prev) => {
            return !prev;
        });
    }
    function handleYes(e) {
        e.preventDefault();
        e.stopPropagation();
        fetch(`http://localhost:5000/api/classManager/students/profile/${student.id}`, { method: "DELETE" });
        setPopUpIsActive((prev) => {
            return !prev;
        });
        window.location.href = "http://localhost:3000/";
    }
    function toggleActive(e) {
        if (student.status === "active") {
            setStudent((prev) => {
                return Object.assign(Object.assign({}, prev), { status: "inactive" });
            });
        }
        else {
            setStudent((prev) => {
                return Object.assign(Object.assign({}, prev), { status: "active" });
            });
        }
    }
    function handleAddStudent(e) {
        e.preventDefault();
        setIsAddingStudent(true);
        setStudent(new studentModel_1.StudentProfileModel());
    }
    return (react_2.default.createElement(react_2.default.Fragment, null,
        popUpIsActive && react_2.default.createElement(EditPopUp_js_1.default, { handleYes: handleYes, handleNo: handleNo }),
        react_2.default.createElement("main", { className: `student-profile-page ${responseClass}` },
            react_2.default.createElement("form", { className: `form-container student-profile-container` },
                react_2.default.createElement("div", { className: "student-profile-header" }),
                react_2.default.createElement("fieldset", { className: "student-info-container " },
                    react_2.default.createElement("div", { className: "input-container" },
                        react_2.default.createElement("input", { size: student.name ? student.name.length : 10, type: "text", className: " name-input", name: "name", onChange: handleChange, defaultValue: student.name, placeholder: "name" }),
                        react_2.default.createElement("input", { size: student.status ? student.status.length : 10, type: "text", className: `status-input ${student.status}`, name: "status", onChange: handleChange, defaultValue: student.status, placeholder: "status", onClick: toggleActive, readOnly: true })),
                    react_2.default.createElement("div", { className: "input-container" },
                        react_2.default.createElement("select", { name: "level", onChange: handleChange, value: student.level, className: "select-input" },
                            react_2.default.createElement("option", { value: "a1" }, "a1"),
                            react_2.default.createElement("option", { value: "a2" }, "a2"),
                            react_2.default.createElement("option", { value: "b1" }, "b1"),
                            react_2.default.createElement("option", { value: "b2" }, "b2"),
                            react_2.default.createElement("option", { value: "c1" }, "c1")),
                        react_2.default.createElement("input", { size: student.city ? student.city.length : 10, type: "text", className: "city-input", name: "city", onChange: handleChange, defaultValue: student.city, placeholder: "city" }),
                        react_2.default.createElement("input", { type: "date", className: "subscription-input", name: "subscription", onChange: handleChange, value: student.frontEnd.subscriptionString, placeholder: "subscription" })),
                    react_2.default.createElement("div", { className: "input-container" },
                        react_2.default.createElement("textarea", { className: " description-input", name: "description", onChange: handleChange, defaultValue: student.description, placeholder: "description" })),
                    react_2.default.createElement("div", { className: "input-container" },
                        react_2.default.createElement("select", { name: "teacher_name", onChange: handleChange, defaultValue: student.teacher_name },
                            react_2.default.createElement("option", { value: "Elias Rosa" }, "Elias Rosa")),
                        react_2.default.createElement("select", { name: "frequency", onChange: handleChange, className: "select-input", value: student.frequency },
                            react_2.default.createElement("option", { value: "once a week" }, "once a week"),
                            react_2.default.createElement("option", { value: "twice a week" }, "twice a week"),
                            react_2.default.createElement("option", { value: "three times a week" }, "three times a week"),
                            react_2.default.createElement("option", { value: "four times a week" }, "four times a week"),
                            react_2.default.createElement("option", { value: "five times a week" }, "five times a week")))),
                react_2.default.createElement("div", { className: "row-container-spaced" },
                    isAddingStudent || (
                    //if is not adding student
                    react_2.default.createElement("button", { className: "button submit-button", type: "button", onClick: handlePutSubmit }, "Submit")),
                    isAddingStudent && (react_2.default.createElement("button", { className: "button submit-button", type: "button", onClick: handlePostSubmit }, "Submit")),
                    react_2.default.createElement("button", { className: "-button delete-button", onClick: handleDelete }))),
            react_2.default.createElement("span", { className: "error-message" }, errorMessage),
            isAddingStudent || (react_2.default.createElement(react_2.default.Fragment, null,
                react_2.default.createElement("section", { className: "button-container" },
                    react_2.default.createElement(react_router_dom_1.Link, { to: `/students/${student.id}/classes` },
                        react_2.default.createElement("button", { className: "button classes-button" }, "Classes")),
                    react_2.default.createElement(react_router_dom_1.Link, { to: `/students/${student.id}/payments` },
                        react_2.default.createElement("button", { className: "button payments-button" }, "Payments"))),
                react_2.default.createElement("button", { className: "button add-button", onClick: handleAddStudent }, "add a new student"))))));
}
exports.default = StudentProfile;

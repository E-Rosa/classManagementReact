"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_router_dom_1 = require("react-router-dom");
const StudentClass_js_1 = __importDefault(require("./StudentClass/StudentClass.js"));
const setResponse_js_1 = require("../_functionalities/setResponse.js");
const classModel_js_1 = require("../../models/classModel.js");
require("./StudentClasses.css");
require("../../styles/globals.css");
function StudentClasses() {
    const [hasClasses, setHasClasses] = (0, react_1.useState)(false);
    const [classes, setClasses] = (0, react_1.useState)([]);
    const [responseClass, setResponseClass] = (0, react_1.useState)("");
    const [errorMessage, setErrorMessage] = (0, react_1.useState)("");
    const [isAddingNewClass, setIsAddingNewClass] = (0, react_1.useState)(false);
    const [hasPosted, setHasPosted] = (0, react_1.useState)(false);
    const [hasPut, setHasPut] = (0, react_1.useState)(false);
    const [hasDeleted, setHasDeleted] = (0, react_1.useState)(false);
    const studentId = window.localStorage.getItem("studentID");
    const studentName = window.localStorage.getItem("studentName");
    console.log("classes are: ", classes);
    (0, react_1.useEffect)(() => {
        if (studentId != undefined) {
            fetch(`http://localhost:5000/api/classManager/classes/${studentId}`)
                .then((res) => {
                return res.json();
            })
                .then((receivedClasses) => {
                if (receivedClasses != undefined) {
                    setHasClasses(true);
                    setClasses(receivedClasses);
                }
                else {
                    setHasClasses(false);
                }
            });
        }
        else {
            setHasClasses(false);
        }
    }, [hasPosted, hasPut, hasDeleted]);
    function handleStatusClick(e) {
        e.preventDefault();
        setClasses((prevClasses) => {
            return prevClasses.map((aClass) => {
                if (isAddingNewClass) {
                    if (aClass.status == "pending") {
                        return Object.assign(Object.assign({}, aClass), { status: "done" });
                    }
                    else if (aClass.status == "done") {
                        return Object.assign(Object.assign({}, aClass), { status: "miss" });
                    }
                    else if (aClass.status == "miss") {
                        return Object.assign(Object.assign({}, aClass), { status: "pending" });
                    }
                    else {
                        return Object.assign(Object.assign({}, aClass), { status: "pending" });
                    }
                }
                else {
                    if (aClass.id == e.currentTarget.id) {
                        if (aClass.status == "pending") {
                            return Object.assign(Object.assign({}, aClass), { status: "done" });
                        }
                        else if (aClass.status == "done") {
                            return Object.assign(Object.assign({}, aClass), { status: "miss" });
                        }
                        else if (aClass.status == "miss") {
                            return Object.assign(Object.assign({}, aClass), { status: "pending" });
                        }
                        else {
                            return Object.assign(Object.assign({}, aClass), { status: "pending" });
                        }
                    }
                    else {
                        return Object.assign({}, aClass);
                    }
                }
            });
        });
    }
    function handleClassChange(e) {
        e.preventDefault();
        const eName = e.target.name;
        const eValue = e.target.value;
        if (isAddingNewClass) {
            classes.forEach((aClass) => {
                if (eName == "repeat") {
                    setClasses((prevClasses) => {
                        return [
                            Object.assign(Object.assign({}, aClass), { frontEnd: new classModel_js_1.ClassModelFrontEnd(parseInt(eValue), aClass.frontEnd.dateString) }),
                        ];
                    });
                }
                else {
                    setClasses((prevClasses) => {
                        return [
                            Object.assign(Object.assign({}, aClass), { [eName]: eValue }),
                        ];
                    });
                }
            });
        }
        else {
            setClasses((prevClasses) => {
                return prevClasses.map((aClass) => {
                    //if is editing classes
                    if (aClass.id != undefined) {
                        if (e.target.id == aClass.id) {
                            return Object.assign(Object.assign({}, aClass), { [eName]: eValue });
                        }
                        return Object.assign({}, aClass);
                    }
                    else {
                        return Object.assign({}, aClass);
                    }
                });
            });
        }
    }
    function handleClassAdd(e) {
        e.preventDefault();
        if (studentId != undefined && studentName != undefined) {
            setHasClasses(true);
            setClasses((prevClasses) => {
                return [
                    new classModel_js_1.ClassModel(undefined, "Elias Rosa", studentName, "New Class", "Description", new Date(), "1", "pending", 1, "7:00", "class id", "payment id", new classModel_js_1.ClassModelFrontEnd()),
                ];
            });
            setIsAddingNewClass(true);
        }
        else {
            (0, setResponse_js_1.setResponse)(setResponseClass, "error");
            setErrorMessage("You must select a student before adding classes.");
        }
    }
    function handleClassPut(e) {
        e.preventDefault();
        let areValidated = validateClassModels(classes);
        if (areValidated) {
            fetch(`http://localhost:5000/api/classManager/classes/${studentId}`, {
                method: "put",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(classes),
            });
            (0, setResponse_js_1.setResponse)(setResponseClass, "success");
            setHasPut((prev) => {
                return !prev;
            });
        }
        else {
            (0, setResponse_js_1.setResponse)(setResponseClass, "error");
        }
    }
    function handleClassPost(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            let isValidated = validateClassModels(classes);
            try {
                if (isValidated) {
                    const queryResult = yield fetch(`http://localhost:5000/api/classManager/classes/${studentId}`, {
                        method: "post",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(classes),
                    });
                    if (queryResult.status != 200) {
                        (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                        setErrorMessage("Something went wrong. Please try again.");
                    }
                    else {
                        //if the post was OK
                        //cache the new class in
                        setIsAddingNewClass(false);
                        setHasPosted((prev) => {
                            return !prev;
                        });
                    }
                }
                else {
                    (0, setResponse_js_1.setResponse)(setResponseClass, "error");
                    setErrorMessage("The data provided could not be validated.");
                }
            }
            catch (_a) {
                console.log('there was an error in the posting process');
            }
        });
    }
    function handleClassDelete(e) {
        return __awaiter(this, void 0, void 0, function* () {
            e.preventDefault();
            const eventTarget = e.target;
            if (eventTarget.id) {
                if (classes != undefined) {
                    let deleteTarget = classes.find((aClass) => {
                        return aClass.id === eventTarget.id;
                    });
                    if (deleteTarget != undefined) {
                        yield fetch(`http://localhost:5000/api/classManager/classes/${deleteTarget.id}`, {
                            method: "delete",
                        }).then((res) => {
                            if (res.status === 200) {
                                (0, setResponse_js_1.setResponse)(setResponseClass, "success");
                                setHasDeleted((prev) => {
                                    return !prev;
                                });
                            }
                        });
                    }
                }
            }
        });
    }
    function validateClassModel(data) {
        if (data.title.length > 200 || data.title == "") {
            return "title error";
        }
        else if (data.duration.length > 50 || data.duration == "") {
            return "duration error";
        }
        else if (data.status.length > 50 || data.status == "") {
            return "status error";
        }
        else if (data.date == undefined) {
            return "date error";
        }
        else if (data.grade == undefined) {
            return "grade error";
        }
        return "ok";
    }
    function validateClassModels(data) {
        let validatedCount = 0;
        classes.forEach((oneClass) => {
            if (validateClassModel(oneClass) == "ok") {
                validatedCount++;
            }
        });
        return validatedCount == data.length ? true : false;
    }
    const classCards = classes.map((aClass) => {
        return (react_1.default.createElement(react_1.default.Fragment, null,
            isAddingNewClass || (react_1.default.createElement(StudentClass_js_1.default, { classData: aClass, key: aClass.id, handleStatusClick: handleStatusClick, handleClassChange: handleClassChange, handleDelete: handleClassDelete, isAddingNewClass: isAddingNewClass })),
            isAddingNewClass && (react_1.default.createElement(StudentClass_js_1.default, { classData: aClass, key: aClass.id, handleStatusClick: handleStatusClick, handleClassChange: handleClassChange, handleDelete: handleClassDelete, isAddingNewClass: isAddingNewClass }))));
    });
    return (react_1.default.createElement(react_1.default.Fragment, null,
        //if classes is empty
        classes[0] != undefined || (react_1.default.createElement("div", { className: `classes-page-container column-container-spaced   ${responseClass}` },
            react_1.default.createElement("div", { className: `classes-container-no-student` },
                hasClasses && (react_1.default.createElement("span", { className: "or-text" }, "Selected student has no classes logged.")),
                react_1.default.createElement(react_router_dom_1.Link, { to: "" },
                    react_1.default.createElement("button", { className: "button add-class-button", onClick: handleClassAdd }, "add a new class")),
                react_1.default.createElement("span", { className: "or-text" }, "or"),
                react_1.default.createElement(react_router_dom_1.Link, { to: "/" },
                    react_1.default.createElement("button", { className: "button search-student-button" }, "search for a student.")),
                react_1.default.createElement("span", { className: "error-message" }, errorMessage)))),
        //If classes is not empty
        classes[0] != undefined && (react_1.default.createElement("div", { className: `classes-page-container column-container-spaced   ${responseClass}` },
            isAddingNewClass && (react_1.default.createElement("div", { className: "class-cards-container single-column-grid" }, classCards)),
            isAddingNewClass || (react_1.default.createElement("div", { className: "class-cards-container row-container-spaced" }, classCards)),
            //if is not adding new classes
            isAddingNewClass || (react_1.default.createElement(react_1.default.Fragment, null,
                react_1.default.createElement("button", { className: "button", onClick: handleClassPut }, "Submit"),
                react_1.default.createElement("button", { className: "button add-class-button", onClick: handleClassAdd }, "add a new class"))),
            //if is adding new classes
            isAddingNewClass && (react_1.default.createElement("button", { className: "button", onClick: handleClassPost }, "Submit"))))));
}
exports.default = StudentClasses;

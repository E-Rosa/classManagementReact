"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("../StudentClasses.css");
require("../../../styles/globals.css");
const react_1 = __importDefault(require("react"));
const StudentClass = (props) => {
    return (react_1.default.createElement("div", { className: "form-container class-container" },
        react_1.default.createElement("form", { className: "class-form" },
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { type: "text", name: "title", className: "studentClass-text-input title-input", placeholder: "title", defaultValue: props.classData.title, onChange: props.handleClassChange, size: props.classData.title.length, id: props.classData.id }),
                react_1.default.createElement("button", { className: `status-button ${props.classData.status}`, name: "status", value: props.classData.status, onClick: props.handleStatusClick, id: props.classData.id })),
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { type: "text", name: "student_name", className: "studentClass-text-input student-name-input", placeholder: "student", defaultValue: props.classData.student_name, size: props.classData.student_name.length, id: props.classData.id, readOnly: true }),
                react_1.default.createElement("select", { name: "teacher_name", onChange: props.handleClassChange, defaultValue: props.classData.teacher_name, id: props.classData.id },
                    react_1.default.createElement("option", { value: "Elias Rosa" }, " Elias Rosa"))),
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { type: "date", name: "date", className: "date-input", defaultValue: props.classData.frontEnd.dateString, onChange: props.handleClassChange, id: props.classData.id }),
                props.isAddingNewClass && (react_1.default.createElement("select", { name: "repeat", defaultValue: 0, onChange: props.handleClassChange, id: props.classData.id },
                    react_1.default.createElement("option", { value: 0 }, "repeat"),
                    react_1.default.createElement("option", { value: 1 }, "1 month"),
                    react_1.default.createElement("option", { value: 2 }, "2 months"),
                    react_1.default.createElement("option", { value: 3 }, "3 months"),
                    react_1.default.createElement("option", { value: 6 }, "6 months"),
                    react_1.default.createElement("option", { value: 12 }, "12 months"))),
                react_1.default.createElement("select", { name: "duration", className: "duration-input", defaultValue: props.classData.duration, onChange: props.handleClassChange, id: props.classData.id },
                    react_1.default.createElement("option", { value: "1h" }, "1h"),
                    react_1.default.createElement("option", { value: "2h" }, "2h"),
                    react_1.default.createElement("option", { value: "3h" }, "3h"))),
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { size: 10, type: "text", name: "time", defaultValue: props.classData.time, placeholder: "7:00 - 21:00", onChange: props.handleClassChange, id: props.classData.id })),
            react_1.default.createElement("textarea", { name: "description", className: "textarea-input description-input", placeholder: "description", defaultValue: props.classData.description, onChange: props.handleClassChange, id: props.classData.id }),
            react_1.default.createElement("div", { className: "row-container" },
                react_1.default.createElement("input", { type: "number", name: "grade", className: "studentClass-number-input grade-input", placeholder: "?", defaultValue: props.classData.grade, onChange: props.handleClassChange, id: props.classData.id }),
                react_1.default.createElement("button", { className: "-button delete-button", onClick: props.handleDelete, id: props.classData.id })))));
};
exports.default = StudentClass;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const StudentCard_js_1 = __importDefault(require("./StudentCard/StudentCard.js"));
const react_router_dom_1 = require("react-router-dom");
require("../../styles/globals.css");
require("./SearchBar.css");
function SearchBar() {
    const [searchValue, setSearchValue] = react_1.default.useState("");
    const [students, setStudents] = react_1.default.useState([]);
    const [isSearching, setIsSearching] = react_1.default.useState(false);
    const [isSubmitting, setIsSubmitting] = react_1.default.useState(false);
    const studentCards = students.map((student) => {
        return (react_1.default.createElement(StudentCard_js_1.default, { key: student.id, name: student.name, id: student.id, status: student.status, activeClass: student.status.toLowerCase() }));
    });
    function handleChange(event) {
        setSearchValue(event.target.value);
        event.target.value == "" ? setIsSearching(false) : setIsSearching(true);
    }
    function handleSubmit(event) {
        if (event.key == "Enter") {
            setIsSubmitting((prev) => {
                return !prev;
            });
        }
    }
    react_1.default.useEffect(() => {
        fetch(`http://localhost:5000/api/classManager/students/${searchValue}`)
            .then((res) => {
            return res.json();
        })
            .then((studentCards) => {
            setStudents(studentCards);
        })
            .catch((err) => {
            console.log("error");
        });
    }, [isSubmitting]);
    return (react_1.default.createElement("div", { id: "search-bar-container" },
        react_1.default.createElement("input", { type: "text", id: "search-bar", placeholder: "search for a student", autoFocus: true, onChange: handleChange, onKeyDown: handleSubmit, autoComplete: "off" }),
        isSearching || (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement(react_router_dom_1.Link, { to: "students/newStudent" },
                react_1.default.createElement("button", { className: "button" }, "add a new student")))),
        react_1.default.createElement("section", { id: "student-cards-list" }, studentCards)));
}
exports.default = SearchBar;

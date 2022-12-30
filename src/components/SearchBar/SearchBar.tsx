import React from "react";
import {FunctionComponent} from 'react';
import StudentCardComponent from "./StudentCard/StudentCard.js";
import { StudentCardProps } from "./StudentCard/StudentCard.js";
import {StudentCardModel} from "../../models/studentModel.js"
import { Link } from "react-router-dom";
import "../../styles/globals.css";
import "./SearchBar.css";

function SearchBar() {
  const [searchValue, setSearchValue] = React.useState("");
  const [students, setStudents] = React.useState([]);
  const [isSearching, setIsSearching] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const studentCards = students.map((student: StudentCardProps) => {
    return (
      <StudentCardComponent
        key={student.id}
        name={student.name}
        id={student.id}
        status={student.status}
        activeClass={student.status.toLowerCase()}
      />
    );
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(event.target.value);
    event.target.value == "" ? setIsSearching(false) : setIsSearching(true);
  }
  function handleSubmit(event: React.KeyboardEvent) {
    if (event.key == "Enter") {
      setIsSubmitting((prev) => {
        return !prev;
      });
    }
  }
  React.useEffect(() => {
    fetch(`http://localhost:5000/api/classManager/students/${searchValue}`)
      .then((res) => {
        return res.json();
      })
      .then((studentCards) => {
        setStudents(studentCards)
      })
      .catch((err) => {
        console.log("error");
      });
  }, [isSubmitting]);

  return (
    <div id="search-bar-container">
      <input
        type="text"
        id="search-bar"
        placeholder="search for a student"
        autoFocus
        onChange={handleChange}
        onKeyDown={handleSubmit}
        autoComplete="off"
      />
      {isSearching || (
        <>
          <Link to="students/newStudent">
            <button className="button">add a new student</button>
          </Link>
        </>
      )}
      <section id="student-cards-list">{studentCards}</section>
    </div>
  );
}

export default SearchBar;

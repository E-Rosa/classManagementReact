import "../../styles/globals.css";
import "./StudentProfile.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import EditPopUp from "../_globals/EditPopUp/EditPopUp.js";
import { setResponse } from "../_functionalities/setResponse.js";
import React from "react";
import { StudentProfileModel } from "../../models/studentModel";
import { formatStringToDate } from "../../models/_helpers";

function StudentProfile() {
  const [student, setStudent] = useState<StudentProfileModel>(
    new StudentProfileModel()
  );
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [popUpIsActive, setPopUpIsActive] = useState<boolean>(false);
  const [responseClass, setResponseClass] = useState<string>("");
  const [isAddingStudent, setIsAddingStudent] = useState<boolean>(false);
  const studentId: string | null = getStudentID();
  //const studentName: string | null = window.localStorage.getItem("studentName");

  console.log(student);
  useEffect(() => {
    if (studentId != undefined) {
      fetch(
        `http://localhost:5000/api/classManager/students/profile/${studentId}`
      )
        .then((res) => {
          return res.json();
        })
        .then((studentData) => {
          setStudent(new StudentProfileModel(studentData));
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setIsAddingStudent(true);
      setStudent(new StudentProfileModel());
    }
  }, []);

  function getStudentID(): string | null {
    if (location.pathname == "/students/newStudent") {
      return null;
    } else {
      return window.localStorage.getItem("studentID");
    }
  }
  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) {
    e.preventDefault();
    if (e.target.name == "subscription") {
      setStudent(() => {
        return {
          ...student,
          subscription: formatStringToDate(e.target.value),
          frontEnd: { subscriptionString: e.target.value },
        };
      });
    } else {
      setStudent(() => {
        return { ...student, [e.target.name]: e.target.value };
      });
    }
  }
  function validateStudentProfile(studentProfile: StudentProfileModel) {
    let datePattern = /\d{4}[-]([0][1-9]||[1][0-2])[-]([0-2][0-9]||[3][0-1])/;
    if (
      studentProfile.name != undefined &&
      studentProfile.level != undefined &&
      studentProfile.city != undefined &&
      studentProfile.subscription != undefined &&
      studentProfile.frequency != undefined &&
      studentProfile.status != undefined
    ) {
      if (studentProfile.name.length > 150) {
        setErrorMessage("Name must have 150 characters or less.");
        setResponse(setResponseClass, "error");
        return false;
      } else if (studentProfile.level.length > 50) {
        setErrorMessage("Level must have 50 characters or less.");
        setResponse(setResponseClass, "error");
        return false;
      } else if (studentProfile.city.length > 50) {
        setErrorMessage("City must have 50 characters or less.");
        setResponse(setResponseClass, "error");
        return false;
      } else if (
        studentProfile.frontEnd.subscriptionString.match(datePattern) == null
      ) {
        setErrorMessage("Date must be in YYYY-MM-DD format.");
        setResponse(setResponseClass, "error");
        return false;
      } else {
        setResponse(setResponseClass, "success");
        return true;
      }
    } else {
      setErrorMessage("You must select all fields.");
      setResponse(setResponseClass, "error");
      return false;
    }
  }
  function handlePutSubmit(e: React.MouseEvent) {
    if (validateStudentProfile(student) != false) {
      fetch(
        `http://localhost:5000/api/classManager/students/profile/${student.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(student),
        }
      ).then((res) => {
        console.log(res);
      });
    } else {
    }
  }
  function handlePostSubmit(e: React.MouseEvent) {
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
  function handleDelete(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setPopUpIsActive((prev) => {
      return !prev;
    });
  }
  function handleNo(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    setPopUpIsActive((prev) => {
      return !prev;
    });
  }
  function handleYes(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    fetch(
      `http://localhost:5000/api/classManager/students/profile/${student.id}`,
      { method: "DELETE" }
    );
    setPopUpIsActive((prev) => {
      return !prev;
    });
    window.location.href = "http://localhost:3000/";
  }
  function toggleActive(e: React.MouseEvent) {
    if (student.status === "active") {
      setStudent((prev) => {
        return { ...prev, status: "inactive" };
      });
    } else {
      setStudent((prev) => {
        return { ...prev, status: "active" };
      });
    }
  }

  function handleAddStudent(e: React.MouseEvent) {
    e.preventDefault();
    setIsAddingStudent(true);
    setStudent(new StudentProfileModel());
  }

  return (
    <>
      {popUpIsActive && <EditPopUp handleYes={handleYes} handleNo={handleNo} />}
      <main className={`student-profile-page ${responseClass}`}>
        <form className={`form-container student-profile-container`}>
          <div className="student-profile-header"></div>
          <fieldset className={"student-info-container "}>
            <div className="input-container">
              <input
                size={student.name ? student.name.length : 10}
                type="text"
                className=" name-input"
                name="name"
                onChange={handleChange}
                defaultValue={student.name}
                placeholder="name"
              />
              <input
                size={student.status ? student.status.length : 10}
                type="text"
                className={`status-input ${student.status}`}
                name="status"
                onChange={handleChange}
                defaultValue={student.status}
                placeholder="status"
                onClick={toggleActive}
                readOnly
              />
            </div>
            <div className="input-container">
              <select
                name="level"
                onChange={handleChange}
                value={student.level}
                className="select-input"
              >
                <option value="a1">a1</option>
                <option value="a2">a2</option>
                <option value="b1">b1</option>
                <option value="b2">b2</option>
                <option value="c1">c1</option>
              </select>
              <input
                size={student.city ? student.city.length : 10}
                type="text"
                className="city-input"
                name="city"
                onChange={handleChange}
                defaultValue={student.city}
                placeholder="city"
              />
              <input
                type="date"
                className="subscription-input"
                name="subscription"
                onChange={handleChange}
                value={student.frontEnd.subscriptionString}
                placeholder="subscription"
              />
            </div>
            <div className="input-container">
              <textarea
                className=" description-input"
                name="description"
                onChange={handleChange}
                defaultValue={student.description}
                placeholder="description"
              />
            </div>
            <div className="input-container">
              <select
                name="teacher_name"
                onChange={handleChange}
                defaultValue={student.teacher_name}
              >
                <option value="Elias Rosa">Elias Rosa</option>
              </select>
              <select
                name="frequency"
                onChange={handleChange}
                className="select-input"
                value={student.frequency}
              >
                <option value="once a week">once a week</option>
                <option value="twice a week">twice a week</option>
                <option value="three times a week">three times a week</option>
                <option value="four times a week">four times a week</option>
                <option value="five times a week">five times a week</option>
              </select>
            </div>
          </fieldset>
          <div className="row-container-spaced">
            {isAddingStudent || (
              //if is not adding student
              <button
                className="button submit-button"
                type="button"
                onClick={handlePutSubmit}
              >
                Submit
              </button>
            )}
            {isAddingStudent && (
              <button
                className="button submit-button"
                type="button"
                onClick={handlePostSubmit}
              >
                Submit
              </button>
            )}
            <button className="-button delete-button" onClick={handleDelete} />
          </div>
        </form>
        <span className="error-message">{errorMessage}</span>
        {isAddingStudent || (
          <>
            <section className="button-container">
              <Link to={`/students/${student.id}/classes`}>
                <button className="button classes-button">Classes</button>
              </Link>
              <Link to={`/students/${student.id}/payments`}>
                <button className="button payments-button">Payments</button>
              </Link>
            </section>
            <button className="button add-button" onClick={handleAddStudent}>
              add a new student
            </button>
          </>
        )}
      </main>
    </>
  );
}

export default StudentProfile;

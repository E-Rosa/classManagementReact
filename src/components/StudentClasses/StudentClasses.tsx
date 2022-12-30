import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentClass from "./StudentClass/StudentClass.js";
import { StudentClassProps } from "./StudentClass/StudentClass.js";
import { setResponse } from "../_functionalities/setResponse.js";
import { ClassModel, ClassModelFrontEnd } from "../../models/classModel.js";
import "./StudentClasses.css";
import "../../styles/globals.css";

function StudentClasses() {
  const [hasClasses, setHasClasses] = useState<boolean>(false);
  const [classes, setClasses] = useState<ClassModel[]>([]);
  const [responseClass, setResponseClass] = useState<string>("");
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [isAddingNewClass, setIsAddingNewClass] = useState<boolean>(false);
  const [hasPosted, setHasPosted] = useState<boolean>(false);
  const [hasPut, setHasPut] = useState<boolean>(false);
  const [hasDeleted, setHasDeleted] = useState<boolean>(false);
  const studentId = window.localStorage.getItem("studentID");
  const studentName = window.localStorage.getItem("studentName");

  console.log("classes are: ", classes);
  useEffect(() => {
    if (studentId != undefined) {
      fetch(`http://localhost:5000/api/classManager/classes/${studentId}`)
        .then((res: Response) => {
          return res.json();
        })
        .then((receivedClasses: ClassModel[]) => {
          if (receivedClasses != undefined) {
            setHasClasses(true);
            setClasses(receivedClasses);
          } else {
            setHasClasses(false);
          }
        });
    } else {
      setHasClasses(false);
    }
  }, [hasPosted, hasPut, hasDeleted]);

  function handleStatusClick(e: React.MouseEvent<HTMLElement>) {
    e.preventDefault();
    setClasses((prevClasses: ClassModel[]) => {
      return prevClasses.map((aClass: ClassModel) => {
        if (isAddingNewClass) {
          if (aClass.status == "pending") {
            return { ...aClass, status: "done" };
          } else if (aClass.status == "done") {
            return { ...aClass, status: "miss" };
          } else if (aClass.status == "miss") {
            return { ...aClass, status: "pending" };
          } else {
            return { ...aClass, status: "pending" };
          }
        } else {
          if (aClass.id == e.currentTarget.id) {
            if (aClass.status == "pending") {
              return { ...aClass, status: "done" };
            } else if (aClass.status == "done") {
              return { ...aClass, status: "miss" };
            } else if (aClass.status == "miss") {
              return { ...aClass, status: "pending" };
            } else {
              return { ...aClass, status: "pending" };
            }
          } else {
            return { ...aClass };
          }
        }
      });
    });
  }

  function handleClassChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    e.preventDefault();
    const eName = e.target.name;
    const eValue = e.target.value;
    if (isAddingNewClass) {
      classes.forEach((aClass: ClassModel) => {
        if (eName == "repeat") {
          setClasses((prevClasses: ClassModel[]) => {
            return [
              {
                ...aClass,
                frontEnd: new ClassModelFrontEnd(
                  parseInt(eValue),
                  aClass.frontEnd.dateString
                ),
              },
            ];
          });
        } else {
          setClasses((prevClasses: ClassModel[]) => {
            return [
              {
                ...aClass,
                [eName]: eValue,
              },
            ];
          });
        }
      });
    } else {
      setClasses((prevClasses: ClassModel[]) => {
        return prevClasses.map((aClass: ClassModel) => {
          //if is editing classes
          if (aClass.id != undefined) {
            if (e.target.id == aClass.id) {
              return {
                ...aClass,
                [eName]: eValue,
              };
            }
            return { ...aClass };
          } else {
            return { ...aClass };
          }
        });
      });
    }
  }
  function handleClassAdd(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (studentId != undefined && studentName != undefined) {
      setHasClasses(true);
      setClasses((prevClasses: ClassModel[]) => {
        return [
          new ClassModel(
            undefined,
            "Elias Rosa",
            studentName,
            "New Class",
            "Description",
            new Date(),
            "1",
            "pending",
            1,
            "7:00",
            "class id",
            "payment id",
            new ClassModelFrontEnd()
          ),
        ];
      });
      setIsAddingNewClass(true);
    } else {
      setResponse(setResponseClass, "error");
      setErrorMessage("You must select a student before adding classes.");
    }
  }
  function handleClassPut(e: React.MouseEvent<HTMLButtonElement>) {
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
      setResponse(setResponseClass, "success");
      setHasPut((prev: boolean) => {
        return !prev;
      });
    } else {
      setResponse(setResponseClass, "error");
    }
  }

  async function handleClassPost(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    let isValidated = validateClassModels(classes);
    try{
      if (isValidated) {
        const queryResult = await fetch(
          `http://localhost:5000/api/classManager/classes/${studentId}`,
          {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(classes),
          }
        );
        if (queryResult.status != 200) {
          setResponse(setResponseClass, "error");
          setErrorMessage("Something went wrong. Please try again.");
        } else {
          //if the post was OK
          //cache the new class in
          setIsAddingNewClass(false);
          setHasPosted((prev) => {
            return !prev;
          });
        }
      } else {
        setResponse(setResponseClass, "error");
        setErrorMessage("The data provided could not be validated.");
      }
    }catch{
      console.log('there was an error in the posting process')
    }
   
  }
  async function handleClassDelete(e: React.MouseEvent) {
    e.preventDefault();
    const eventTarget = e.target as HTMLElement;
    if (eventTarget.id) {
      if (classes != undefined) {
        let deleteTarget = classes.find((aClass) => {
          return aClass.id === eventTarget.id;
        });
        if (deleteTarget != undefined) {
          await fetch(
            `http://localhost:5000/api/classManager/classes/${deleteTarget.id}`,
            {
              method: "delete",
            }
          ).then((res) => {
            if (res.status === 200) {
              setResponse(setResponseClass, "success");
              setHasDeleted((prev) => {
                return !prev;
              });
            }
          });
        }
      }
    }
  }
  function validateClassModel(data: ClassModel) {
    if (data.title.length > 200 || data.title == "") {
      return "title error";
    } else if (data.duration.length > 50 || data.duration == "") {
      return "duration error";
    } else if (data.status.length > 50 || data.status == "") {
      return "status error";
    } else if (data.date == undefined) {
      return "date error";
    } else if (data.grade == undefined) {
      return "grade error";
    }
    return "ok";
  }
  function validateClassModels(data: ClassModel[]): boolean {
    let validatedCount: number = 0;
    classes.forEach((oneClass: ClassModel) => {
      if (validateClassModel(oneClass) == "ok") {
        validatedCount++;
      }
    });

    return validatedCount == data.length ? true : false;
  }

  const classCards = classes.map((aClass: ClassModel) => {
    return (
      <>
        {isAddingNewClass || (
          <StudentClass
            classData={aClass}
            key={aClass.id}
            handleStatusClick={handleStatusClick}
            handleClassChange={handleClassChange}
            handleDelete={handleClassDelete}
            isAddingNewClass={isAddingNewClass}
          />
        )}
        {isAddingNewClass && (
          <StudentClass
            classData={aClass}
            key={aClass.id}
            handleStatusClick={handleStatusClick}
            handleClassChange={handleClassChange}
            handleDelete={handleClassDelete}
            isAddingNewClass={isAddingNewClass}
          />
        )}
      </>
    );
  });

  return (
    <>
      {
        //if classes is empty
        classes[0] != undefined || (
          <div
            className={`classes-page-container column-container-spaced   ${responseClass}`}
          >
            <div className={`classes-container-no-student`}>
              {hasClasses && (
                <span className="or-text">
                  Selected student has no classes logged.
                </span>
              )}
              <Link to="">
                <button
                  className="button add-class-button"
                  onClick={handleClassAdd}
                >
                  add a new class
                </button>
              </Link>
              <span className="or-text">or</span>
              <Link to="/">
                <button className="button search-student-button">
                  search for a student.
                </button>
              </Link>
              <span className="error-message">{errorMessage}</span>
            </div>
          </div>
        )
      }
      {
        //If classes is not empty
        classes[0] != undefined && (
          <div
            className={`classes-page-container column-container-spaced   ${responseClass}`}
          >
            {isAddingNewClass && (
              <div className="class-cards-container single-column-grid">
                {classCards}
              </div>
            )}
            {isAddingNewClass || (
              <div className="class-cards-container row-container-spaced">
                {classCards}
              </div>
            )}

            {
              //if is not adding new classes
              isAddingNewClass || (
                <>
                  <button className="button" onClick={handleClassPut}>
                    Submit
                  </button>
                  <button
                    className="button add-class-button"
                    onClick={handleClassAdd}
                  >
                    add a new class
                  </button>
                </>
              )
            }
            {
              //if is adding new classes
              isAddingNewClass && (
                <button className="button" onClick={handleClassPost}>
                  Submit
                </button>
              )
            }
          </div>
        )
      }
    </>
  );
}

export default StudentClasses;

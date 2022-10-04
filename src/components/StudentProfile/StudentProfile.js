import "../../styles/globals.css";
import "./StudentProfile.css";
import { useEffect, useState } from "react";
import {StudentInfo} from './StudentInfo/StudentInfo.js';
import {EditPopUp} from '../EditPopUp/EditPopUp.js';

function StudentProfile() {
  const [student, setStudent] = useState({});
  const [formData, setFormData] = useState({});

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/classManager/students/profile/${window.localStorage.getItem(
        "studentID"
      )}`
    )
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res)
      const student = res[0];
      setStudent(() => {
        return {
          birthday: student.birthday,
          city: student.city,
          description: student.description,
          frequency: student.frequency,
          id: student.id,
          level: student.level,
          name: student.name,
          status: student.status,
          subscription: student.subscription,
          teacherId: student.teacher_id,
          teacherName: student.teacher_name
        };
      });
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

  function handleChange(e){
    let input = e.target.value;
    setFormData({...formData, [e.target.name]: input})
    console.log(formData)
  }
  function handleSubmit(e){
    e.preventDefault();
    fetch(`http://localhost:5000/api/classManager/students/profile/${student.id}`,
    {
      method: 'PUT',
      body: JSON.stringify(student)
    })
  }
  
  return (
    <>
      <form id="student-profile-page" onSubmit={handleSubmit}>
        <main id="student-profile-container">
          <div id='student-profile-header'>
            <h2 className="title">Student Profile</h2>
            <button
              className="edit-button"
              id="-button"
            ></button>
          </div>
          <fieldset className="student-info-container">
            <label className="student-info-type"> <b>ID</b> </label>
            <input type="text" className="student-info-input" name='id' onChange={handleChange} />
          </fieldset>
          <button className="button" id="submit-button" type='submit'>Submit</button>
        </main>


        <section id="button-container">
          <button className="button" id="classes-button">
            Classes
          </button>
          <button className="button" id="payments-button">
            Payments
          </button>
        </section>
        <button className="button" id="add-button">
          +
        </button>
      </form>
    </>
  );
}

export default StudentProfile;

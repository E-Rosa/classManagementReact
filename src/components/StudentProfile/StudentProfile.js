import "../../styles/globals.css";
import "./StudentProfile.css";
import { useEffect, useState } from "react";
import {StudentInfo} from './StudentInfo/StudentInfo.js';
import {EditPopUp} from '../EditPopUp/EditPopUp.js';

function StudentProfile() {
  const [student, setStudent] = useState({});
  const [inputType, setInputType] = useState(null);
  const [user, setUser] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/api/students/profile/${window.localStorage.getItem(
        "studentID"
      )}`
    )
      .then((res) => {
        return res.json();
      })
      .then((res) => {
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


  function makeEditable() {
    console.log('makeEditable triggered');
    setUser(true);
    //setInputType(this.inputType);
  }

  function updateField(data){
    console.log('updateField triggered');
          setStudent((prev)=>{
            return {
              ...prev,
              [inputType]: data,
            }
          })
    //makeEditable();
  }
  
  return (
    <>
    <h2>{user.toString()}</h2> 
    {user && <EditPopUp />}
      <form id="student-profile-page">
        <main id="student-profile-container">
          <h2 className="title">Student Profile</h2>

          <StudentInfo
              inputType={'id'}
              title='ID: '
              fieldValue={student.id}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'name'}
              title='Name: '
              fieldValue={student.name}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'level'}
              title='Level: '
              fieldValue={student.level}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'status'}
              title='Status: '
              fieldValue={student.status}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'description'}
              title='Description: '
              fieldValue={student.description}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'subscription'}
              title='Subscription: '
              fieldValue={student.subscription}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'teacher_name'}
              title='Teacher: '
              fieldValue={student.teacherName}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'frequency'}
              title='Frequency: '
              fieldValue={student.frequency}
              handleClick={makeEditable}
          />
          <StudentInfo
              inputType={'city'}
              title='City: '
              fieldValue={student.city}
              handleClick={makeEditable}
          />
          
          <button className="button" id="submit-button" type='submit'>
            Submit
          </button>
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

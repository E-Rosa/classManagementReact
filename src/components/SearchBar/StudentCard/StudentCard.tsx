import '../../../styles/globals.css';
import './StudentCard.css';
import {Link} from 'react-router-dom';
import React from 'react';
import {FunctionComponent} from "react";

interface StudentCardProps{
    name: string;
    status: string;
    id: string;
    activeClass: string;
}
//const ComponentName: GenericType<TypeParameter>
const StudentCardComponent:FunctionComponent<StudentCardProps> = (props) =>{
    function storeStudentID(){
        window.localStorage.removeItem("studentID");
        window.localStorage.removeItem("studentName");
        window.localStorage.setItem("studentID", props.id);
        window.localStorage.setItem("studentName", props.name);
    }
    return (
        <>
        <Link to={`/students/${props.id}`}>
        <section className="student-card-container" onClick={storeStudentID}>
            <span className='student-card-name'>{props.name}</span>
            <span className={`status ${props.activeClass}`}></span>
        </section>
        </Link>
        </>
    );
  }

export{StudentCardProps}
export default StudentCardComponent;
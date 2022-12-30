import "../StudentClasses.css";
import "../../../styles/globals.css";
import React from "react";
import { ClassModelFrontEnd, ClassModel } from "../../../models/classModel";

interface StudentClassProps {
  classData: ClassModel;
  isAddingNewClass: boolean;
  handleClassChange: React.ChangeEventHandler<HTMLElement>;
  handleStatusClick: React.MouseEventHandler<HTMLElement>;
  handleDelete: React.MouseEventHandler<HTMLElement>;
}

const StudentClass: React.FunctionComponent<StudentClassProps> = (props) => {
  return (
    <div className="form-container class-container">
      <form className="class-form">
        <div className="row-container">
          <input
            type="text"
            name="title"
            className="studentClass-text-input title-input"
            placeholder="title"
            defaultValue={props.classData.title}
            onChange={props.handleClassChange}
            size={props.classData.title.length}
            id={props.classData.id}
          />
          <button
            className={`status-button ${props.classData.status}`}
            name="status"
            value={props.classData.status}
            onClick={props.handleStatusClick}
            id={props.classData.id}
          />
        </div>
        <div className="row-container">
          <input
            type="text"
            name="student_name"
            className="studentClass-text-input student-name-input"
            placeholder="student"
            defaultValue={props.classData.student_name}
            size={props.classData.student_name.length}
            id={props.classData.id}
            readOnly
          />
          <select
            name="teacher_name"
            onChange={props.handleClassChange}
            defaultValue={props.classData.teacher_name}
            id={props.classData.id}
          >
            <option value="Elias Rosa"> Elias Rosa</option>
          </select>
        </div>
        <div className="row-container">
          <input
            type="date"
            name="date"
            className="date-input"
            defaultValue={props.classData.frontEnd.dateString}
            onChange={props.handleClassChange}
            id={props.classData.id}
          />

          {props.isAddingNewClass && (
            <select
              name="repeat"
              defaultValue={0}
              onChange={props.handleClassChange}
              id={props.classData.id}
            >
              <option value={0}>repeat</option>
              <option value={1}>1 month</option>
              <option value={2}>2 months</option>
              <option value={3}>3 months</option>
              <option value={6}>6 months</option>
              <option value={12}>12 months</option>
            </select>
          )}

          <select
            name="duration"
            className="duration-input"
            defaultValue={props.classData.duration}
            onChange={props.handleClassChange}
            id={props.classData.id}
          >
            <option value="1h">1h</option>
            <option value="2h">2h</option>
            <option value="3h">3h</option>
          </select>
        </div>
        <div className="row-container">
          <input
            size={10}
            type="text"
            name="time"
            defaultValue={props.classData.time}
            placeholder="7:00 - 21:00"
            onChange={props.handleClassChange}
            id={props.classData.id}
          />
        </div>
        <textarea
          name="description"
          className="textarea-input description-input"
          placeholder="description"
          defaultValue={props.classData.description}
          onChange={props.handleClassChange}
          id={props.classData.id}
        />
        <div className="row-container">
          <input
            type="number"
            name="grade"
            className="studentClass-number-input grade-input"
            placeholder="?"
            defaultValue={props.classData.grade}
            onChange={props.handleClassChange}
            id={props.classData.id}
          />
          <button
            className="-button delete-button"
            onClick={props.handleDelete}
            id={props.classData.id}
          />
        </div>
      </form>
    </div>
  );
};

export default StudentClass;
export { StudentClassProps };

import "./StudentInfo.css";

export function StudentInfo(props) {

  return (
    <span className="student-info-container">
      <span className="student-info-type">
        <b>{props.title}</b>
      </span>

      <span type="text" id="id-input" className="student-info-input">
        {props.fieldValue}
      </span>
    </span>
  );
}

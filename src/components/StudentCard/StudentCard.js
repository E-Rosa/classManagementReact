import '../../styles/globals.css';
import './StudentCard.css';
import {Link} from 'react-router-dom';

function StudentCard(props) {
    function storeStudentID(event){
        window.localStorage.removeItem("studentID");
        window.localStorage.setItem("studentID", props.id);
    }
    return (
        <Link to={`/students/${props.id}`}>
        <section className="student-card-container" onClick={storeStudentID()}>
            <span id='student-card-name'>{props.name}</span>
            <span id="status">{props.status}</span>
            <span id='id'>{props.id}</span>
        </section>
        </Link>
    );
  }

export default StudentCard;
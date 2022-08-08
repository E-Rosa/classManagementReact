import '../../styles/globals.css';
import './StudentCard.css';
import {Link} from 'react-router-dom';

function StudentCard(props) {
    return (
        <Link to={`/students/${props.id}`}>
        <section className="student-card-container" onClick={props.event}>
            <span id='student-card-name'>{props.name}</span>
            <span id="status">{props.status}</span>
            <span id='id'>{props.id}</span>
        </section>
        </Link>
    );
  }

export default StudentCard;
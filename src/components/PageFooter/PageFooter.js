import '../../styles/globals.css';
import './PageFooter.css';
import {Link} from 'react-router-dom';

function PageFooter() {
    return (
    
    <footer id="main-footer">
        <Link to='/'><div id="footer-home-button" className="footer-button"></div></Link>
        <Link to='/students/:id'><div id="footer-students-button" className="footer-button"></div></Link>
        <div id="footer-classes-button" className="footer-button"></div>
        <div id="footer-schedule-button" className="footer-button"></div>
    </footer>  
    
    );
  }

export default PageFooter;
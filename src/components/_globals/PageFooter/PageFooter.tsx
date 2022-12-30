import '../../../styles/globals.css';
import './PageFooter.css';
import {Link} from 'react-router-dom';
import React from 'react';

const PageFooter: React.FunctionComponent = () => {
    return (
    
    <footer id="main-footer">
        <Link to='/'><div id="footer-home-button" className="footer-button"></div></Link>
        <Link to='/students/:id'><div id="footer-students-button" className="footer-button"></div></Link>
        <Link to='/classes/:id'><div id="footer-classes-button" className="footer-button"></div></Link>
        <div id="footer-schedule-button" className="footer-button"></div>
    </footer>  
    
    );
  }

export default PageFooter;
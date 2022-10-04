import React from 'react';
import StudentCard from '../StudentCard/StudentCard';
import '../../styles/globals.css';
import './SearchBar.css';

function SearchBar() {
    const [searchValue, setInput] = React.useState('');
    const [students, setStudents] = React.useState([]);

   
    const studentCards = students.map((student)=>{
                return (
                    <StudentCard
                        key={student.id}
                        name={student.name}
                        id={student.id}
                        status={student.status}
                     />
                )
            });
        
    function handleChange(event){
        setInput(event.target.value);
    };

    React.useEffect(()=>{
        fetch(`http://localhost:5000/api/classManager/students/${searchValue}`)
        .then((res)=>{
            return res.json();
        })
        .then((res)=>{
            setStudents(res);
        }).catch((err)=>{
            console.log('error');
        })
    }, [searchValue]);

    return (
        
        <div id='search-bar-container'>
            <input 
                type="text"
                id="search-bar"
                placeholder="search for a student"
                autoFocus
                onChange={handleChange}
                />
            
            <section id="student-cards-list">
                {studentCards}
            </section>
        </div>
        
    );
  }

  export default SearchBar;
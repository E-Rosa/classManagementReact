import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PageFooter from './components/_globals/PageFooter/PageFooter.js';
import StudentProfile from './components/StudentProfile/StudentProfile';
import StudentClasses from './components/StudentClasses/StudentClasses';
import StudentPayments from './components/StudentPayments/StudentPayments';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <div className='container'>
        <Routes>
            <Route path='/' element={<SearchBar />}/>
            <Route path='/students/:id' element={<StudentProfile />}/>
            <Route path='/students/:id/classes' element={<StudentClasses />}/>
            <Route path='/students/:id/payments' element={<StudentPayments />}/>
        </Routes>
      </div>
      <PageFooter />
    </>
  );
}

export default App;

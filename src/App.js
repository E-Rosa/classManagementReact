import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import PageFooter from './components/PageFooter/PageFooter';
import StudentProfile from './components/StudentProfile/StudentProfile';
import {Route, Routes} from 'react-router-dom';


function App() {
  return (
    <>
      <div id='container'>
        <Routes>
            <Route path='/' element={<SearchBar />}/>
            <Route path='/students/:id' element={<StudentProfile />}/>
        </Routes>
      </div>
      <PageFooter />
    </>
  );
}

export default App;

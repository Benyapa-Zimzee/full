import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import { Component } from 'react';
import{Routes,Route} from 'react-router-dom';
import Menubar from './components/Menubar';
import Home from './components/Home';
import About from './components/About';
import StudentList from './components/StudentList';
import CreateStudent from './components/CreateStudent';
import StudentCard from './components/StudentCard';
import EditStudent from './components/EditStudent';

class App extends Component {
  render(){
    return (
      <>
        <Menubar/>
          <div className='container'>
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/about' element={<About/>} />
              <Route path='/create-student' element={<CreateStudent/>} />
              <Route path='/student-list' element={<StudentList/>} />
              <Route path='/student-card' element={<StudentCard/>} />
              <Route path='/edit-student/:id' element={<EditStudent/>} />
            </Routes>
          </div>
      </>
    );
  }

}

export default App;

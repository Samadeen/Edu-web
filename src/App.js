import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/common/heading/Header';
import About from './components/about/About';
import CoursesHome from './components/allCourses/CoursesHome';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<CoursesHome />} />
      </Routes>
    </>
  );
}

export default App;

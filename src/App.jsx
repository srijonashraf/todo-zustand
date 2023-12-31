import React from 'react';
import CourseForm from './components/CourseForm';
import CourseList from './components/CourseList';

const App = () => {
  return (
    <div className='container'>
      <CourseForm />
      <CourseList />
    </div>
  );
};

export default App;

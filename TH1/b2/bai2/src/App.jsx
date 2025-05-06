import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { courses as dataCourses } from './data'

function App() {
  const [count, setCount] = useState(0)
  const [courses, setCourses] = useState(dataCourses)

  return (
    <>
      <div className="title">
        <h2>Khóa học Sắp Khai Giảng</h2>
      </div>
      <div className='body'>
        {courses.map((course) => (
          <div className='course' key={course.id}>
            <img src={course.image} alt={course.name} />
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p>Giá: {course.price ? course.price.toLocaleString() + ' VNĐ' : 'Liên hệ'}</p>
            <p>Ngày khai giảng: {course.startDate}</p>
            <p>Thời gian học: {course.duration}</p>
          </div>
          ))}
      </div>
    </>
  )
}

export default App

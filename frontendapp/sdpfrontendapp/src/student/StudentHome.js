import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
//import profile from './logo.svg'
import './studentnavbar.css'


export default function StudentHome() {
  return (
    <div>
      

        <ul className='navbar'>
            
<br />
<br /><br /><br />
        <li>
            <Link to="/home">Home</Link>
        </li>
        <li>
            <Link to="/studentprofile">Profile</Link>
        </li>
        <li>
            <Link to="/attendance">Attendance</Link>
        </li>
        <li>
            <Link to="/timetable">Timetable</Link>
        </li>
        <li>
            <Link to="/viewcourses">Courses</Link>
        </li>
        <li>
            <Link to="/results">Results</Link>
        </li>
        <li>
            <Link to="/feedback">Feedback</Link>
        </li>
        <br />
        <br />
        <br />
     
        <br />
        <br />
      
        <br />
       
        <br />
        <li>
            <Link to="/contact">Settings</Link>
        </li>
        <li>
            <Link to="/login">Logout</Link>
        </li>
        
        
        </ul>

       
    </div>
  )
}

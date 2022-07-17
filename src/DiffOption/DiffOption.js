import './DiffOption.css'
import {useNavigate} from 'react-router-dom';
import React from 'react';
function DiffOption() {
  let navigate = useNavigate()
    return (
      <div className="contain">
      <form>
        <div className="Heading"><h1>Welcome, Dr Peters</h1></div>
        <div className = "fRow">
            <button onClick={()=>{navigate('/new')}}>New Patient</button>
            <button onClick={()=>{navigate('/calculate')}}>Quick Calculation</button>
        </div><br/>
        <div className="fRow">
            <button onClick={()=>{navigate('/upload')}}>Bulk Upload</button>
            <button onClick={()=>{navigate('/exist')}}>View existing customers</button>
        </div>
       </form>
      </div>

    );
  }
  
  export default DiffOption;
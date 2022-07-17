import './BMI.css'
import React,{useState} from 'react'
function BMI() {
  const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [total,setTotal] =useState(0)
  
    const submitHandler = e=>{
      e.preventDefault()
      const h = Number(height)
      const w = Number(weight)
      const B = w/(h**2)
      const bmi = parseFloat(B).toFixed(2)
      setTotal(bmi)
    }
  return (
    <div className="container">
        <form onSubmit={submitHandler} className="BMIform">
          <div>
          <label>Height</label>
          <input type="text" onChange={e=>setHeight(e.target.value)} placeholder='meter e.g 1.8m'></input>
          </div>
          <div>
          <label>Weight</label>
          <input type="text" onChange={e=>setWeight(e.target.value)} placeholder ='kilograms e.g 23kg'></input>
          </div>
          <button className='ButtonBMI'>submit</button>
        </form>
        <h1 className='Result'>BMI Reasults: {total}</h1>
    </div>
  );
}

export default BMI;
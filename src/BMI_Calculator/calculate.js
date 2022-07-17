import React,{useState} from 'react';
function Calculate() {
    const [weight,setWeight]=useState(0);
    const [height,setHeight]=useState(0);
    const [total,setTotal] =useState(0)
  
    const submitHandler = e=>{
      e.preventDefault()
      const h = Number(height)
      const w = Number(weight)
      const BMI = w/(h**2)
      const bmi = parseFloat(BMI).toFixed(2)

      setTotal(Math.round(BMI*100)/100)
    }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
          <label>Height</label>
          <input type="text" onChange={e=>setHeight(e.target.value)}></input>
          </div>
          <div>
          <label>Weight</label>
          <input type="text" onChange={e=>setWeight(e.target.value)}></input>
          </div>
          <button>submit</button>
        </form>
        <h1>BMI: {total}</h1>

      </div>
    );
}
  
  export default Calculate;
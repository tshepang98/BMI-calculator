import React from 'react'
import './Login.css'
import {useNavigate} from 'react-router-dom';
function Login() {
  let navigate = useNavigate();
    return(
      <div>
        <form className='formLogin'>
          <h2 className="HEAD">Login</h2>
          <div class="InputLogin">
          <label for="loginUser">User Name</label>
            <input type="text" name="loginUser" id="loginUser" required />
            
          </div>
          <div class="InputLogin">
          <label for="loginPassword">Password</label>
            <input
              type="password"
              name="loginPassword"
              id="loginPassword"
              required
            />
            
          </div>
          <input type="submit" value="Login" class="submit-btn" onClick={()=>{navigate('/options')}}/>
        </form>
      </div>
  );}
  
  export default Login;
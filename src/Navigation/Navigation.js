import React from "react";
import './Navigation.css'
function Navigation() {
    return(
    <div>
     <nav>
     <a href ='/'className="title">BMI Calculator</a>
        <ul>
            <li>
                <a href ='/'>Login</a>
              <a href='/'>SignUp</a>
              <a href='/'>Support</a>
            </li>
       </ul>
    </nav>
    </div>
  );}
  
  export default Navigation;
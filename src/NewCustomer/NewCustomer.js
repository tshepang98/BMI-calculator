import React from 'react';
import "./NewCustomer.css"

function NewCustomer(){
    return(
        <div className='Container'>
        <div>
        <form className='form'>
            <div>
                <label>PATIENT NAME</label>
                <input type ='text'></input>
            </div>
            <div>
                <label>ID/PASSPORT NO</label>
                <input type ='text'></input>
            </div>
            <div>
                <label>HEIGHT</label>
                <input type ='text'></input>
            </div>
            <div>
                <label>MASS</label>
                <input type ='text'></input>
            </div>
            <div className="Button">
                <button type ='submit'>SUBMIT</button>
            </div>
        </form>
        </div>
        </div>
);
    
}
        
export default NewCustomer;
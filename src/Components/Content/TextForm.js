import React, { useState } from 'react'

// pura javascript way
// const HandleupperCase = ()=> {
//     console.log("Upper Case Clicked");
//     document.getElementById("exampleFormControlTextarea1").value = document.getElementById("exampleFormControlTextarea1").value.toUpperCase();
// } 




function TextForm({title="Enter text for activity (Default)"}) {

  const [inputTextvalue, setInputTextValue] = useState("Please Enter the Text");
  const [outputTextvalue, setOutputTextValue] = useState("");
  
  const HandleInputonChange = (event)=> {
    setInputTextValue(event.target.value);
  }

  const HandleUpperCase = ()=> {
    console.log("Upper Case Clicked");
    setOutputTextValue(inputTextvalue.toUpperCase());
  }

  const HandleLowerCase = ()=> {
    console.log("Lower Case Clicked");
    setOutputTextValue(inputTextvalue.toLowerCase());
  }

  const HandleOutputonChange = ()=> {}

  return (
        <div className="form-group my-3">
            <h1>{title}</h1>
            <textarea className="form-control my-3" value={inputTextvalue} onChange={HandleInputonChange} id="InputTextBox" rows="8"></textarea>
            <button className="btn btn-primary mx-1" onClick={HandleUpperCase}>Upper Case</button>
            <button className="btn btn-primary mx-1" onClick={HandleLowerCase}>Lowe Case</button>
            <div className='my-3'>
                <h1>Your Text Summary</h1>
                <p>Words - {inputTextvalue.split(" ").length} , Characters - {inputTextvalue.length}, Reading Minutes - {0.008 * inputTextvalue.split(" ").length}</p>
            </div>
            <div>
                <h1>OutPut</h1>
                <textarea className="form-control my-3" value={outputTextvalue} onChange={HandleOutputonChange} id="OutputTextBox" rows="8"></textarea>
            </div>
        </div>
  )
}

export default TextForm
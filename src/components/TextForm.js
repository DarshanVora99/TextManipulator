import React , {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
    // text = "Creator Darshan Vora"  will not work 
    // setText("Creator Darshan Vora") // correct way to change the state
    
    const handleUpClick =()=>{
        // console.log("Handle upper case button was clicked " + text)
        setText(text.toUpperCase())   
    }
    const handleLoClick =()=>{
        
        setText(text.toLowerCase())   
    }
    const handleOnChange = (event)=>{
        console.log("on change")  
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        setText("")
    }
    const handleCapitalizedClick = ()=>{
        
        let text_arr = text.split(" ")
        for (let index = 0; index < text_arr.length; index++) {
            if(text_arr[index] != "")
            {text_arr[index] = text_arr[index].toLowerCase()
            text_arr[index] = text_arr[index][0].toUpperCase() + text_arr[index].slice(1);}
        }
        let newString = text_arr.toString();
        newString = newString.replaceAll(",", " ")
        setText(newString)
        
    }

    const handleCopyClick= ()=>{
        let text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
       
        
    }

    
  return (

    <>
    <div className="container my-4">
        <h2>{props.heading}</h2>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value = {text} onChange={handleOnChange} rows="8"></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Capitalized Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>

    </div>

    <div className="container my-4">
        <h2>Your text summary </h2>
        <p> {text.length == 0 ? 0:text.split(" ").length} words {text.length} characters</p>
        <p>{text.length == 0 ? 0:(text.split(" ").length)*0.08} min required to read above text</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>


    </>
    
    
  )
}

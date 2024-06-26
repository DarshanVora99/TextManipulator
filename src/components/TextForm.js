import React , {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState("");
   
    
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
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    
  return (

    <>
    <div className="container my-4" style={{ color:props.mode === 'light'? 'light' : '#121212'}} >
        
        <div className="mb-3">
        <textarea className='form-control' id="myBox" value = {text} onChange={handleOnChange} rows="8"
        style={{
            backgroundColor: props.mode === 'light' ? 'white' : '#121212',
            color: props.mode === 'light' ? '#121212' : 'white'
          }}
        ></textarea>
        </div>

        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleCapitalizedClick}>Capitalized Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear</button>

        

<button type="submit" onClick={speak} className="btn btn-primary mx-2 my-2">Speak</button>

    </div>

    <div className="container my-4" style={{ color:props.mode === 'light'? '#121212' : 'white'}}>
        <h2 className={`${(props.mode) === 'light'? '#121212' : 'light'}`}>Your text summary </h2>
        <p> {text.length === 0 ? 0:text.split(" ").length} words {text.length} characters</p>
        <p>{text.length === 0 ? 0:(text.split(" ").length)*0.08} min required to read above text</p>

        <h2>Preview</h2>
        <p>{text}</p>
    </div>


    </>
    
    
  )
}

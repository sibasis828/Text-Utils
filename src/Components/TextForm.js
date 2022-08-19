import React,{useState} from 'react'

export default function TextForm(props) {

   const handleUpClick=()=>{
//console.log("Upper case was clicked"+ text );
let newText=text.toUpperCase();
setText(newText)
props.showAlert('UpperCase is Enabled','success')
    }

  const handleLoClick=()=>{
let newText=text.toLowerCase();
setText(newText)
props.showAlert('LowerCase is Enabled','success')
}

  const  handleOnChange=(event)=>{
//console.log("On Change")
setText(event.target.value)
    }

  const handleClear=()=>{
setText("");
props.showAlert('Text is Cleared','success')
  }  

    const [text, setText] = useState("");

    return (
    <>
   
<div className="container" style={{color: props.mode==='light'?'black':'white'}}>
<h1>{props.heading}</h1>
 <div className='mb-3'>
  <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="7" style={{backgroundColor: props.mode==='dark'?'#434a50':'white',
    color: props.mode==='dark'?'white':'black'}}></textarea>
</div>

    <button className="btn btn-secondary" onClick={handleUpClick} >Convert to Uppercase</button>
    <button className="btn btn-success mx-2" onClick={handleLoClick}> Convert to Lowercase</button>  
    <button className="btn btn-danger mx-4" onClick={handleClear}>Clear</button>  
    </div>

    <div className={`container my-3 text-${props.mode==='light'?'dark':'light'}`}>
    <h3>Your Text Summary</h3>
    <p>{text==="" ? 0:text.split(" ").length} words and {text.length} characters</p>
    <p>Average Time required to read {0.08*text.split(" ").length} min</p>
    </div>  
     
    <div className={`container my-2 text-${props.mode==='light'?'dark':'light'}`}>
    <h3>Text Preview</h3>
    <p>{text}</p>
    </div>  
    
    </> 
  )
}


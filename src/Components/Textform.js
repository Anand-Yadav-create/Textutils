import React,{useState} from 'react'



export default function Textform(props) {

    const handleonchange = (event)=>{
        setText(event.target.value);

    }
    const handleupclick= ()=>{
       let newtext=text.toUpperCase();
       setText(newtext);
       props.showalert("Converted to UpperCase","Success");
    }
    const handletolowerclick= ()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
        props.showalert("Converted to LowerCase","Success");
     }
    const handleclearclick=()=>{
      setText('');
      props.showalert("Clear text","Success");

    }
    const handlecopyclick=()=>{
      var text=document.getElementById("mybox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showalert("Copied Text","Success");
    }

    const handleextraclick=()=>{
      let newtext=text.split(/[ ]+/);
      setText(newtext.join(" "))
      props.showalert("Extra Space Removed","Success");
    }

    const [text,setText]=useState('');

  return (

    <>
    <div>

  <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>
<div className="mb-3">
  
  <textarea className="form-control" value={text}  onChange={handleonchange} id="mybox" rows="5" style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'black'}}></textarea>
</div>
<button className="btn btn-primary mx-1" onClick={handleupclick}>Convert to UpperCase</button>
<button className="btn btn-primary mx-1" onClick={handletolowerclick}>Convert to LowerCase</button>
<button className="btn btn-primary mx-1" onClick={handleclearclick}>Clear Text</button>
<button className="btn btn-primary mx-1" onClick={handlecopyclick}>Copy Text</button>
<button className="btn btn-primary mx-1" onClick={handleextraclick}>Remove Extra Space from Text</button>
      
    </div>

    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
    <h2>Text Summary</h2>
    <p>{text.split(" ").length} words && {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes Read</p>

    <h2>Preview</h2>
    <p>{text.length>0?text:'Enter the text to Preview it'}</p>
    </div>

    </>
  )
}

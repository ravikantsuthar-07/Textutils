import React, {useState} from 'react'



export default function TextForm(props) {
    const handlerUpClick = ()=>{
        let newText = Text.toUpperCase();
        setText(newText);
        console.log("Uppercase is clicked   " + Text);
    }

    const handlerOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }

    const [Text, setText] = useState('Enter the text here');

    return (
        <>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={Text} onChange={handlerOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handlerUpClick}>Convert to Uppercase</button>
        </>
    )
}

import React, { useState } from 'react'



export default function TextForm(props) {
    const handlerUpClick = () => {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase! ", "success");
    }

    const handlerLoClick = () => {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase! ", "success");
    }
    
    const handlerClearClick = () => {
        let newText = '';
        setText(newText);
    }

    const handlerOnChange = (event) => {
        setText(event.target.value);
    }

    const [Text, setText] = useState('');

    return (
        <>
            <div className="container" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'black'}} value={Text} onChange={handlerOnChange} id="exampleFormControlTextarea1" rows="8"></textarea>
                </div>
                <button disabled={Text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handlerUpClick}>Convert to Uppercase</button>
                <button disabled={Text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handlerLoClick}>Convert to Lowercase</button>
                <button disabled={Text.length === 0}  className="btn btn-primary mx-1 my-1" onClick={handlerClearClick}>Clear</button>

            </div>
            <div className="container my-3" style={{color: props.mode === 'dark'?'white':'black'}}>
                <h1>Your Text Summary</h1>
                <p>{Text.split(" ").filter((element) => {return element.length!==0}).length} Words and {Text.length } Charcters</p>
                <p>{0.008 * Text.split(" ").filter((element) => {return element.length!==0}).length} Minutes</p>
                <h2>Preveiws</h2>
                <p>{Text.length>0?Text:"Enter something to preview it here "}</p>
            </div>
        </>
    )
}

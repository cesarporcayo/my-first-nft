import React, {useState} from "react";
import { SketchPicker } from "react-color";
import Canvas from "./Canvas";
import image from "../img/scribbles-title.png"

function Editor() {
    const [canvasWidth, setCanvasWidth] = useState(16)
    const [canvasHeight, setCanvasHeight] = useState(16)
    const [hideOptions, setHideOptions] = useState(false)
    const [hideCanvas, setHideCanvas] = useState(true)
    const [buttonText, setButtonText] = useState("Let's Draw!")
    const [paintColor, setPaintColor] = useState("#ffffff")

    function changeColor(color) {
        setPaintColor(color.hex)
    }

    function initializeCanvas() {
        setHideOptions(() => (!hideOptions))
        setHideCanvas(() => (!hideCanvas))

        buttonText == "Let's Draw!" ? setButtonText("Start Over") : setButtonText("Let's Draw!")
    }
    return (
        <main>
            <header>
                {/* <img className="img-title" src={image}></img> */}
                <div className="title">
                    <h1 className="letter" style={{color: "red"}}>"My  </h1> 
                    <h1 className="letter" style={{color: "orange"}}>Fir</h1>
                    <h1 className="letter" style={{color: "blue"}}>st  </h1>
                    <h1 className="letter" style={{color: "green"}}>NF</h1>
                    <h1 className="letter" style={{color: "#FFE300"}}>T"</h1>

                </div>
            </header>
            {/* {hideCanvas && <h2>Select a Canvas Size:</h2>} */}
            {hideCanvas && (<div id="options">
                <h2>Select a Canvas Size:</h2>
                <div className="option">
                    <input 
                    type="radio" 
                    className="canvasInput" 
                    name="size"
                    value={8}
                    onChange={(e) => {
                        setCanvasWidth(e.target.value)
                        setCanvasHeight(e.target.value)
                    }}
                    /> 8x8
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        className="canvasInput" 
                        name="size"
                        value={16}
                        onChange={(e) => {
                            setCanvasWidth(e.target.value)
                            setCanvasHeight(e.target.value)
                        }}
                    /> 16x16
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        className="canvasInput" 
                        name="size"
                        value={32}
                        onChange={(e) => {
                            setCanvasWidth(e.target.value)
                            setCanvasHeight(e.target.value)
                        }}
                    /> 32x32
                </div>
                <div className="option">
                    <input 
                        type="radio" 
                        className="canvasInput" 
                        name="size"
                        value={64}
                        onChange={(e) => {
                            setCanvasWidth(e.target.value)
                            setCanvasHeight(e.target.value)
                        }}
                    /> 64x64
                </div>
            </div>)}
            
            
            
            <div id="editor">
                {hideOptions && <SketchPicker id="palette" color={paintColor} onChangeComplete={changeColor}/>}
                {hideOptions && <Canvas width={canvasWidth} height={canvasHeight} paintColor={paintColor}/>}
            </div>
            
            <button onClick={initializeCanvas}>{buttonText}</button>

        </main>
    )
}

export default Editor;
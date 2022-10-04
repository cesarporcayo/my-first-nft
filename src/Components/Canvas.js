import React, {useRef} from "react";
import Row from "./Row";
import '../styles/style.css';
import {exportComponentAsPNG} from "react-component-export-image"

function Canvas(props) {
    const {width, height, paintColor} = props;
    const canvasRef = useRef()
    let rows = [];


    for (let i = 0; i < height; i++) {
        rows.push(<Row key={i} width={width} paintColor={paintColor}/>);
    }
    return (
        <div id="canvas-container">
            <div id="canvas" ref={canvasRef}>
                {rows} 
            </div>
            <button id="export-button" onClick={() => (exportComponentAsPNG(canvasRef))}>Export as PNG</button>
        </div>
        
    )
}


export default Canvas;
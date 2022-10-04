import React from "react";
import Pixel from "./Pixel";

function Row(props) {
    const {width, paintColor} = props;
    let pixels = []
    const rowHeight = 500/width
    for (let i=0; i < width; i++) {
        pixels.push(<Pixel key={i} pixelsPerRow={width} paintColor={paintColor}/>)
    }
    return (
        <div className="row" style={{maxHeight: rowHeight}} >  
            {pixels} 
        </div>
    )
}

export default Row;
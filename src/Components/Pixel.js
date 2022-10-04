import React, {useState} from "react";

function Pixel(props) {

    const {paintColor, pixelsPerRow} = props;

    const [pixelColor, setPixelColor] = useState("#ffffff");
    const [prevColor, setPrevColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const pixelSize = 500 / pixelsPerRow;

    function changeColor() {
        // if (isMouseDown) {
            setPixelColor(paintColor)
        // }
        

    }
    return (
        <div className="pixel" style={{backgroundColor: pixelColor, width: pixelSize}}
            // onMouseDown={setIsMouseDown(true)}
            // onMouseUp={setIsMouseDown(false)}
            onMouseOver={changeColor}
        >
            
        </div>
    )
}

export default Pixel;
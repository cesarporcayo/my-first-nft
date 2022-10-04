import React, {useState} from "react"

export default function Landing(props) {
    return (
        <div>
            <h1 id="title">"My First NFT"</h1>
            <h2>Enter Canvas Size:</h2>
            <div className="options">
                <input 
                type="number" 
                className="canvasInput" 
                defaultValue="16" 
                // onChange={} 
                />
            </div>
            <span>Width</span>
            <div className="options">
                <input 
                type="number" 
                className="canvasInput" 
                defaultValue="16" 
                // onChange={} 
                />
            </div>
            <span>Height</span>
            <button>Lets Draw!</button>
        </div>
    )
}
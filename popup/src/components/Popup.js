import React, { useState, useRef } from "react";
import { useEffect } from "react";

export default function Popup(props) {
  const { onClick, popStatus } = props
  const [classPop, setClassPop] = useState("popup-fixed")
  const inputRef = useRef(null)

  useEffect(() => {
    inputRef.current.focus()
    
  }, [popStatus])

  return (
    <div className={popStatus ? 'popup-fixed' : 'popup-fixed popup-fixed-hide'}>
      <div className="popup">
        <div className="popup-header">
          <h5>Basic Modal</h5>
          <span onClick={onClick}>x</span>
        </div>
        <div className="popup-content">
        <input ref={inputRef} placeholder="Input"></input>
        
        </div>
        <div className="popup-footer">
          <button onClick={onClick}>Cancel</button>
          <button onClick={onClick}>OK</button>
        </div>
      </div>
    </div>
  );
}

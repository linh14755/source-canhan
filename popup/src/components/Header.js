import React from "react"


export default function Header(props) {
  const {onClick} = props
  return (
    <div className="header">
      <button onClick={onClick}>
        Click me !
      </button>
    </div>
  );
}

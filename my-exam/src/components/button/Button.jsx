// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import "./button.css"

function Button() {
  const [text, setText] = useState("Vehicle")
  return (
    <button>{text}</button>
  )
}

export default Button
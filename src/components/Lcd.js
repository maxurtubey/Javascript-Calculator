import React from "react";

export default function Lcd({ expLine, resol }) {

  return (
    <div id='lcd'>
      <h5 id='ecuacion'>{expLine}</h5>
      <h1 id='display'>{resol}</h1>
    </div>
  )
}
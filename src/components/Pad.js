import React from "react";

export default function Pad({ ident, tipo, content, actLine, agregar, setResultado, resol }) {

  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
  let multdiv = ['*', '/'];
  let addsubst = ['+', '-'];

  function leAgrega(content) { // add a single character to the array
    let nactLine = [...actLine]
    actLine = [...nactLine, content];
    agregar(actLine);
  }
  function borrarExp() {
    actLine = [];
    agregar(actLine); //erase the expression line
  }

  let last = actLine[actLine.length - 1]

  function agregarSi() {
    if (last === '_' && actLine.length === 1) { // erase the cursor of the expression line
      borrarExp();
    }
    if (last === '=') { // erase the previous operation
      borrarExp();
      setResultado(0);
    }
    for (let i = 0; i < numbers.length; i++) {
      if (content === numbers[i]) {
        leAgrega(content);
      }
    }
    //----------------------------------
    for (let i = 0; i < multdiv.length; i++) { // inserts the multiply and divide operators characters
      // if (content === multdiv[i] && last === '+' || content === multdiv[i] && last === '-') {
      //   setResultado(0);
      // } else 
      if (content === multdiv[i] && last === '+') { //not an elegant solution
        actLine.pop();
        leAgrega(content);
      } else if (content === multdiv[i] && last === '-') { //not an elegant solution
        actLine.pop();
        leAgrega(content);
      } else if (content === multdiv[i] && last === '_') {
        leAgrega('_');
        setResultado(0);
      } else if (content === multdiv[i] && resol !== 0) {
        leAgrega(resol);
        leAgrega(content);
      } else if (content === multdiv[i] && last !== '') {
        leAgrega(content);
      } 
    }
    //----------------------------------
    for (let i = 0; i < addsubst.length; i++) { // inserts the 'add' and 'substract' characters
      if (content === addsubst[i] && resol !== 0) {
        leAgrega(resol);
        leAgrega(content);
      } else if (content === addsubst[i]) {
        leAgrega(content);
      }
    }
    if (content === '0' && actLine.length > 0) { //add the 'zero' number
      leAgrega(content);
    }
    if (content === '.') { //add the 'dot' character
      leAgrega(content);
    }
    if (content === 'AC') {
      borrarExp();
      agregar(['_']);
      setResultado(0);
    }
    if (content === '=') {
      let paraResultado = actLine.join('');
      leAgrega(content);
      agregar(actLine);
      setResultado(eval(paraResultado));
      // let rr = eval(paraResultado);
      // setResultado(rr.toFixed(1)) 
    }
  }

  return (
    <button id={ident} className={tipo} onClick={() => agregarSi()}>{content} </button>
  );
}
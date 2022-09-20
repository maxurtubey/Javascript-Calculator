import React, { useState } from "react";
import Lcd from "./Lcd";
import Pad from "./Pad";

export default function Calculator() {

  const [arrLine, updateLine] = useState(['_'])
  const [result, setResult] = useState(0)

  return (
    <div id='calculator' className='container'>
      <div className="row brand"><h5>JS - Calculator</h5></div>
      <Lcd expLine={arrLine} resol={result} setResult={setResult} /> {/* LCD display */}
      <div id='keyboard' className='container pink'> {/* KEYBoard */}
        <div className="row">
          <div className="col">
            <Pad tipo={'singlePadRed'} ident={'clear'} content={'AC'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad oper'} ident={'divide'} content={'/'} actLine={arrLine} agregar={updateLine} setResultado={setResult} resol={result} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad oper'} ident={'multiply'} content={'*'} actLine={arrLine} agregar={updateLine} setResultado={setResult} resol={result} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad oper'} ident={'subtract'} content={'-'} actLine={arrLine} agregar={updateLine} setResultado={setResult} resol={result} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <Pad tipo={'singlePad'} ident={'seven'} content={'7'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'eight'} content={'8'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'nine'} content={'9'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'doublePad oper'} ident={'add'} content={'+'} actLine={arrLine} agregar={updateLine} setResultado={setResult} resol={result} />
          </div>
        </div>
        <div className="row up">
          <div className="col">
            <Pad tipo={'singlePad'} ident={'four'} content={'4'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'five'} content={'5'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'six'} content={'6'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col under"></div>
        </div>
        <div className="row">
          <div className="col">
            <Pad tipo={'singlePad'} ident={'one'} content={'1'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'two'} content={'2'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'three'} content={'3'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'doublePad oper'} ident={'equal'} content={'='} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
        </div>
        <div className="row up">
          <div className="col">
            <Pad tipo={'doublePadh'} ident={'zero'} content={'0'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col">
            <Pad tipo={'singlePad'} ident={'decimal'} content={'.'} actLine={arrLine} agregar={updateLine} setResultado={setResult} />
          </div>
          <div className="col under"></div>
        </div>
      </div>
    </div>
  );
}
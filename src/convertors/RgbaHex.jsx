import React, { useState } from 'react'
import $ from 'jquery'

function RgbaHex() {
    const [rValue , setRValue] = useState(0)
    const [gValue , setGValue] = useState(0)
    const [bValue , setBValue] = useState(0)
    const [a , setA] = useState(0)
    const [hexCol , setHexCol] = useState('')
    const [rgbCol , setRgbCol] = useState('')
   

    const rgbCopy = (rgbCol) => {
        navigator.clipboard.writeText(rgbCol);
    }
    const hexCopy = (hexCol) => {
        navigator.clipboard.writeText(hexCol);
    }

    function colorAlphaAdjusted (color,a){
        return color * a + 255 * ( 1 - a )
    }

    function rgbaToRgb(r,g,b,a){
        return [colorAlphaAdjusted(r,a ) , colorAlphaAdjusted(g,a) , colorAlphaAdjusted(b,a)]
    }

    function componentToHex(color){

        let hex = color.toString(16)
        return hex.length === 1 ? "0"+hex : hex
    }

    function convert(){

    
     const aValue = a / 100 

     const [r ,g ,b ] = rgbaToRgb(rValue, gValue ,bValue, aValue) 
  
     const result = "#" + componentToHex(Math.round(r)) + componentToHex(Math.round(g)) + componentToHex(Math.round(b))
    
     setHexCol( result )
     setRgbCol( "( " +  Math.floor(r) + " , " +Math.floor(g)+ " , " + Math.floor(b)  + " )");
    }


  return (
    <div className='bg-white mx-4 mt-4 dark:bg-black-dark dark:text-black font-extrabold rounded-md'>
        <h2 className="py-4 text-center text-black-dark leading-relaxed  dark:text-white-text font-extrabold">RGBA to Hex </h2>
        <div className=' flex  gap-3 px-3 ' >
            <div>
            <label htmlFor="" className='dark:text-white-text'>Red</label>
            <input   type="number" className=' red w-full  first-letter:text-green-dark py-1 rounded px-2 focus:outline-green-dark bg-gray-dark' name="" id="red" onChange={(event)=> setRValue(Math.max(0, Math.min(255, parseInt(event.target.value))))} max={255} value={rValue}  />
            </div> 
            <div>
            <label htmlFor="" className='dark:text-white-text'>Blue</label>
            <input  type="number" className='w-full py-1 rounded px-2 focus:outline-green-dark bg-gray-dark' name="" id="green" onChange={(event)=> setGValue(Math.max(0, Math.min(255, parseInt(event.target.value))))}  value={gValue} />
            </div>
            <div>
            <label htmlFor="" className='dark:text-white-text'>Green</label>
            <input  type="number" className='w-full py-1 rounded px-2 focus:outline-green-dark bg-gray-dark' name="" id="blue" onChange={(event)=> setBValue(Math.max(0, Math.min(255, parseInt(event.target.value))))} value={bValue}/>
            </div>
            <div>
            <label htmlFor="" className='dark:text-white-text'>Alpha</label>
            <input type="number" className='w-full py-1 rounded px-2 focus:outline-green-dark bg-gray-dark' name="" id="alpha" onChange={(event)=> setA(Math.max(0, Math.min(100, parseInt(event.target.value))))}  value={a}  />
            </div>
            
            <input type="submit" className='w-full -py-2  rounded px-2 focus:outline-green-dark bg-green-light ' value="Calculate"  onClick={convert} />
        </div>
        <div className='bg-slate-dark w-full pt-4 my-4 py-8 mx-2 px-3 rounded flex flex-col dark:bg-[#e2e1]'>
           
            <div className='w-full flex gap-2 items-center pb-2 '>
            <label htmlFor="" className='mb-2 dark:text-white-text'> RGB </label>
            <input type="text" className="result w-full px-3 py-2 rounded  focus:outline-green-light  bg-slate-light"  value={rgbCol} disabled />
            <button className={`absolute right-7 hover:text-green-light `} onClick={rgbCopy(rgbCol)}>copy</button>
            </div>

            <div className='w-full flex gap-2 items-center '>
            <label htmlFor="" className='mt-2 dark:text-white-text'> HEX </label>
            <input type="text" className='py-2  px-3 w-full rounded mt-2 focus:outline-green-dark bg-slate-light' value={hexCol}  disabled/>
            <button className={`absolute right-7 hover:text-green-light `} onClick={hexCopy(hexCol)}>copy</button>
            </div>
        </div>
    </div>
  )

  
}

export default RgbaHex
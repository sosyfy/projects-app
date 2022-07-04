import React from 'react'
import CodePen from '../codepen/CodePen'
// import CurrencyConvertor from './CurrencyConvertor'
import RgbaHex from './RgbaHex'
import WeightConvertor from './WeightConvertor'

function Convertors() {
  return (
    <div>
        <div className="grid sm:grid-cols-2  max-w-[100rem]" >
         <WeightConvertor />
         <RgbaHex /> 
        </div>
    </div>
  )
}

export default Convertors
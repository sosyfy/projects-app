import React from 'react'
import RgbaHex from './RgbaHex'
import WeightConvertor from './WeightConvertor'

function Convertors() {
  return (
    <div>
        <div className="grid sm:grid-cols-2" >

         <WeightConvertor />
         <RgbaHex />  
        </div>
    </div>
  )
}

export default Convertors
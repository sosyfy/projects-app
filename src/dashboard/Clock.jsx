import React, { useState } from 'react'


function  Clock () {

  function setClock(){
   const date = new Date()
   const hours = ((date.getHours() + 11) % 12 + 1 )
   const minutes = date.getMinutes()
   const seconds = date.getSeconds()
   const hour = hours * 30 
   const minute = minutes * 6 
   const second = seconds * 6 
   const h = (hours < 10 ) ? "0" + 10 : hours 
   const m = (minutes < 10 ) ? "0" + minutes : minutes
  }


  return (
    <div className='w-32 h-40 bg-slate-dark relative flex flex-col '>
        <div className="top-menu" >
            <h3 className='hours'>friday jan 2021 </h3>

        </div>
        <div className="clock ">
            <div className="relative overflow-hidden w-28 h-28 rounded-full mt-4 ">
                <span className='hour absolute h-12 w-3 m-auto bg-white bottom-0 left-0 right-0 rotate-0 z-10  shadow-sm  -top-[27%]'></span>
                <span className='minute absolute h-12 w-3 m-auto bg-white bottom-0 left-0 right-0 rotate-90 z-10  shadow-sm -top-[38%] '></span>
                <span className='second minute absolute h-12 w-3 m-auto bg-red rotate-[100deg]  bottom-0 left-0 right-0  z-10  shadow-sm  -top-[27%]'></span>
                <span className='dot absolute h-3 w-3 m-auto bg-black rounded-full  bottom-0 left-0 right-0 rotate-90 z-10  shadow-sm '></span>
            </div>
        </div>
    </div>
  )
}

export default Clock
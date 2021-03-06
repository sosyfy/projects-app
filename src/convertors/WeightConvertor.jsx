import React, { useEffect, useState } from 'react'

function WeightConvertor() {
    const [weight , setWeight] = useState('')
    const [pounds , setPounds] = useState(0)
    const [grams , setGrams] = useState(0)
    const [Ounces  , setOunces] = useState(0)
    const [Convert  , setConvert ] = useState(false)
    
    useEffect(()=> {
       setOunces(()=> (weight* 2.2046).toFixed(2))
       setGrams(()=> (weight* 1000).toFixed(2))
       setPounds(()=> (weight* 35.274).toFixed(2))
    } ,[weight])

   const submit = (e) => {
    e.preventDefault()
    setConvert(true)    
   }
  return (
    <div className='p-4 sm:ml-6 mx-4 mt-4 rounded-md flex  flex-col items-start bg-white dark:bg-dark-primary'>
        <h2 className="py-2 text-xl text-center mx-auto sm:mx-0 text-black-dark dark:text-white-text font-extrabold">Weight Convertor </h2>
        <p className='capitalize font-semibold'> weight in kgs</p>
        <form className=' flex w-full  mb-6 ' onSubmit={ submit}>
            <input type="number" placeholder='Enter kgs' required value={weight} className="outline-none  border-r-0 p-3 px-5   rounded-l-md bg-gray-dark text-black  font-extrabold focus:border-green-light "   onChange={ (event)=> setWeight( parseInt(event.target.value) )}/>
            <input type="submit" value="Convert" className='right-0 outline-none border-none bg-green-light dark:font-extrabold px-4 rounded-r-md text-black text font-bold' />
        </form>

       { Convert  && <div className=' flex flex-col gap-3 w-full'>
            <div className="grams bg-gray-light dark:bg-black-dark   shadow shadow-base-300 px-3 rounded py-1 ">
                <p className="text-black  dark:text-white font-jsans font-bold text-lg">
                    Pounds 
                </p>
                <p className="text-black-light font-nunito dark:text-white-text">
                {parseInt(pounds).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
                
                </div>
            <div className="grams bg-gray-light dark:bg-black-dark  shadow shadow-base-300 px-3 rounded py-1 ">
            <p className=" text-black dark:text-white font-jsans font-bold text-lg">
                    Ounces 
                </p>
                <p className="text-black-light font-nunito dark:text-white-text ">
                {parseInt(Ounces).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
            </div>
            <div className="grams bg-gray-light  dark:bg-black-dark shadow shadow-base-300 px-3 rounded py-1 ">
            <p className="text-black font-jsans dark:text-white font-bold text-lg">
                    Grams
                </p>
                <p className="text-black dark:text-white-text font-nunito">
                {parseInt(grams).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,")}
                </p>
            </div>
        </div> }
    </div>
  )
}

export default WeightConvertor
import Navbar from "./components/navigation/Navbar";
import useStore from "./store/useStore";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from "./dashboard/Dashboard";
import { Component } from "react";
import Convertors from "./convertors/Convertors";
import CodePen from "./codepen/CodePen";
import React , { Suspense , lazy } from 'react'

// const CodePen = lazy(()=> import("./codepen/CodePen"))
// const Dashboard = lazy(()=> import("./dashboard/Dashboard"))
// const Convertors = lazy(()=> import("./convertors/Convertors"))

function App() {
 const  open = useStore((state)=> state.open)
 

  return (
    <BrowserRouter>
      <main className="flex flex-col  sm:flex-row  w-full">
     {/* sidebar   */}
      <Navbar />
     {/* main  */}
        <section className={`${open ? "sm:ml-60" : "sm:ml-20"} pt-9 dark:bg-dark-secondary dark:text-white-text bg-gray-primary text-black  h-screen  sm:pt-0 w-full duration-300 scroll-smooth`}>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
            <Route path="/convertors" element={<Convertors />}/>
            <Route path="/codepen" element={<CodePen />}/>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;

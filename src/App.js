import Navbar from "./components/navigation/Navbar";
import useStore from "./store/useStore";
import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Dashboard from "./dashboard/Dashboard";


function App() {
 const  open = useStore((state)=> state.open)
 

  return (
    <BrowserRouter>
      <main className="flex flex-col sm:flex-row  w-full">
     {/* sidebar   */}
      <Navbar />
     {/* main  */}
        <section className={`${open ? "sm:ml-60" : "sm:ml-20"} pt-9 dark:bg-dark-secondary dark:text-white-text bg-white text-black  h-screen  sm:pt-0 w-full duration-300 scroll-smooth`}>
          <Routes>
            <Route path="/" element={<Dashboard />}/>
          </Routes>
        </section>
      </main>
    </BrowserRouter>
  );
}

export default App;

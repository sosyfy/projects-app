import create from 'zustand'
import navbarSlice from '../components/navigation/navbarSlice'

const useStore = create((set , get)=> ({
  ...navbarSlice(set, get),
  

}))

export default useStore 
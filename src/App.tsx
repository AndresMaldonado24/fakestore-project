import DisplayProducts from "./componets/display/display"
import Navbar from "./componets/navbar/navbar"
import { Routes, Route } from 'react-router-dom'

export default function App() {  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<DisplayProducts/>}/>
        <Route path='/electronics' element={<DisplayProducts filter={'electronics'}/>}/>
        <Route path='/jewelery' element={<DisplayProducts filter={'jewelery'}/>}/>
        <Route path='/clothing' element={<DisplayProducts filter={"clothing"}/>}/>
        <Route path='/clothing/men' element={<DisplayProducts filter={"men's clothing"}/>}/>
        <Route path='/clothing/women' element={<DisplayProducts filter={"women's clothing"}/>}/>
      </Routes>
    </>
  )
}
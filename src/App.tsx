import { BrowserRouter, Route, Routes } from "react-router-dom";
import BasicLayout from "./components/layout/BasicLayout";
import FLayout from "./components/layout/FLayout";
import Test from "./components/layout/Test/Test";
import MainLayout from "./components/MainLayout";

export default function App (){
  return (
   <BrowserRouter>
   <Routes>
      <Route path="" element={<MainLayout/>}>
        
      </Route>
      <Route path="basic-layout" element={<BasicLayout/>}>
      </Route>
      <Route path="f-layout" element={<FLayout/>}></Route>
   </Routes>
   </BrowserRouter>
  )
}
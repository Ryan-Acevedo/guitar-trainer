import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import { useEffect, useState } from 'react';
import Home from "../views/Home";
import PracticeOptions from "../views/PracticeOptions";
import CreatePracticePlan from "../views/CreatePracticePlan";
import UpdatePracticePlan from "../views/UpdatePracticePlan";
import IMETrainer from "../views/IMETrainer";
import './App.css'

function App() {
  
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/practice-options" element={<PracticeOptions />}/>
        <Route path="/practiceplan/create" element={<CreatePracticePlan />}/>
        <Route path="/practiceplan/:id/update" element={<UpdatePracticePlan />}/>
        <Route path="/scales/diatonic/3nps/e" element={<IMETrainer />}/>
      </Routes>
    </BrowserRouter>
    </>
  )

}

export default App

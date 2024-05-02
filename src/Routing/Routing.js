import React from 'react'
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Header from '../Layout/Header';
import Category from '../Components/Category';
import SubCat from '../Components/SubCat';
import SingleProd from '../Components/SingleProd';

const Routing = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<Category />} />
        <Route path="sub/:prod" element={<SubCat />} />
        <Route path="sub/:prod/singleprod/:id" element={<SingleProd />} />
      </Routes>
    </Router>
  );
}

export default Routing
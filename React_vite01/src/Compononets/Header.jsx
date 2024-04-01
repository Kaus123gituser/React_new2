import React from 'react';
import { Route,Routes } from 'react-router';
import Skills from './Skills';
import Projects from './Projects';
import Testimonails from './Testimonals';
import {FaHome} from 'react-icons/fa';

const Header=()=>{

    return(<>
        <FaHome/>
    <Routes>
        <Route path='/' element={<Skills/>}>Skills</Route>
        <Route path='/projects' element={<Projects/>}>Projects</Route>
        <Route path='/testimonals' element={<Testimonails/>}>testimonaials</Route>

    </Routes>
    
    </>);
};

export default Header;
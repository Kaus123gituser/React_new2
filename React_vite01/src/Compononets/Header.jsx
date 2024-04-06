import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Skills from './Skills';
import Projects from './Projects';
import Testimonails from './Testimonals';

const Header = () => {

    return (<>
        <Routes>
            <Route path='/' element={<Skills />}>Skills</Route>
            <Route path='/projects' element={<Projects />}>Projects</Route>
            <Route path='/testimonals' element={<Testimonails />}>testimonaials</Route>

        </Routes>

    </>);
};

export default Header;
import React from 'react';
import { Link } from 'react-router-dom';
import {FaBars} from 'react-icons/fa';

const Nav=()=>{

    return(<>
    <nav className='bg-'>
<div className='container mx-auto flex justify-between items-center px-4'>

    <h1 className='text-white text-x1 font-bold'>Testcode.x</h1>
</div>
    {/* <FaBars/> */}
    {/* code for the navigation links  */}
    <div className='flex space-x-6'>

    <ul className='linkbox absolute top-0 right-0 flex space-x-5s'>
        <Link to='/' className='text-white hover:text-gray-300 px-7 py-2 text-x3'>Skills</Link>
        <Link to='/projects' className='text-white hover:text-gray-300 px-7 py-2'>Projects</Link>
        <Link to='/testimonals' className='text-white hover:text-gray-300 px-7 py-2'> Testimonials</Link>

    </ul>
    </div>

    </nav>
    </>);
};

export default Nav;
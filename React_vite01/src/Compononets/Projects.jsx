import React from 'react';
import img1 from '../assets/project1_photo.jpg';
import img2 from '../assets/project_phot2.jpeg';
import img3 from '../assets/project_photo3.jpeg';
import img4 from '../assets/project_photo_4.jpeg';
import '../Mediaquery.css';

const Projects = () => {


    return (<>
        {/* <h1>My projects</h1> */}
        <div className='bg-indigo-800 m-20 max-w-full'>
            <div className='grid justify-items-center m-10      project_section'>
                <h1 className='text-3xl text-white mt-10'>Project</h1>

            </div>
            <div>
                <div className='grid grid-cols-2 gap-4 p-5 above_section'>
                  <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl hover:animate-pulse   inside_Section'>
                    <div className='md:flex'>
                        <div className='p-8'>
                            <div className='uppercase tracking-wide text-sm to-indigo-500 font-semibold'>
                                web development system
                            </div>
                            <a href='#'>Subheading</a>
                            <p className='mt-2 text-slate-500'>
                                we have distinct and diversified portfolio, regarding the web development 
                            </p>
                        </div>
                        <div>
                            <img src={img1} alt="image 1" width={1350} height={350} />
                        </div>

                    </div>
                  </div>
                </div>
                <hr />
                <div  className='grid grid-cols-2 gap-4 p-5'>

                </div>
            </div>
        </div>
    </>);
};

export default Projects;
import React from 'react';
import {BsFacebook,BsTwitter,BsInstagram,BsYoutube} from 'react-icons/bs';
import img1 from '../assets/new_photo_for_dev.avif'
const Hero=()=>{
    
    return(<>
    <div className='flex  justify-center  items-center  text-white hover:text-gray-300 space-x-4'>
    </div>
        <section className='flex justify-around items-center p-10 space-x-10 lg:flex-row ssm:flex-col ssm:space-y-10 text-white'>
            <div className='lg:w-1/3 ssm:w-fit'>
                <p className='text-4x1 mb-5 text-slate'>I'm</p>
                <h1 className='text=6x1'>Kaustubh saxena</h1>
                <hr />
                <p className='mt-10 text x1 text-slate-300 font-sans'>
                    A Freelancer Developer. Are you in need of a skilled and dedicated freelance web developer to bring your project to life? Look no further! With years of experience in the field, I offer top-notch web development services tailored to meet your specific needs.
                </p>
            </div>
            <div className='w=1/3 items-center ssm:w-fit'>
                <img src={img1} alt="" width={250} height={250}  className='rounded-full w-full border-8 border-white'/>
            </div>
            <div className='w-1/3 ssm:w-fit'>
                <p className='text-4xl mb-4'> About Me</p>
                <p className='text-slate-300'>
                    Let's build quality in programming ad design with our Services 
                </p>
                <button className='bg-white text-indigo-600 px-10 py-2 my-3 rounded-full hover:bg-indigo-800 hover:text-white k'>
                    Show More...
                </button>
                <div>
                    <div className='flex mt-5 space-x-4 cursor-pointer'>
                        
    <BsFacebook className='border-4 hover:border-indigo-800 rounded-full' size={40} />
    <BsTwitter className='border-4 hover:border-indigo-800 rounded-full' size={40}/>
    <BsInstagram className='border-4 hover:border-indigo-800 rounded-full' size={40}/>
    <BsYoutube className='border-4 hover:border-indigo-800 rounded-full' size={40}/>
                    </div>

                </div>
            </div>
        </section>

    {/* <div>Hero</div> */}
    </>);
};

export default Hero;
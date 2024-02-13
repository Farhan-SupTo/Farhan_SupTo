import React from 'react';
import { Link } from 'react-scroll';

//images
 
const Header = () => {
  return (
    <header className="py-5 w-full" id="header">

      <div className="mx-20">
        <div className="flex justify-center md:justify-between items-center align-middle">


        <div className="h-[10vh] w-[20vh] invisible md:visible hover:scale-125 duration-300
          cursor-pointer flex align-middle items-center justify-end">
            <Link to="about"
              activeClass='active' className=''>
                <h2 className='text-gradient btn-link tracking-wider text-xl font-primary font-medium uppercase'>Farhan Supto</h2>
            
            </Link>
          </div>

          {/* {button} */}
          <Link to="contact" activeClass='active'>
            <button className="btn btn-sm md:btn-lg xl:btn-lg
            hover:text-blue-950 hover:shadow-[inset_13rem_0_0_0] hover:shadow-[#A0C1D1] duration-[400ms,700ms]
            transition-[color,box-shadow] border-b-4 border-l-2 shadow-lg border-blue-700">
              Contact Me
            </button>
          </Link>


        

        </div>
      </div>
    </header>
  );
};

export default Header;

//  sign_img_color
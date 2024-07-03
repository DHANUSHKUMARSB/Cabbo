import React from 'react';
import logo from './Images/Logo.png';
import image1 from './Images/Travelling man (1).png';
import image3 from './Images/City.png';
import image2 from './Images/Temple.png';
import highway from './Images/Highway 1.png'; 
import image4 from './Images/Boy.png';
import image5 from './Images/taxi 1.png';

const Navbar = () => {
  return (
    <>
      <nav className="bg-[#3A077D] p-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-5"> {/* Adjust height as needed */}
            <div className="flex items-center">
              <img src={logo} alt="Logo" className="h-8 ml-12" /> {/* Adjust height and ml value as needed */}
            </div>
            <div className="flex items-center space-x-4 ml-[-0.5rem]"> {/* Adjust ml value to move links to the left */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">Home</a> {/* Adjust padding and font size */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">About Us</a> {/* Adjust padding and font size */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">Safety</a> {/* Adjust padding and font size */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">Careers</a> {/* Adjust padding and font size */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">Community</a> {/* Adjust padding and font size */}
              <a href="#" className="text-gray-300 hover:text-yellow-300 px-2 py-1 rounded-md text-xs font-medium">Contact Us</a> {/* Adjust padding and font size */}
            </div>
          </div>
        </div>
      </nav>
      <div className="relative flex justify-between items-start p-6"> {/* Make parent relative and add padding */}
        <img src={image1} alt="Image 1" className="h-[250px] w-[210px] mt-4 ml-3" /> {/* Adjust height and width */}
        <div className="flex flex-col items-start mx-6 mr-[90px] mb-auto absolute top-[3px] left-[350px]"> {/* Center the text and add margin */}
          <h2 className="text-5xl font-bold mb-[3px] text-[#3A077D]">Connecting Cities</h2> {/* Adjust heading styles and text color */}
          <p className="text-lg text-[#B8E010] text-justify max-w-md leading-6">
            We enhance mobility by bridging the transportation gap in 
            <span className="text-[#3A077D]"> Tier 2 and 3 Cities. </span>
            Our extensive network ensures reliable and affordable rides, tailored to meet local needs, making seamless connectivity a reality for everyone.
          </p> {/* Adjust paragraph styles */}
          <button className="bg-[#3A077D] text-white px-6 py-2 rounded-2xl mt-4 ml-20">Download Cabbo</button> {/* Button styles */}
        </div>
        <img src={image2} alt="Image 2" className="h-[385px] w-[315px] ml-4 mt-0" /> {/* Adjust height, width, and margin-left */}
      </div>
      <div>
        <img src={highway} alt="Highway" className="absolute bottom-0 ml-[415px] w-[566px] mb-[50px] h-[290px]" /> 
      </div> 
      <div>
        <img src={image3} alt="image3" className="absolute top-[335px] left-0 h-[240px] w-[1330px]" />
      </div>
      <div>
        <img src={image4} alt="image4" className="absolute w-[150px] h-[170px] top-0 right-[390px] mt-[200px]" />
      </div>
      <div>
        <img src={image5} alt="image5" className="absolute w-[155px] h-[170px] top-0 right-[305px] mt-[360px] origin-bottom -rotate-12 " />
      </div>
    </>
  );
};

export default Navbar;

import React from 'react'
import discordlogo from '../images/discordlogo.png'



function Navbar() {

  const hello = () => {
    console.log("hello");
  };

  return (
    <div>
      <div className="h-4/5 w-auto bg-primary">
        <ul className=" justify-end p-1 px-4 hidden">
          <li className="mx-2 cursor-pointer hover:">home</li>
          <li className="mx-2"></li>
          <li className="mx-2">home</li>
          <li className="mx-2">home</li>
        </ul>
        <div className="flex justify-between p-2 px-4">
          <div className='flex p-2 px-4'>
            <img src={discordlogo} alt="logo" className="h-7 w-7 "></img>
            <p className='text-white text-lg font-bold px-1'>Discord</p>
          </div>

          <ul className="flex justify-end p-2 px-4 space-x-4">
            <button className="bg-white rounded-xl w-12 h-8">Login</button>
            <div className="flex flex-col space-y-1 p-2" onClick={hello}>
              <div className="h-1 w-6 bg-white rounded-sm "></div>
              <div className="h-1 w-6 bg-white rounded-sm"></div>
              <div className="h-1 w-6 bg-white rounded-sm"></div>
            </div>
          </ul>
        </div>
      </div>

      <div className="h-96 w-full bg-primary"></div>
    </div>
  );
}

export default Navbar
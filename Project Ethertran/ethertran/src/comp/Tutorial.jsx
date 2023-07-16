import React from "react";
import logo from "../../images/connet.png";
import logo1 from "../../images/info.png";
import logo2 from "../../images/send.png";




const ServiceCard4 = ({ title, icon, subtitle }) => (
  <div className="flex-col  m-2 p-5 items-center justify-center flex Tutorial"  data-aos="fade-down" data-aos-duration="500" >
    
        <div className={`w-30 h-52 rounded-full flex justify-center items-center`}>{icon}
         </div>
            <div className="ml-1 flex flex-col flex-1 text-center md:w-9/12" >

                <h3 className="mt-2 text-white text-lg ">{title}</h3>

                <p className="mt-2 text-white text-sm p-2">{subtitle}</p>
        </div>
  </div>
);

const ServiceCard5 = ({title, icon, subtitle }) => (
  <div className="flex-col  m-2 p-5 items-center justify-center flex Tutorial" data-aos="fade-down" data-aos-duration="1000" >
    
        <div className={`w-30 h-52 rounded-full flex justify-center items-center`}>{icon}
         </div>
            <div className="ml-1 flex flex-col flex-1 text-center md:w-9/12" >

                <h3 className="mt-2 text-white text-lg ">{title}</h3>

                <p className="mt-2 text-white text-sm p-2">{subtitle}</p>
        </div>
  </div>
);

const ServiceCard6 = ({title, icon, subtitle }) => (
  <div className="flex-col  m-2 p-5 items-center justify-center flex Tutorial" data-aos="fade-down" data-aos-duration="1000" >
    
        <div className={`w-30 h-52 rounded-full flex justify-center items-center`}>{icon}
         </div>
            <div className="ml-1 flex flex-col flex-1 text-center md:w-9/12" >

                <h3 className="mt-2 text-white text-lg ">{title}</h3>

                <p className="mt-2 text-white text-sm p-2">{subtitle}</p>
        </div>
  </div>
);

const Tutorial = () => (

  <div className="flex w-full justify-center items-center" id="Tutorial">
    <div className="flex mf:flex-col flex-col items-center justify-between md:p-10 py-12 px-4">
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-white text-5xl sm:text-1xl py-2 text-logo text-center">
            Tutorial
        </h1>
        <p className=" my-2 text-white font-light md:w-9/12 w-11/12 text-base text-center">
          3 easily step to send your ethereum across the world
        </p>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center  mf:flex-row m-5">
        <ServiceCard4
          icon={<img src={logo}  />}
          subtitle="Connect with your metamask by pressing connect wallet. "
        />
        <ServiceCard5
            icon={<img src={logo1}  />}
            subtitle="fill in the receiver address, amount and leave a message. "
        />
        <ServiceCard6
          icon={<img src={logo2}  />}
          subtitle="Click the bottom Send now to send your Ethereum and wait."
        />
      </div>

    </div>

  </div>
);

export default Tutorial;
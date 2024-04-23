import React from 'react';
import { ReactTyped } from "react-typed";
import heroImage from '../assets/hero-bg-img.png';

export default function Herosection1() {
    return (
        <div className={`Herosection1 w-full h-fit lg:h-full mt-20 lg:mt-0 min-h-[823px] bg-white md:flex justify-evenly items-center bg-gradient-to-r from-violet-200 to-pink-200`}>
            <div className="hero1-content text-black w-fit h-fit z-10 flex items-center justify-center">
                <div className="w-fit text-center">
                    <div className="nav-logo text-4xl pt-10 lg:pt-0 lg:text-6xl md:text-2xl text-center font-bold flex items-center justify-center lg:justify-start w-full font-serif underline">
                        <span className="nav-logo-content text-red-700">Query</span>
                        <span className="nav-logo-content text-blue-700">Quest</span>
                    </div>
                    <div className="lg:text-3xl md:text-2xl text-xl text-black text-center lg:text-justify w-full max-w-[800px] font-bold font-mono py-10">Adventure Awaits in the World of Query Quest Where Every Query Unveils a New Challenge!</div>
                    <div className='lg:text-left text-3xl font-bold text-center font-mono text-pink-800'>
                        <ReactTyped
                            strings={[
                                "Unleash the Power of Data!",
                                "Embark on a Data-Driven Adventure!",
                                "Master SQL, Conquer the Islands of Data!",
                            ]}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                    <div className="buttons lg:w-1/2 w-full py-10 relative flex lg:justify-start justify-center  top-0">
                        <div className="flex items-center justify-center gap-5">
                            <a href="/play" className='py-4 px-6 rounded-lg border-none bg-black text-white font-bold text-lg lg:text-2xl transition duration-200 hover:scale-105' role='button'>Play!</a>
                            <a href="/about" className='py-4 px-6 rounded-lg border-none bg-black text-white font-bold text-lg lg:text-2xl transition duration-200 hover:scale-105'>About us</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-fit h=fit z-10">
                <div className='lg:w-[600px] lg:h-[400px] w-[460px] h-[300px] bg-cover bg-no-repeat' style={{backgroundImage: `url(${heroImage})`}}></div>
            </div>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                    <path fill="#ffd700" fill-opacity="1" d="M0,0L48,42.7C96,85,192,171,288,197.3C384,224,480,192,576,165.3C672,139,768,117,864,138.7C960,160,1056,224,1152,256C1248,288,1344,288,1392,288L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
                </svg> */}
            {/* <div className="absolute h-[1100px] w-[90%] -rotate-[41deg] top-20 left-[37rem] bg-yellow-500 z-0"></div> */}
            {/* <div className="relative w-1/2 h-full top-0 left-1/2 bg-yellow-500 z-0"></div> */}
        </div>
    )
}

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/skills/about.jpg';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#800000]'>
            About
          </p>
          <h2 className='py-4'>Who Am I</h2>
          <p className='py-2 text-gray-600'>
             I have always had a passion for
            technology and working with computers. In 2020 I started working
            with HTML, CSS, JavaScript, ReactJs, NextJs, and AWS to.
          </p>
          <p className='py-2 text-gray-600'>
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning Javascript and was even more
            enthused with designing websites. I am
            now spending my time building projects with React JS, Firebase, and
            learning new technologies.
          </p>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-x' alt='/' /> 
        </div>
      </div>
    </div>
  );
};

export default About;
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import FoodApp from '../public/assets/skills/Food-App.png'
import WeatherApp from '../public/assets/skills/Weather-App.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#800000]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Weather App'
            backgroundImg={WeatherApp}
            projectUrl='https://tsfl-weather.vercel.app/'
            tech='React JS'
          />
          <ProjectItem
            title='TSFL Eats'
            backgroundImg={FoodApp}
            projectUrl='https://tsfl-eats.vercel.app/'
            tech='React JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
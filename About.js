import React, { useEffect } from 'react';
import skill from '../assets/skill.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  const config = {
    topics: 'Hi, Im Ganga. Currently pursuing studies at Gobi Arts & Science College. I am a positive, enthusiastic, and competent Web Developer with a deep understanding of frontend and backend technologies',
    topics2:' I create user-friendly websites that are easy to navigate. I am ambitious and passionate about ensuring websites function effectively.'

    
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section id="About" className='flex flex-col md:flex-row justify-center bg-ordinary'>
      <div className='w-full md:w-1/3 py-10' data-aos="fade-right">
        <img src={skill} alt="Girls" className="" />
      </div>
      <div className='w-full md:w-1/2 flex px-14 text-3xl text-white' data-aos="fade-left">
        <div className='flex flex-col justify-center'>
          <h1 className='flex flex-col text-4xl border-b-4 border-primary mb-5 w-[180px] font-bold'>About Me</h1>
          <p className='pb-5'>{config.topics}</p>
          <p className='pb-5'>{config.topics2}</p>
        </div>
      </div>
    </section>
  );
}

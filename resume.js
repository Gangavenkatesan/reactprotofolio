import React, { useEffect } from 'react';
import resume from '../assets/resume.png';
import ganga from '../assets/ganga.pdf';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a duration of 1000ms
  }, []);

  return (
    <section id="Resume" className="flex flex-col md:flex-row justify-center bg-sub" data-aos="fade-up">
      <div className="w-full md:w-1/3 py-10" data-aos="fade-right">
        <img className="mx-auto" src={resume} alt="Resume" />
      </div>
      <div className="flex px-4 md:px-14 text-4xl md:text-2xl text-white" data-aos="fade-left">
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl border-b-4 border-secondary  mb-5 w-[140px] font-bold">Resume</h1>
          <p className="text-base md:text-2xl whitespace-nowrap">
            You can view my resume{' '}
            <a className="button hover:border-secondary" href={ganga} download>
              Download
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

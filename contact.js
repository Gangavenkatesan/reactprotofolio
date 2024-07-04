import React, { useEffect } from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';

export default function Contact() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with options if needed
  }, []);

  return (
    <section id="Contact" className="flex flex-col bg-ordinary justify-center px-5 py-10 text-white" data-aos="fade-up">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl border-b-4 border-primary">Contact</h1>
        <p className="mb-6 text-base md:text-2xl">If you want to discuss more in detail, please contact me</p>
      </div>
      <div className="flex flex-col w-[300px] justify-center md:px-80 mb-3">
        <div className="pb-5 justify-center flex md:px-80 px-0">
          <label className="md:px-3">Email: </label>
          <input className="border-2 border-primary          rounded-1xl md:w-[300px]" />
        </div>
        <div className="justify-center flex md:px-80 px-0">
          <label className="md:px-2 ">Contact: </label>
          <input className="border-2 border-primary rounded-1xl md:w-[302px]" />
        </div>
      </div>
    </section>
  );
}

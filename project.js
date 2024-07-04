import React, { useEffect } from 'react';
import kids from '../assets/kids.jpeg';
import traveller from '../assets/traveller.jpeg';
import computer from '../assets/computer.jpeg';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Project() {
  const config = {
    Project: [
      {
        image: kids,
        description: "Refine matric-level content with interactive quizzes, colorful visuals, and simplified navigation. Ensure accessibility, implement parental controls, and maintain usability without a feedback mechanism."
      },
      {
        image: traveller,
        description: "Explore beautiful destinations worldwide with our curated travel experiences. Let our website be your passport to unforgettable adventures.",
        link: "https://gangavenkatesan.github.io/Traveller/Index.html"
      },
      {
        image: computer,
        description: "Tectovia Quiz, a DST-supported government project, is a learning app designed to boost IQ and assess abilities. It leverages various user skills to foster cognitive development."
      }
    ]
  };

  useEffect(() => {
    AOS.init({ duration: 2000 }); // Initialize AOS with a duration of 2000ms
  }, []);

  return (
    <section id="Projects" className="flex flex-col justify-center md:h-[100vh] bg-ordinary">
      <div className="md:w-1/2 w-full justify-center text-white">
        <div className="flex justify-center">
          <h1 className="text-4xl border-b-4 border-primary font-bold ">Project</h1>
        </div>
        <div className="py-10 text-center">
          <p className="text-2xl">These are my best projects</p>
        </div>
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row py-10 px-10 gap-5 text-white">
          {config.Project.map((project, index) => (
            <div key={index} className="relative" data-aos="fade-up">
              <img className="h-[300px] w-[1500px]" src={project.image} alt={project.description} onError={() => console.error(`Failed to load image: ${project.image}`)} />
              <div className="absolute left-0 right-0 bottom-0 top-[1px] bg-medium opacity-0 duration-500 hover:opacity-100">
                <p className="text-center py-5">{project.description}</p>
                {project.link && (
                  <div className='flex justify-center'>
                    <a className='btn bg-blue-500'  target='_blank' href={project.link} rel="noopener noreferrer "  >View Project</a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

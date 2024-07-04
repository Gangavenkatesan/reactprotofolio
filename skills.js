import React, { useEffect } from 'react';
import code from "../assets/code.png";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Skills() {
  const skills = [
    { name: "HTML", width: "80%" },
    { name: "CSS", width: "80%" },
    { name: "JavaScript", width: "75%" },
    { name: "MongoDB", width: "60%" },
    { name: "Node.js", width: "60%" },
    { name: "React", width: "50%" },
    { name: "Python", width: "40%" },
    { name: "Java", width: "40%" },
  ];

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <section className="bg-sub h-full min-h-screen text-white flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 mx-auto flex flex-col items-center py-10" data-aos="fade-right">
        <h1 className="text-4xl font-bold border-b-4 border-secondary ">Skills</h1>
        <div className="flex flex-col px-5 md:px-20 py-4 w-full">
          {skills.map(skill => (
            <div className="skill my-4 ml-12" key={skill.name} data-aos="fade-up">
              <label className="text-sm md:text-xl">{skill.name}</label>
              <div className="md:w-full w-1/2 bg-gray-200 rounded h-2 mt-2">
                <div className="bg-small h-2 rounded" style={{ width: skill.width }}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full md:w-1/2 flex justify-center items-center py-10 md:py-40" data-aos="fade-left">
        <div className="w-2/3 md:w-1/1">
          <img src={code} alt="Skill" className="w-full" />
        </div>
      </div>
    </section>
  );
}

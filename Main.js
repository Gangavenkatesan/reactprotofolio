import React, { useState, useEffect } from 'react';
import girls from '../assets/girls.png';
import { AiOutlineFacebook, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Main() {
  const config = {
    subtitle: 'I am a Full Stack Developer'
  };

  const textToType = "Ganga";
  const [typedText, setTypedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(200);

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    const handleTyping = () => {
      const currentText = textToType.substring(0, typedText.length + (isDeleting ? -1 : 1));
      setTypedText(currentText);

      if (!isDeleting && currentText === textToType) {
        setTimeout(() => setIsDeleting(true), 1000);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(200);
      }

      setTypingSpeed(isDeleting ? 100 : 200);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimer);
  }, [typedText, isDeleting, typingSpeed]);

  return (
    <section className='flex flex-col md:flex-row px-5 py-32 bg-sub justify-center font-main-font'>
      <div className='md:w-1/2 text-white flex flex-col' data-aos="fade-right">
        <h1 className='text-white text-6xl'>
          Hi,<br />
          I'm <span className='text-blue-800'>{typedText}</span>
          <p className='text-2xl'>
            {config.subtitle}
            <br />
          </p>
        </h1>
        <div className='flex py-5 gap-3 bg-link'>
          <a href='#' className='hover:text-white'><AiOutlineTwitter size={40} /></a>
          <a href='#' className='hover:text-white'><AiOutlineFacebook size={40} /></a>
          <a href='#' className='hover:text-white'><AiOutlineLinkedin size={40} /></a>
        </div>
      </div>

      <img className="md:w-1/3" src={girls} data-aos="fade-left" />
    </section>
  );
}

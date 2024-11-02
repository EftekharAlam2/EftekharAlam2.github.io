import React from 'react';
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import "./contact.css";
import { FaFacebook, FaWhatsapp, FaLinkedin, FaGithub, FaInstagram, FaDiscord } from 'react-icons/fa';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { QRCodeCanvas } from 'qrcode.react';

const Footer = () => {
  return (
    <footer className="text-white">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 bg-slate-700 py-7">
        <div className='ms-6'>
          <h2 className="text-xl font-bold mb-4">Contact</h2>
          <p className='flex gap-2 items-center cursor-pointer hover:text-green-400' onClick={()=>document.getElementById('my_modal_1').showModal()}> <FaLocationDot /> Monnafer More, Rajshahi, Bangladesh</p>
          <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
            </form>
            <div className="mapouter mt-5">
              <div className="gmap_canvas">
                <iframe
                  className="gmap_iframe"
                  frameBorder="0"
                  scrolling="no"
                  marginHeight="0"
                  marginWidth="0"
                  src="https://maps.google.com/maps?width=723&height=559&hl=en&q=Monnafer more, rajshahi&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                  title="Google Map"
                ></iframe>
                <a href="https://fridaynightfunkin.lol/">fnf</a>
              </div>
            </div>
          </div>
          </dialog>
          <p className="mt-2 flex gap-2 items-center cursor-pointer hover:text-green-400"
            onClick={() => window.open('https://wa.me/8801860304023', '_blank')}>
             <FaWhatsapp /> +8801860304023
          </p>
          <p className="mt-2 flex gap-2 items-center cursor-pointer hover:text-green-400"
            onClick={() => window.location.href = 'mailto:mdeftekharul.innovx@gmail.com'}>
              <IoMdMail /> mdeftekharul.innovx@gmail.com
          </p>
        </div>

        <div className='ms-6'>
          <h2 className="text-xl font-bold mb-4">Quick Links</h2>
          <ul>
            <li className='mb-2'>
              <ScrollLink to="about" className="hover:underline" smooth={true} duration={500}>
                About Me
              </ScrollLink>
            </li>
            <li className='mb-2'>
              <ScrollLink to="skills" className="hover:underline" smooth={true} duration={500}>
                My Skills
              </ScrollLink>
            </li>
            <li className='mb-2'>
              <ScrollLink to="project" className="hover:underline" smooth={true} duration={500}>
                My Projects
              </ScrollLink>
            </li>
            <li className='mb-2'>
              <ScrollLink to="contact" className="hover:underline" smooth={true} duration={500}>
                Contact Me
              </ScrollLink>
            </li>
          </ul>
        </div>

        <div className='ms-6'>
          <h2 className="text-xl font-bold mb-4">Connect With Me</h2>
          <div className='flex gap-4'>
            <a href="https://github.com/EftekharAlam2/" target="_blank"
                rel="noopener noreferrer" className="text-white text-2xl">
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/md-eftekharul-alam/" target="_blank"
                rel="noopener noreferrer" className="text-white text-2xl">
                <FaLinkedin />
            </a>
            <a href="https://www.facebook.com/eftekhar.alam.54772?mibextid=ZbWKwL" target="_blank"
                rel="noopener noreferrer" className="text-white text-2xl">
                <FaFacebook />
            </a>
            <a href="https://www.instagram.com/eftekharator/profilecard/?igsh=M2MyMTdmcjZ1aWZz" target="_blank"
                rel="noopener noreferrer" className="text-white text-2xl">
                <FaInstagram />
            </a>
            <a href="https://discord.com/channels/1294164480317718539/1294164480317718542" target="_blank"
                rel="noopener noreferrer" className="text-white text-2xl">
                <FaDiscord />
            </a>
          </div>
          <div className='mt-6'>
            <QRCodeCanvas value="https://eftekharalam2.github.io/" size={100} />
          </div>
        </div>
      </div>
      <div className="text-center text-base bg-slate-900 py-5">
        Md Eftekharul Alam &copy; {new Date().getFullYear()} All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

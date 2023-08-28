import React from "react";
import { FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import FooterListTitle from "./FooterListTitle";
import { paymentCard } from "../assets/images";
import Image from "../designLayouts/Image";
import FooterBottom from '../Footer/FooterBottom';

// styles 
import './Footer.css'
import { Link } from "react-router-dom";

const Footer = () => {

  return (
    <div className="footer w-full pt-20">
      <div className="max-w-container mx-auto grid grid-cols-1 md:grid-cols-2  xl:grid-cols-6 px-12 pb-10 gap-10">
        <div className="col-span-2">
          <img src="./assets/images/logo.png" className="min-w-0 w-64 ml-10" alt="logo" />
          <div className="flex flex-col gap-6">
            <p className="text-base w-full xl:w-[80%] font-blender400">
              Welcome to Cyberpunk Computer. Online Computer store in Pakistan. Buy CPUs, GPUs, Motherboards & all hardware components at the best prices in Pakistan.
            </p>

          </div>
        </div>
        <div>
          <FooterListTitle title="COPORATE" />

          <ul className="flex flex-col gap-2 font-blender400">
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                About Us
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                Contact
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                FAQs
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                Policies
              </Link>
            </li>
          </ul>
        </div>
        <div>

          <FooterListTitle title="ACCOUNT" />

          <ul className="flex flex-col gap-2 font-blender400">
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                Profile
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">

                Orders
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">

                Addresses
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                Account Details
              </Link>
            </li>
            <li className="font-titleFont text-base hover:underline decoration-[1px] underline-offset-2 cursor-pointer duration-300">
              <Link to="/error404">
                Payment Options
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 flex flex-col justify-center w-full px-4">
          <ul className="flex justify-center gap-2 py-10">
            <a
              href="https://www.youtube.com/@reactjsBD"
              target="_blank"
              rel="noreferrer"
            >
              <li className="social w-7 h-7 cursor-pointer text-lg rounded-xl flex justify-center items-center duration-300">
                <FaYoutube />
              </li>
            </a>
            <a
              href="https://github.com/noorjsdivs"
              target="_blank"
              rel="noreferrer"
            >
              <li className="social w-7 h-7 cursor-pointer text-lg rounded-full flex justify-center items-center duration-300">
                <FaGithub />
              </li>
            </a>
            <a
              href="https://www.facebook.com/Noorlalu143/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="social w-7 h-7 cursor-pointer text-lg rounded-full flex justify-center items-center duration-300">
                <FaFacebook />
              </li>
            </a>
            <a
              href="https://www.linkedin.com/in/noor-mohammad-ab2245193/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="social w-7 h-7 cursor-pointer text-lg rounded-full flex justify-center items-center duration-300">
                <FaLinkedin />
              </li>
            </a>
          </ul>
          <div className="w-full flex justify-center">
            <Image
              className={`w-[80%] lg:w-[60%] mx-auto}`}
              imgSrc={paymentCard}
            />
          </div>
        </div>

      </div>
      <FooterBottom />
    </div>
  );
};

export default Footer;

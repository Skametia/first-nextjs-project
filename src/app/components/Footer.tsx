import React from "react";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BiLogoBaidu } from "react-icons/bi";
const Footer = () => {
  return (
    <div className="bg-slate-600 text-gray py-12 ">
      <section className="flex justify-center text-white md:justify-between p-4 border-b">
        {/* Left */}
        <div className="hidden lg:block me-5 text-lg font-semibold">
          <span>Get connected with us on social networks:</span>
        </div>
        {/* Left */}
        {/* Right */}
        <div className="flex items-center">
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsFacebook />
          </a>
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsTwitterX />
          </a>
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsGoogle />
          </a>
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsInstagram />
          </a>
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsLinkedin />
          </a>
          <a href="#" className="me-4 text-white hover:text-gray-400">
            <BsGithub />
          </a>
        </div>
        {/* Right */}
      </section>

      <div className="max-w-8xl mt-10 mx-auto text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase font-bold mb-4 flex mx-auto py-1 ">
            <BiLogoBaidu />
            Company name
          </h6>
          <p className="font-normal text-lg text-white w-[60%] ">
            Here you can use rows and columns to organize your footer content.
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </div>

        <div>
          <h6 className="text-uppercase fw-bold mb-4">Products</h6>
          <div className="font-normal text-xl text-white leading-loose mx-auto">
            <p>
              <a href="#!" className="text-reset">
                Angular
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                React
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Vue
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Laravel
              </a>
            </p>
          </div>
        </div>

        <div>
          <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
          <div className="font-normal text-xl text-white leading-loose mx-auto">
            <p>
              <a href="#!" className="text-reset">
                Pricing
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Settings
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Orders
              </a>
            </p>
            <p>
              <a href="#!" className="text-reset">
                Help
              </a>
            </p>
          </div>
        </div>

        <div>
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <div className="font-normal text-xl text-white leading-loose">
            <p>
              <i className="fas fa-home me-3" /> New York, NY 10012, US
            </p>
            <p>
              <i className="fas fa-envelope me-3" />
              Skametia@gmail.com
            </p>
            <p>
              <i className="fas fa-phone me-3" /> + 01 234 567 88
            </p>
            <p>
              <i className="fas fa-print me-3" /> + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div
        className="text-center mt-5 p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        <a
          className="text-teal-500 font-normal text-xl"
          href="https://mdbootstrap.com/"
        >
          @ 2024 Created By Sadhana Rathour
        </a>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import fb from "../assets/images/Fb.png"
import insta from "../assets/images/insta.png"
import twitter from "../assets/images/twitter.png"
export default function Footer() {
  return (
    <footer className=" mt-8 inset-x-0 bottom-0 flex flex-col-reverse justify-between px-14 py-4 text-ash mx-auto md:flex-row">
      <p className="md: text-center">
        All copyrights reserved | Des and Dev by Scarlet & Fvtima
      </p>
      <div className="flex justify-center space-x-6">
        <a href="">About Us</a>
        <a href="">Privacy Policy</a>
        <a href="">Contact Us</a>
      </div>
      <div className="flex justify-center space-x-6">
        <a href="">
          <img src={fb} />
        </a>
        <a href="">
          <img src={insta} />
        </a>
        <a href="">
          <img src={twitter} />
        </a>
      </div>
    </footer>
  );
}

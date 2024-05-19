"use client";
import React, { useEffect } from "react";
import anime from "animejs";

const HeroAnimation = () => {
  useEffect(() => {
    // const path = anime.path("#demo-svg path");
    // var path = anime.path(".path");

    anime({
      targets: "#cursor",
      //   translateX: path("240"),
      //   translateY: path("290"),
      translateX: 240,
      translateY: 290,
      //   rotate: path,
      duration: 3000,
      loop: false,
      easing: "linear",
      //   direction: "alternate",
    });

    anime({
      targets: "#target-div",
      opacity: 0.0,
      //   duration: 6000,
      delay: 3001,
      loop: false,
      direction: "alternate",
      easing: "easeInOutExpo",
    });

    anime({
      targets: "#filter-menu",
      opacity: 1,
      //   duration: 6000,
      delay: 3001,
      loop: false,
      translateX:10,
      translateY:10,
    //   direction: "alternate",
    //   easing: "easeInOutExpo",
    });

    /*     anime({
      targets: ".box",
      translateX: 250,
      translateY: 250,
      //   width: "100%", // -> from '28px' to '100%',
      easing: "easeInOutQuad",
      direction: "alternate",
      loop: 2,
    }); */
  }, []);

  return (
    <>
      <div className="relative">
        <div id="cursor" className="absolute z-10">
          {" "}
          👈
        </div>
        {/* <svg id="demo-svg" width={1000} height={500}>
          <path
            opacity={0.5}
            stroke="red"
            fill="none"
            d="M 400 150 L 500 250 L 500 400 L 350 450 L 250 300 Z"
          ></path>
        </svg> */}
        <div id="target-div" className=" absolute top-[290px] left-[240px]">
          🧿
        </div>
        <div id="filter-menu">
            <div className="w-24 h-32 bg-gray-800 absolute top-[290px] left-[240px] opacity-0 z-20"></div>
        </div>
      </div>
    </>
  );
};

export default HeroAnimation;

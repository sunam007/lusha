"use client";
import React, { useEffect } from "react";
import anime from "animejs";

const HeroAnimation = () => {
    useEffect(() => {
        // const path = anime.path("#demo-svg path");
        // var path = anime.path(".path");

        // var tl = anime.timeline({
        //     easing: 'easeOutExpo',
        //     duration: 750
        // });

        anime({
            targets: "#cursor",
            //   translateX: path("240"),
            translateX: -50,

            duration: 1000,
            loop: false,
            easing: "easeInOutSine",
            direction: "alternate",
            autoplay: true
        });

        anime({
            targets: "#target-div",
            duration: 800,
            scale: 1.5,
            delay: 800,
            loop: false,
            easing: "linear",
        });

        anime({
            targets: "#filter-menu",
            duration: 1000,
            delay: 900,
            loop: false,
            translateX: -5,
            translateY: -10,
            display: "block",
            //   scale:1.1,
        });

        anime({
            targets: "#filter-div",
            opacity:1,
            delay: 900,
            duration: 1000,
        });

    }, []);


    return (
        <>
            <div className=" w-1/2 border border-red-300 relative">
                <div className="relative w-56 border border-red-200">
                    <div id="target-div" className="absolute bottom-0">
                        🧿
                    </div>
                    <div id="cursor" className="absolute bottom-0 left-[60px] z-10 origin-center rotate-45">
                        👈
                    </div>

                </div>

                <div id="filter-menu">
                    <div id="filter-div" className="w-60 h-72 bg-gray-400 rounded  absolute -left-4 -top-9 opacity-0"></div>
                </div>
            </div>
        </>
    );
};

export default HeroAnimation;

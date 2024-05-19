"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { MdFilterList } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";

const HeroAnimation = () => {
    const [showCursor, setShowCursor] = useState(true)
    useEffect(() => {

        // anime({
        //     targets: "#cursor",
        //     translateX: -50,
        //     rotate: 45,
        //     duration: 1000,
        //     loop: false,
        //     easing: "easeInOutSine",
        //     direction: "alternate",
        //     complete: function (anim) {
        //         console.log(anim.completed);
        //         if (anim.completed) {
        //             setShowCursor(false)
        //         }
        //     }
        // });

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
            // display: "block",
            //   scale:1.1,
        });

        anime({
            targets: "#filter-div",
            opacity: 1,
            delay: 900,
            duration: 1000,
            // direction:"linear"
        });

        anime({
            targets: '#second-cursor',
            // delay: 1100,
            delay: 100,
            duration: 10000,
            rotate: 45,
            opacity: 1,
            keyframes: [
                { translateX: -10 },
                { translateY: 60 },
                { translateX: 105 },
                { translateY: 60 },
                { translateX: -10 },
                { translateY: 120 },
                { translateX: 105 },
                { translateY: 120 },
                { translateX: 160 },
                { translateY: 10 },
            ],
            easing: 'easeOutElastic(1, .8)',
            // loop:true
        });

        anime({
            targets: '#path-svg .path',
            keyframes: [
                { translateY: -40 },
                { translateX: 250 },
                { translateY: 40 },
                { translateX: 0 },
                { translateY: 0 }
            ],
            duration: 4000,
            easing: 'easeOutElastic(1, .8)',
            loop: true
        });

    }, []);


    return (
        <>
            <div className=" w-1/2 border border-red-300 relative">
                <div className="relative w-56 border border-red-200">
                    <div id="target-div" className="absolute bottom-0">
                        🧿
                    </div>
                    <div id="cursor" className={`absolute bottom-0 left-[60px] z-10 ${showCursor ? "block" : "hidden"}`}>
                        👈
                    </div>

                </div>

                <div id="filter-menu">
                    <div id="filter-div" className="w-60 h-72 bg-gray-100 rounded  absolute -left-4 -top-9 opacity-0">
                        <div className="flex justify-between items-center p-4 space-x-6 border-b-2 border-gray-300">
                            <MdFilterList />
                            <h3 className="text-base font-semibold">Filter</h3>
                        </div>
                        <div className="flex flex-wrap">

                            <div className="flex justify-center items-baseline space-x-2 p-2 bg-gray-200 m-2 border rounded">
                                <BsBuildings />
                                <h3 className="text-base font-semibold">Industry</h3>
                            </div>
                            <div className="flex justify-center items-baseline space-x-2 p-2 bg-gray-200 m-2 border rounded">
                                <BsBuildings />
                                <h3 className="text-base font-semibold">Industry</h3>
                            </div>
                            <div className="flex justify-center items-baseline space-x-2 p-2 bg-gray-200 m-2 border rounded">
                                <BsBuildings />
                                <h3 className="text-base font-semibold">Industry</h3>
                            </div>
                            <div className="flex justify-center items-baseline space-x-2 p-2 bg-gray-200 m-2 border rounded">
                                <BsBuildings />
                                <h3 className="text-base font-semibold">Industry</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="second-cursor" className="absolute left-[11px] -top-[23px] opacity-0 origin-center rotate-45">
                    👈
                </div>

                <svg id="path-svg" width={1000} height={500} >
                    <path className="absolute" stroke="red" fill="none" d="M 400 300 L 400 350 L 500 350 L 400 450 L 500 450 L 500 300 Z"></path>
                </svg>
            </div>
        </>
    );
};

export default HeroAnimation;

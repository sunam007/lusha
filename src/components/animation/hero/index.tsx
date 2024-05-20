"use client";
import React, { useEffect, useState } from "react";
import anime from "animejs";
import { MdFilterList } from "react-icons/md";
import { BsBuildings } from "react-icons/bs";
import Image from "next/image";
import lusha from "@public/icons/lush-icon.png"
import cursor from "@public/icons/cursor.png"
import cursorBlue from "@public/icons/cursor-blue.png"

const HeroAnimation = () => {
    const [showCursor, setShowCursor] = useState(true)
    const [showFirstAnimation, setShowFirstAnimation] = useState(true)
    const [showSecondAnimation, setShowSecondAnimation] = useState(false)
    // const [showFirstAnimation, setShowFirstAnimation] = useState(false)
    // const [showSecondAnimation, setShowSecondAnimation] = useState(true)
    useEffect(() => {

        anime({
            targets: "#cursor",
            translateX: -50,
            // rotate: ['0', '45'],
            duration: 2000,
            loop: false,
            easing: "easeInOutSine",
            direction: "alternate",
            complete: function (anim) {
                console.log(anim);
                if (anim.completed) {
                    setShowCursor(false)
                }
            }
        });

        anime({
            targets: "#target-div",
            duration: 800,
            scale: 1.1,
            delay: 800,
            loop: false,
            easing: "linear",
        });

        anime({
            targets: "#filter-menu",
            delay: 1900,
            duration: 2000,
            loop: false,
            translateX: -5,
            translateY: -10,
            // display: "block",
            //   scale:1.1,
        });

        anime({
            targets: "#filter-div",
            opacity: 1,
            delay: 1900,
            duration: 2000,
            // direction:"linear"
        });

        anime({
            targets: '#second-cursor',
            delay: 2100,
            duration: 5000,
            // rotate: 45,
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
            complete: function (anim) {
                console.log("animation propertiess :", anim);
                console.log("is Animation completed = ", anim.completed);
                if (anim.completed) {
                    setShowFirstAnimation(false);
                    setShowSecondAnimation(true);
                }
            }
        });

        // var tl = anime.timeline({
        //     easing: 'linear',
        //     direction:"alternate",
        //     duration: 750,
        //     loop:true,
        //   });

        //   tl
        //   .add({
        //     targets: '#inner-circle div',
        //     translateX:5,
        //     translateY:5,
        //     // delay:2100,
        //     duration: 2000,

        //   }).add({
        //     targets: '#outer-circle div',
        //     translateX:5,
        //     translateY:5,
        //     // delay:2100,
        //     duration: 2000,
        //   })

        anime({
            targets: "#circle-wrapper",
            translateX: 2,
            translateY: 2,
            delay: 1000,
            duration: 9000,
            // loop: true,
            // easing: 'easeOutElastic(1, .8)',
            easing: 'easeInOutQuad',
            direction: "normal"
        });

        anime({
            targets: "#inner-circle div",
            translateX: 5,
            translateY: 5,
            // delay:2100,
            duration: 2000,
            loop: true,
            easing: "linear",
            direction: "alternate"
        });

        anime({
            targets: "#outer-circle div",
            translateX: -5,
            translateY: 5,
            // delay:2100,
            duration: 2000,
            loop: true,
            easing: "linear",
            direction: "alternate",
        });

        anime({
            targets: "#third-cursor",
            left: -10,
            top: -10,
            delay: 7000,
            duration: 1000,
            loop: false,
            easing: "easeInOutSine",
            direction: "alternate",
            // complete: function (anim) {
            //     console.log(anim);
            //     if (anim.completed) {
            //         setShowCursor(false)
            //     }
            // }
        });


    }, []);


    return (
        <>
            <div className=" w-1/2  relative mx-auto">
                {/* first animation */}

                {
                    showFirstAnimation
                    &&
                    <>
                        <div className="relative w-56">
                            <div id="target-div" className="absolute bottom-0">
                                <Image src={lusha} width={32} height={32} alt="lisha" />
                                {/* 🧿 */}
                            </div>
                            <div id="cursor" className={`absolute bottom-0 left-[60px] z-10 ${showCursor ? "block" : "hidden"}`}>
                                <Image src={cursorBlue} width={28} height={28} alt="cursor" />
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
                            <Image src={cursorBlue} width={28} height={28} alt="cursor" />
                        </div>
                    </>
                }

                {/* second animation */}

                {/*
                            transform: translateX(-25px) translateY(-30px) scale(1.3);
                        */}

                {
                    <div id="circle-wrapper" className={`absolute -left-[75px] top-[10px]  ${showSecondAnimation ? "visible " : "invisible"}`}>
                        <div id="inner-circle" className="w-56 h-56 border border-red-600 rounded-full relative left-[50px] -top-[16px]">

                            <div style={{}} className="w-12 h-12 border border-red-400 rounded-full absolute left-[130px] -top-[10px]">
                                <img src="https://picsum.photos/200" className=" rounded-full" alt="" />
                            </div>

                            <div className="w-12 h-12 border border-red-400 rounded-full absolute  left-[10px] top-[160px]">
                                <img src="https://picsum.photos/200" className=" rounded-full" alt="" />
                            </div>
                        </div>

                        <div id="outer-circle" className="w-80 h-80 border border-red-600 rounded-full relative -top-[288px] -left[32px]">

                            <div style={{}} className="w-12 h-12 border border-red-400 rounded-full absolute left-[35px] top-[10px] ">
                                <img src="https://picsum.photos/200" className=" rounded-full" alt="" />
                            </div>

                            <div style={{}} className="w-12 h-12 border border-red-400 rounded-full absolute left-[190px] top-[280px]">
                                <img src="https://picsum.photos/200" className=" rounded-full" alt="" />
                            </div>

                            <div style={{}} className="w-12 h-12 border border-red-400 rounded-full absolute left-[290px] top-[100px]">
                                <img src="https://picsum.photos/200" className=" rounded-full" alt="" />
                            </div>
                        </div>
                    </div>
                }

                <div id="third-cursor" className="absolute left-[75px] top-[100px]">
                    <Image
                        src={cursorBlue}
                        width={28}
                        height={28}
                        alt="cursor"
                    />
                </div>


            </div>
        </>
    );
};

export default HeroAnimation;

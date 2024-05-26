"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import Platform from "@public/images/Platform.png"
import Extension from "@public/images/Extension.png"
import Enrich from "@public/images/Enrich.png"

import "./style.css";
import CapabilityItem from './capabilityItem';

const CAPABILITY_PROFILE = "PROFILE";
const CAPABILITY_EXTENSION = "EXTENSION";
const CAPABILITY_ENRICH = "ENRICH";

const CAPABILITY_DATA = [
    {
        title: "Get laser-focused lists",
        description: "Use our razor-sharp filters to get your list of 1,000 prospects in one go. Easily build your lists with accurate and actionable data on each single prospect. In one click, export lists to your CRM and put your workflows on autopilot.",
        image: Platform,
        navIdentifier: CAPABILITY_PROFILE
    },
    {
        title: "Prospect from anywhere",
        description: "Install Lusha on your browser to get instant contact and company data on all the people you want to reach, right where you work: LinkedIn, Salesforce, or any company website.",
        image: Extension,
        navIdentifier: CAPABILITY_EXTENSION
    },
    {
        title: "CRM Data Enrichment",
        description: "Automatically enrich your Salesforce records with accurate contact and company data - at scale. Transform missing and poor data into new business opportunities in minutes.",
        image: Enrich,
        navIdentifier: CAPABILITY_ENRICH
    },
    
]

const Navigation = () => {

    const [activeCapability, setActiveCapability] = useState(CAPABILITY_PROFILE)

    return (
        <div className="mb-4">

            <ul className="flex items-center space-x-4 flex-wrap -mb-px text-sm font-medium text-center" >

                <li className="me-2" role="presentation">
                    <button
                        className={`nav-text  nav-transition ${activeCapability === CAPABILITY_PROFILE ? "nav-active nav-transition" : ""}`}
                        onClick={() => setActiveCapability(CAPABILITY_PROFILE)}>
                        Profile
                    </button>
                </li>

                <li className="me-2">
                    <button
                        className={`nav-text   ${activeCapability === CAPABILITY_EXTENSION ? "nav-active nav-transition" : ""}`}
                        onClick={() => setActiveCapability(CAPABILITY_EXTENSION)}>
                        Extension
                    </button>
                </li>

                <li >
                    <button
                        className={`nav-text nav-transition ${activeCapability === CAPABILITY_ENRICH ? "nav-active" : ""}`}
                        onClick={() => setActiveCapability(CAPABILITY_ENRICH)}>
                        Enrich
                    </button>
                </li>
            </ul>


            <div id="default-styled-tab-content">
                {
                    CAPABILITY_DATA.map(capability => {
                        return (
                            <>
                                {(activeCapability == capability.navIdentifier)
                                    &&
                                    <CapabilityItem
                                        key={capability.title}
                                        title={capability.title}
                                        description={capability.description}
                                        image={capability.image}
                                    />
                                }
                            </>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default Navigation;
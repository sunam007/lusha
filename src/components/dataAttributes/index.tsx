import React from "react";
import Image from "next/image";
import revenue from "@public/icons/Revenue_icon.svg";
import location from "@public/icons/companylocationpu.svg";
import mobile from "@public/icons/Unrivalled-data-quality-mobile.svg";
import contactPhone from "@public/icons/Contactphonepu.svg";
import department from "@public/icons/Department_icon.svg";
import AttributeItem from "./attributeItem";

const DATA_ARR = [
  {
    id: 1,
    logo: revenue,
    caption: "Revenue"
  },
  {
    id: 2,
    logo: location,
    caption: "Company location"
  },

  {
    id: 3,
    logo: contactPhone,
    caption: "Contact phone"
  },
  {
    id: 4,
    logo: mobile,
    caption: "Country code"
  },
  {
    id: 5,
    logo: department,
    caption: "Department"
  },
  {
    id: 11,
    logo: mobile,
    caption: "Revenue"
  },
  {
    id: 21,
    logo: location,
    caption: "Company location"
  },

  {
    id: 31,
    logo: contactPhone,
    caption: "Contact phone"
  },
  {
    id: 41,
    logo: mobile,
    caption: "Country code"
  },
  {
    id: 51,
    logo: department,
    caption: "Department"
  },
]



const DataAttributes = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 pt-16">
        <div className="block px-4">
          <h2 className="text-center lg:pt-24 lg:mb-12 font-bold text-3xl lg:text-[32px] leading-9 tracking-tighter lg:tracking-normal">
            Laser target your next best customer with all the right data
            attributes
          </h2>
        </div>

        <div className="max-w-[900px] mx-auto flex flex-wrap content-between text-left">
          {
            DATA_ARR.map(item => <AttributeItem key={item.id} logo={item.logo} caption={item.caption} />)
          }
        </div>

      </div>
    </section>
  );
};

export default DataAttributes;

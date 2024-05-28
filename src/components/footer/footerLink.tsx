import React from 'react';


const FooterLink = ({ href, name }) => {
  return (
    <li className="leading-[32px] text-sm text-[#151417]">
      <a href={href} className="hover:underline">{name}</a>
    </li>
  );
};

export default FooterLink;

import React from 'react';
import FooterLink from './footerLink';

const FooterSection = ({ title, links }) => {
  return (
    <div>
      <h2 className="lg:mb-6 text-sm font-bold text-[#151417] tracking-tighter">{title}</h2>
      <ul className="">
        {links.map(link => (
          <FooterLink key={link.name} href={link.href} name={link.name} />
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;

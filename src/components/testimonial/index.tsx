import React from "react";
import Card from "./card";

const Testimonial = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 pt-16">

        <div className="grid gap-6 md:grid-cols-3">
          <Card
            image="https://via.placeholder.com/48"
            name="Antoine Garcia"
            company="Ippon Technologies"
            rating={5}
            testimonial="Lusha’s user experience is second-to-none. I’ve used a few competitors in the past - they were so cumbersome."
            statValue="80%"
            statLabel="Data accuracy"
          />
          <Card
            image="https://via.placeholder.com/48"
            name="Guido Mangani"
            company="Field Control Analytics"
            rating={5}
            testimonial="On one project alone… I generated 800% ROI. I’m extremely satisfied."
            statValue="800%"
            statLabel="ROI increase"
          />
          <Card
            image="https://via.placeholder.com/48"
            name="Eric Lindroos"
            company="Gong"
            rating={5}
            testimonial="I honestly couldn’t imagine working without Lusha, it’s a game changer."
            statValue="99%"
            statLabel="More meetings"
          />
        </div>


      </div>
    </section>
  );
};

export default Testimonial;

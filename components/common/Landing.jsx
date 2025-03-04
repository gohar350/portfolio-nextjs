import React from "react";
import Image from "next/image";

const Landing = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <Image src="/assets/img/bg-gohar.jpg" alt="" fill />
      <div className="container">
        <h2>Muhammad Gohar</h2>
        <p>
          I'm{" "}
          <span
            className="typed"
            data-typed-items="Software Engineer !, Frontend Developer !, REACT Developer !, NEXT.js Developer !, Javascript Developer !, Full-Stack Developer !, API Integrator !, SEO Specialist !"
          >
            Software Engineer !
          </span>
          <span
            className="typed-cursor typed-cursor--blink"
            aria-hidden="true"
          ></span>
        </p>
      </div>
    </section>
  );
};

export default Landing;

import Image from "next/image";
export default function Home() {
  return (
    <main className="main">
      <section id="hero" className="hero section dark-background">
        <Image src="/assets/img/bg-gohar.jpg" alt="" fill />
        <div className="container">
          <h2>Muhammad Gohar</h2>
          <p>
            I'm{" "}
            <span
              className="typed"
              data-typed-items="Designer, Developer, Freelancer, Photographer"
            >
              Software Developer
            </span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
            <span
              className="typed-cursor typed-cursor--blink"
              aria-hidden="true"
            ></span>
          </p>
        </div>
      </section>
    </main>
  );
}

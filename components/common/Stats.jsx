import React from "react";

const Stats = ({ stats = {} }) => {
  return (
    <>
      <section id="stats" className="stats section">
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row gy-4">
            {stats?.stats?.map((item, index) => (
              <div key={index} className="col-lg-3 col-md-6">
                <div className="stats-item">
                  <i className={item?.icon}></i>
                  <span
                    data-purecounter-start="0"
                    data-purecounter-end={item.value}
                    data-purecounter-duration="1"
                    className="purecounter"
                  ></span>
                  <p>
                    <strong>{item?.title}</strong>{" "}
                    <span>{item?.description}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Skills</h2>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content skills-animation">
            {[0, 1]?.map((colIndex) => (
              <div key={colIndex} className="col-lg-6">
                {stats?.skills
                  ?.slice(
                    colIndex * Math.ceil(stats?.skills?.length / 2),
                    (colIndex + 1) * Math.ceil(stats?.skills?.length / 2)
                  )
                  ?.map((skill, index) => (
                    <div key={index} className="progress">
                      <span className="skill">
                        <span>{skill?.name}</span>{" "}
                        <i className="val">{skill?.percentage}%</i>
                      </span>
                      <div className="progress-bar-wrap">
                        <div
                          className="progress-bar"
                          role="progressbar"
                          aria-valuenow={skill?.percentage}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: `${skill?.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;

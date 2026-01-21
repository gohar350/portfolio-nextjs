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
          <h2>Technical Skills</h2>
          <p>Expert-level proficiency in modern web development technologies</p>
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

        {stats?.technicalSkills && (
          <div className="container mt-5" data-aos="fade-up" data-aos-delay="200">
            <div className="tech-skills-grid">
              {Object.entries(stats.technicalSkills).map(([category, skills], index) => (
                <div key={category} className="tech-category" data-aos="fade-up" data-aos-delay={100 + index * 50}>
                  <h4 className="category-title">
                    <i className={getCategoryIcon(category)}></i>
                    {formatCategoryName(category)}
                  </h4>
                  <div className="tech-tags">
                    {skills.map((skill, idx) => (
                      <span key={idx} className="tech-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </section>
    </>
  );
};

const getCategoryIcon = (category) => {
  const icons = {
    languages: "bi bi-code-slash",
    frontend: "bi bi-window",
    stateManagement: "bi bi-diagram-3",
    styling: "bi bi-palette",
    realTime: "bi bi-broadcast",
    backend: "bi bi-server",
    database: "bi bi-database",
    devops: "bi bi-gear",
    testing: "bi bi-check2-circle",
    seo: "bi bi-search",
  };
  return icons[category] || "bi bi-star";
};

const formatCategoryName = (category) => {
  const names = {
    languages: "Languages",
    frontend: "Frontend",
    stateManagement: "State Management",
    styling: "Styling & UI",
    realTime: "Real-Time",
    backend: "Backend",
    database: "Database",
    devops: "DevOps & Tools",
    testing: "Testing",
    seo: "SEO & Performance",
  };
  return names[category] || category;
};

export default Stats;
